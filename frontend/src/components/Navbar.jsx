import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg"; // Search icon path
import logo from "../assets/logo1.png"; // Logo path
import micImage from "../assets/mic2.gif"; // Path to your mic image

const Navbar = ({ setSearch, setContentType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [inputValue, setInputValue] = useState(""); // State for input field value
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = "en-US";

      recognitionInstance.onstart = () => {
        console.log("Speech recognition started");
        setShowModal(true); // Show modal when speech recognition starts
      };

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Recognized text:", transcript);
        setInputValue(transcript); // Update input value with recognized text
        setSearch(transcript); // Trigger search after recognition if needed
        navigate("/"); // Redirect to home after recognition
      };

      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event);
        if (event.error === "no-speech") {
          console.log("No speech was detected. Please try again.");
        } else if (event.error === "not-allowed") {
          console.log("Microphone access was denied.");
        }
      };

      recognitionInstance.onend = () => {
        console.log("Speech recognition ended");
        setIsListening(false);
        setShowModal(false); // Hide modal when speech recognition ends
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn("Speech recognition not supported in this browser.");
    }
  }, [setSearch, navigate]);

  const handleMicClick = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
        console.log("Stopped listening");
      } else {
        recognition.start();
        console.log("Started listening");
        setIsListening(true);
      }
    }
  };

  const handleContentTypeChange = (type) => {
    setContentType(type);
    navigate("/"); // Redirect to home when content type is changed
  };

  const onClose = () => {
    // Stop the recognition and close the modal
    if (recognition && isListening) {
      recognition.stop();
    }
    setShowModal(false);
  };

  const handleClearInput = () => {
    setInputValue(""); // Clear the input field
    setSearch(""); // Clear the search results
  };

  return (
    <>
      <div className="container my-4">
        <div className="logoTitle">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="navbar-title">Pix Hub</h1>
        </div>

        {location.pathname === "/" && (
          <div className="search-container" style={{ position: "relative" }}>
            <img
              src={searchIcon}
              alt="Search"
              style={{
                position: "absolute",
                left: "10px", // Position the icon to the left
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              value={inputValue} // Bind the input to the state
              className="form-control bg-dark text-light pl-5 input-white-placeholder"
              placeholder="Search..."
              onChange={(e) => {
                setInputValue(e.target.value); // Update state when typing
                setSearch(e.target.value); // Call setSearch to update search term
              }}
              aria-label="Search"
              style={{
                paddingLeft: "45px", // Add padding on the left to avoid overlapping with the icon
                paddingRight: inputValue ? "90px" : "60px", // Adjust padding when close icon is visible
              }}
            />
            {inputValue && (
              <i
                className="fas fa-times" // Using Font Awesome "close" icon
                onClick={handleClearInput}
                style={{
                  position: "absolute",
                  right: "55px", // Position the clear icon inside the input
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "24px", // Adjust the size of the icon
                  color: "#fff", // White color to match the input styling
                }}
              ></i>
            )}
            <i
              className={`bi bi-mic-fill ${isListening ? "text-danger" : "text-primary"}`}
              onClick={handleMicClick}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "24px",
              }}
            ></i>
          </div>
        )}

        <div className="button btn btn-outline-info" onClick={() => handleContentTypeChange("images")}>
          Images
        </div>
        <div className="button btn btn-outline-light" onClick={() => handleContentTypeChange("videos")}>
          Videos
        </div>
        <div id="UploadBtn" className="button btn btn-success" onClick={() => navigate("/upload")}>
          Upload
        </div>
        {location.pathname !== "/saved" ? (
          <div  className="button Collections" onClick={() => navigate("/saved")}>
            Collections
          </div>
        ) : (
          <div className="Collections" onClick={() => navigate("/")}>
            Home
          </div>
        )}
      </div>

      <div className="nav mt-3 overflow-auto">
        <div className="d-flex">
          <div className="button btn btn-outline-success mx-2" onClick={() => { setSearch("nature"); navigate("/"); }}>
            Nature
          </div>
          <div className="button btn btn-outline-danger mx-2" onClick={() => { setSearch("travel"); navigate("/"); }}>
            Travel
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("city"); navigate("/"); }}>
            City
          </div>
          <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("car"); navigate('/'); }}>
            Car
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("fashion"); navigate('/'); }}>
            Fashion
          </div>
        
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("india"); navigate('/'); }}>
            India
          </div>
          <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("technology"); navigate('/'); }}>
            Technology
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("finance"); navigate('/'); }}>
            Business & Finance
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("sports"); navigate('/'); }}>
            Sports
          </div>
          <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("entertainment"); navigate('/'); }}>
            Entertainment
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("dubai"); navigate('/'); }}>
            Dubai
          </div>
          <div className="button btn btn-outline-danger mx-2" onClick={() => { setSearch("love"); navigate('/'); }}>
            Love
          </div>
          <div className="button btn btn-outline-success mx-2" onClick={() => { setSearch("animals"); navigate('/'); }}>
            Animals
          </div>
        </div>
      </div>

      {/* Modal for Speech Recognition */}
      {showModal && (
        <div
          className="modal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999, // Ensures it's above everything else
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              padding: "40px", // Increased padding for larger modal
              borderRadius: "20px", // Adjusted border radius for better appearance
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column", // Centers the content vertically
              maxWidth: "500px", // Set max-width for responsiveness
              width: "80%", // Use 80% width of the screen for smaller screens
              height: "300px", // Set a fixed height for the modal
              marginTop: "-150px", // Move the modal up to center it better vertically
              textAlign: "center", // Center the text within the modal 
              position: "relative", // To position the close button
            }}
          >
            <button className="back-button" onClick={onClose} style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}>
              <i className="fas fa-times"></i>
            </button>

            <img
              src={micImage} // Use your microphone image here
              alt="Mic"
              style={{
                width: "100px", // Adjust width for better display
                height: "100px", // Adjust height for better display
                marginBottom: "20px", // Added margin to create space between the image and text  
              }}
            />

            <h4 style={{ color: "black", marginLeft: "20px" }}>Listening...</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
