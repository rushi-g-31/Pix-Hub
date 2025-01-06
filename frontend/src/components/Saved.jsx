import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Modal from "./Modal";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Saved = ({ saved, setSaved, loader }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(loader);

  useEffect(() => {
    if (!loader) {
      setLoading(false);
    }
  }, [loader]);

  const openModal = (media) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
  };

  const removeFromSaved = (id) => {
    const updatedSaved = saved.filter((item) => item.id !== id);
    setSaved(updatedSaved);
    toast.info("Item removed from collection", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  const downloadMedia = async (url, filename) => {
    try {
      const res = await fetch(url);
      const file = await res.blob();
      const tempUrl = URL.createObjectURL(file);
      const aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = filename;
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(tempUrl);
    } catch {
      toast.error("Failed to download file", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleMouseEnter = (id) => {
    const videoElement = document.getElementById(`video-${id}`);
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleMouseLeave = (id) => {
    const videoElement = document.getElementById(`video-${id}`);
    if (videoElement) {
      videoElement.pause();
    }
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid text-center" id="top">
          <div className="image-gallery">
            <ul className="images">
              {saved.length === 0 ? (
                <p>No saved items</p>
              ) : (
                saved.map((media) => (
                  <li
                    key={media.id}
                    className="image"
                    onClick={() => openModal(media)}
                  >
                    {media.media_type === "image" ? (
                      <>
                        <img
                          src={media.file}
                          className="photoVideo"
                          alt={media.title || "Saved Item"}
                        />
                        <div className="button-container">
                          <button
                            className="download-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromSaved(media.id);
                            }}
                          >
                            <i className="fas fa-trash" /> Remove
                          </button>
                          <button
                            className="download-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              downloadMedia(
                                media.file,
                                `image-${media.title || media.id}.jpg`
                              );
                            }}
                          >
                            <i className="fas fa-download" /> Download
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="video-container"
                          onMouseEnter={() => handleMouseEnter(media.id)}
                          onMouseLeave={() => handleMouseLeave(media.id)}
                        >
                          <video id={`video-${media.id}`} className="photoVideo">
                            <source
                              src={media.file}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                          <div className="play-icon">
                            <i className="bi bi-play-circle-fill"></i>
                          </div>
                          <div className="button-container">
                            <button
                              className="download-button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromSaved(media.id);
                              }}
                            >
                              <i className="fas fa-trash" /> Remove
                            </button>
                            <button
                              className="download-button"
                              onClick={(e) => {
                                e.stopPropagation();
                                downloadMedia(
                                  media.file,
                                  `video-${media.title || media.id}.mp4`
                                );
                              }}
                            >
                              <i className="fas fa-download" /> Download
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>

          {saved.length !== 0 && (
            <a href="#top" className="btn my-5 animated-button">
              Back To Top
            </a>
          )}

          {selectedMedia && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              media={selectedMedia}
              saved={saved}
              setSaved={setSaved}
              isSavedPage={true}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Saved;
