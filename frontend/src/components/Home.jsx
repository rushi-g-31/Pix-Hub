import React, { useState, useEffect, useRef } from "react"; // Import useRef for video ref
import Loader from "./Loader"; // Import the Loader component
import Modal from "./Modal";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({
  images,
  videos,
  saved,
  setSaved,
  contentType,
  error,
  categories,
  mediaItems,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [backToTopVisible, setBackToTopVisible] = useState(false); // Track visibility of back-to-top button

  // Ref to store video elements
  const videoRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBackToTopVisible(true);
      } else {
        setBackToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (media) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
  };

  const saveImage = (img) => {
    let flag = true;
    if (saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          toast.info("Image already added to collection", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      toast.success("Image added to collection", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const downloadImgVideo = (url, filename) => {
    fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = filename;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
      })
      .catch(() => {
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
      });
  };

  const handleMouseEnter = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
    }
  };

  const handleMouseLeave = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
    }
  };

  return (
    <>
      <ToastContainer />
      {error && <div className="error">{error}</div>}
      {images.length === 0 && videos.length === 0 ? (
        <Loader />
      ) : (
        <div className="container-fluid homeDiv text-center">
          <div className="image-gallery">
            <ul className="images">
              {(contentType === "images" ? images : videos).map((item) => (
                <li key={item.id} className="image">
                  {contentType === "images" ? (
                    <>
                      <img
                        src={item.file} // Use the `file` field from Django for image source
                        className="photoVideo"
                        alt={item.title} // Use `title` for alt text
                        onClick={() => openModal(item)}
                      />
                      <div className="button-container">
                        <button
                          className="download-collect"
                          onClick={() => saveImage(item)}
                        >
                          <i className="fas fa-star" />
                        </button>
                        <button
                          className="download-button"
                          onClick={() =>
                            downloadImgVideo(item.file, `image-${item.id}.jpg`)
                          }
                        >
                          <i className="fas fa-download"></i> Download
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="video-container">
                        <video
                          ref={(el) => (videoRefs.current[item.id] = el)} // Assign video to ref
                          className="photoVideo"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={() => handleMouseLeave(item.id)}
                          onClick={() => openModal(item)}
                        >
                          <source
                            src={item.file} // Use `file` for video source
                            type="video/mp4" // Assuming all are mp4 format
                          />
                          Your browser does not support the video tag.
                        </video>
                        <div className="play-icon">
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                        <div className="button-container">
                          <button
                            className="download-collect"
                            onClick={() => saveImage(item)}
                          >
                            <i className="fas fa-star" />
                          </button>
                          <button
                            className="download-button"
                            onClick={() =>
                              downloadImgVideo(item.file, `video-${item.id}.mp4`)
                            }
                          >
                            <i className="fas fa-download"></i> Download
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {selectedMedia && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              media={selectedMedia}
              saved={saved}
              setSaved={setSaved}
              isSavedPage={false}
            />
          )}
          {backToTopVisible && (
            <a href="#top" className="btn my-5 animated-button">
              Back To Top
            </a>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
