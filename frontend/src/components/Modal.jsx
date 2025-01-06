import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose, media, saved, setSaved, isSavedPage }) => {
  if (!isOpen) return null;

  const saveMedia = (media) => {
    if (saved.some((savedMedia) => savedMedia.id === media.id)) {
      toast.info("Media already added to collection", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
    } else {
      setSaved([...saved, media]);
      toast.success("Media added to collection", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
    }
  };

  const downloadMedia = (url, filename) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.blob();
      })
      .then((file) => {
        const tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = filename;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to download file", {
          position: "top-right",
          autoClose: 1500,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="back-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="button-container-modal">
          {!isSavedPage && (
            <button
              className="download-button-modal"
              aria-label={`Save ${media.media_type}`}
              onClick={() => saveMedia(media)}
            >
              <i className="fas fa-star" />
            </button>
          )}
          <button
            className="download-button-modal"
            onClick={() => {
              const filename = `${media.media_type}-${media.title || "default"}-${media.id}.${
                media.media_type === "video" ? "mp4" : "jpg"
              }`;
              downloadMedia(media.file, filename);
            }}
          >
            <i className="fas fa-download"></i> Download
          </button>
        </div>

        {media.media_type === "image" ? (
          <img
            src={media.file}
            alt={media.title || "Saved Item"}
            className="modal-image"
          />
        ) : media.media_type === "video" ? (
          <video controls className="modal-video">
            <source src={media.file} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
