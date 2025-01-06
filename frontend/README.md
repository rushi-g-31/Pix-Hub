# React + Vite
 const API_KEY = "QPFtb40u2RfGH0Pj24wT2ibsdG6qegNIQxiUQ7uXJvtTj5FJU0SjPtyq";
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 

 Note : 
 1) npm install axios :- install and used for fetching the data here photos or images.
2)npm i react-toastify :- install then import :- 
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; into the Home and then add the 
  
      <ToastContainer /> into the Home(into the gragment)
      then goto the github documentation and select the option create the style of tostify and
      copy the emmiter code and paste into the Home (saveImage function)
      i)     toast.info("Image already saved", {
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
          ii) toast.success("Image Saved", {
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

      #### For Download :-
      
  //download image
  
  const downloadImage = (url,filename) =>{
    //fetching file and returning response as blob
 fetch(url).then(res => res.blob()).then(file => {
     
     //URL.createObjectURL creates a url of passed object
     let tempUrl = URL.createObjectURL(file);
     let aTag = document.createElement("a");
     aTag.href = tempUrl;    //passing tempURL as href value of <a> tag
     aTag.download = filename; //passing file last name & extenstion  as download value of <a> tag 
     document.body.appendChild(aTag); //adding <a> tag inside body
     aTag.click();   //clicking <a> tag so the file download
     aTag.remove();  //clicking <a> tag once file downloaded
     URL.revokeObjectURL(tempUrl);//remove tempURL from the document after downloaded
     downloadBtn.innerHTML = "Download File";
 }).catch(()=>{
     // catch method will call if any errors occurs during downloading
     downloadBtn.innerHTML = "Download File";
     alert("Failed to downloading file!");
 });
 
 
     }
     query ->
 onDoubleClick={() => downloadImage(image.src.medium,`image-${image.alt}-${image.id}.jpg`)}
                
                <a
                    href={image.src.original} // Direct link to original image
                    download
                    className="download-button"
                  >
                    Download
                  </a>





                  
/* Modal.css */
/*
.modal-overlay {
  position: fixed; /* Overlay covers the entire screen */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  display: flex;
  justify-content: center; /* Center the modal */
  align-items: center; /* Center the modal vertically */
  z-index: 1000; /* Ensure the modal is on top */
}

.modal-content {
  position: relative; /* Allow positioning of buttons */
  background: white; /* Modal background color */
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Padding inside the modal */
  max-width: 600px; /* Max width for the modal */
  width: 90%; /* Responsive width */
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.button-container-modal {
  position: absolute;
  top: 10px;
  right: 10px; /* Align buttons to the right */
  display: flex;
  gap: 10px; /* Space between buttons */
}

.download-button-modal {
  background-color: #007bff; /* Change to your desired color */
  color: white; /* Text color */
  border: none;
  border-radius: 5px; /* Rounded corners */
  padding: 5px 10px; /* Padding around the button */
  cursor: pointer;
  font-size: 1.2rem; /* Adjust size as needed */
  transition: background-color 0.3s;
}

.download-button-modal:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.modal-image {
  max-width: 100%; /* Responsive image */
  height: auto; /* Maintain aspect ratio */
  margin-top: 50px; /* Space below buttons */
}

.modal-video {
  max-width: 100%; /* Responsive video */
  height: auto; /* Maintain aspect ratio */
  margin-top: 50px; /* Space below buttons */
}

.close-button {
  margin-top: 20px; /* Space below the video/image */
  background: transparent;
  border: none;
  cursor: pointer;
}

/*2nd style for Modal.jsx*/
                 
/* Modal.css */

.modal-overlay {
  position: fixed; /* Overlay covers the entire screen */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  display: flex;
  justify-content: center; /* Center the modal */
  align-items: center; /* Center the modal vertically */
  z-index: 1000; /* Ensure the modal is on top */
}
.modal-content {
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  height: 80vh; /* Fixed height for the modal */
  overflow: hidden; /* Hide overflow */
  display: flex; /* Use flexbox */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
}

.modal-image {
  max-width: 100%; /* Ensure image width is responsive */
  max-height: 100%; /* Ensure image fits within modal height */
  object-fit: contain; /* Maintain aspect ratio */
}

.modal-video {
  max-width: 100%; /* Ensure video fits the modal width */
  height: auto; /* Maintain aspect ratio */
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.button-container-modal {
  position: absolute;
  top: 10px;
  right: 10px; /* Align buttons to the right */
  display: flex;
  gap: 10px; /* Space between buttons */
}

.download-button-modal {
  background-color: #007bff; /* Change to your desired color */
  color: white; /* Text color */
  border: none;
  border-radius: 5px; /* Rounded corners */
  padding: 5px 10px; /* Padding around the button */
  cursor: pointer;
  font-size: 1.2rem; /* Adjust size as needed */
  transition: background-color 0.3s;
}

.download-button-modal:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.close-button {
  margin-top: 20px; /* Space below the video/image */
  background: transparent;
  border: none;
  cursor: pointer;
}


/*Style for Navbar copy here */

/* Navigation bar */

.nav{
  display: flex;
  justify-content: center;
align-items: center;
padding: 10px ;
position:relative ;
top: -12px;
}
 /* Navigation bar set a button repsoveness and resizeable according to devices size  */
@media (min-width:30px)  {
  .btn {
    margin-top: 15px;
   }

/* Search Bar Placeholder font color set white */
.input-white-placeholder::placeholder {
  color: white;
  opacity: 1;
}
/* Search Icon image hover effect*/
.search-box img:hover{
  cursor: pointer;
}



/*Navbar.jsx structure of navbar*/

<div className="container my-4" >
        {location.pathname === "/" && (
          <div className="row">
             <div className="logoTitle">
        <img src={logo} alt="logo" className="logo" />
          <h1 className="navbar-title">Pix Hub</h1>
        </div>

        <div className=" mx-auto">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control bg-dark text-light pl-5 input-white-placeholder"
                  placeholder="Search images..."
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search"
                />
                <img
                  src={searchIcon}
                  alt="Search"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
            </div>
          
     
     
        <div className="button btn btn-outline-primary mx-3" onClick={() => handleContentTypeChange('images')}>
          Images
        </div>
        <div className="button btn btn-outline-secondary mx-3" onClick={() => handleContentTypeChange('videos')}>
          Videos
        </div>
            {location.pathname == "/saved" ? (
          <div
            className="button btn btnMar btn-warning mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btnMar btn-warning mx-3"
            onClick={() => navigate("/saved")}
          >
            Collections
          </div>
        )}

</div>
        )}
      </div>


/*navbar.jsx*/

    {/*Options for search */}
{/*      <div className="nav mt-3">
        
        <div
          className="button btn btn-outline-warning mx-3 "
          onClick={() =>{
            setSearch("nature")
            navigate('/')
          } }
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {setSearch("travel")
            navigate('/')
          }}
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {setSearch("city")
            navigate('/')
          }}
        >
          City
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {setSearch("car")
            navigate('/')
          }}
        >
          Car
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {setSearch("fashion")
            navigate('/')
          }}
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {setSearch("animals")
            navigate('/')
          }}
        >
          Animals
        </div>
        <div
          className="button btn btnMar btn-outline-dark text-light mx-3"
          onClick={() => {setSearch("technology")
            navigate('/')
          }}
        >
          Technology{" "}
        </div>
        <div
          className="button btn btnMar btn-outline-warning mx-3"
          onClick={() => {setSearch("finance")
            navigate('/')
          }}
        >
          Business & Finance{" "}
        </div>
        <div
          className="button btn btnMar btn-outline-primary mx-3"
          onClick={() => {setSearch("sports")
            navigate('/')
          }}
        >
          Sports
        </div>
        <div
          className="button btn btnMar btn-outline-info mx-3"
          onClick={() => {setSearch("entertainment")
            navigate('/')
          }}
        >
          Entertainment
        </div>

        
      </div>*/}

      {/*   <div className="container my-4" style={{ width: "780px" }}>

        {location.pathname === "/" && ( 
       <div className="position-relative search-box">
        <input
          type="text"
          className="form-control bg-dark text-light pl-5 input-white-placeholder"
          placeholder="Search images..."
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
        <img
          src={searchIcon}
          alt="Search"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            }}
        />
      </div>
      
      
      )}     
      </div>
*/ }   




/*Updated Navbar.jsx*/
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import logo from "../assets/logo1.png";
const Navbar = ({ setSearch, setContentType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  /*Handle Content*/
  const handleContentTypeChange = (type) => {
    setContentType(type);
    navigate('/');
  };
  return (
    <>
 <div className="container my-4">
      <div className="logoTitle">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="navbar-title">Pix Hub</h1>
      </div>
      
      
      {location.pathname === "/" && (
        <div className="search-container">
          <input
            type="text"
            className="form-control bg-dark text-light pl-5 input-white-placeholder"
            placeholder="Search images..."
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
          />
          <img
            src={searchIcon}
            alt="Search"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>

      )}


      <div className="button btn btn-outline-primary" onClick={() => handleContentTypeChange('images')}>
        Images
      </div>
      <div className="button btn btn-outline-secondary" onClick={() => handleContentTypeChange('videos')}>
        Videos
      </div>
      {location.pathname !== "/saved" ? (
        <div className="button btn btn-warning" onClick={() => navigate("/saved")}>
          Collections
        </div>
      ) : (
        <div className="button btn btn-warning" onClick={() => navigate("/")}>
          Home
        </div>
      )}
    </div>

    {/*Options for search  for testing */}
    <div className="nav mt-3 overflow-auto">
  <div className="d-flex">
    <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("nature"); navigate('/'); }}>
      Nature
    </div>
    <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("travel"); navigate('/'); }}>
      Travel
    </div>
    <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("city"); navigate('/'); }}>
      City
    </div>
    <div className="button btn btn-outline-secondary mx-2" onClick={() => { setSearch("car"); navigate('/'); }}>
      Car
    </div>
    <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("fashion"); navigate('/'); }}>
      Fashion
    </div>
    <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("animals"); navigate('/'); }}>
      Animals
    </div>
    <div className="button btn btn-outline-dark mx-2" onClick={() => { setSearch("technology"); navigate('/'); }}>
      Technology
    </div>
    <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("finance"); navigate('/'); }}>
      Business & Finance
    </div>
    <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("sports"); navigate('/'); }}>
      Sports
    </div>
    <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("entertainment"); navigate('/'); }}>
      Entertainment
    </div>
    
    <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("dubai"); navigate('/'); }}>
      Dubai
    </div>
    
    <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("love"); navigate('/'); }}>
      Love
    </div>
  </div>
</div>


    </>
  );
};

export default Navbar;


/*Updated version of Navbar.jsx with mic */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import logo from "../assets/logo1.png";

const Navbar = ({ setSearch, setContentType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isListening, setIsListening] = useState(false); // State for mic toggle

  // Speech recognition handling (if you want to use it)
  const handleMicClick = () => {
    setIsListening(!isListening); // Toggle mic state
    // Add speech recognition functionality if needed
  };

  /*Handle Content*/
  const handleContentTypeChange = (type) => {
    setContentType(type);
    navigate('/');
  };

  return (
    <>
      <div className="container my-4">
        <div className="logoTitle">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="navbar-title">Pix Hub</h1>
        </div>

        {location.pathname === "/" && (
          <div className="search-container" style={{ position: 'relative' }}>
            <input
              type="text"
              className="form-control bg-dark text-light pl-5 input-white-placeholder"
              placeholder="Search images..."
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search"
              style={{ paddingRight: '60px' }} // Padding to fit both search icon and mic icon
            />
            <img
              src={searchIcon}
              alt="Search"
              style={{
                position: 'absolute',
                right: '50px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <i
              className={`bi bi-mic-fill ${isListening ? 'text-danger' : 'text-primary'}`} // Dynamically change color based on state
              onClick={handleMicClick} // Mic click handler
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '24px'
              }}
            ></i>
          </div>
        )}

        <div className="button btn btn-outline-primary" onClick={() => handleContentTypeChange('images')}>
          Images
        </div>
        <div className="button btn btn-outline-secondary" onClick={() => handleContentTypeChange('videos')}>
          Videos
        </div>
        {location.pathname !== "/saved" ? (
          <div className="button btn btn-warning" onClick={() => navigate("/saved")}>
            Collections
          </div>
        ) : (
          <div className="button btn btn-warning" onClick={() => navigate("/")}>
            Home
          </div>
        )}
      </div>

      {/*Options for search  for testing */}
      <div className="nav mt-3 overflow-auto">
        <div className="d-flex">
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("nature"); navigate('/'); }}>
            Nature
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("travel"); navigate('/'); }}>
            Travel
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("city"); navigate('/'); }}>
            City
          </div>
          <div className="button btn btn-outline-secondary mx-2" onClick={() => { setSearch("car"); navigate('/'); }}>
            Car
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("fashion"); navigate('/'); }}>
            Fashion
          </div>
          <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("animals"); navigate('/'); }}>
            Animals
          </div>
          <div className="button btn btn-outline-dark mx-2" onClick={() => { setSearch("technology"); navigate('/'); }}>
            Technology
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("finance"); navigate('/'); }}>
            Business & Finance
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("sports"); navigate('/'); }}>
            Sports
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("entertainment"); navigate('/'); }}>
            Entertainment
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("dubai"); navigate('/'); }}>
            Dubai
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("love"); navigate('/'); }}>
            Love
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;



/*Updated version of Navbar.jsx with working mic */



import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import logo from "../assets/logo1.png";

const Navbar = ({ setSearch, setContentType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [inputValue, setInputValue] = useState(""); // State for input field value

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        console.log("Speech recognition started");
      };

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Recognized text:", transcript);
        setInputValue(transcript); // Update input value with recognized text
        setSearch(transcript); // You can trigger search after recognition if needed
        navigate('/');
      };

      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event);
        if (event.error === 'no-speech') {
          console.log("No speech was detected. Please try again.");
        } else if (event.error === 'not-allowed') {
          console.log("Microphone access was denied.");
        }
      };

      recognitionInstance.onend = () => {
        console.log("Speech recognition ended");
        setIsListening(false);
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
    navigate('/');
  };

  return (
    <>
      <div className="container my-4">
        <div className="logoTitle">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="navbar-title">Pix Hub</h1>
        </div>

        {location.pathname === "/" && (
          <div className="search-container" style={{ position: 'relative' }}>
            <input
              type="text"
              value={inputValue} // Bind the input to the state
              className="form-control bg-dark text-light pl-5 input-white-placeholder"
              placeholder="Search images..."
              onChange={(e) => {
                setInputValue(e.target.value); // Update state when typing
                setSearch(e.target.value); // Call setSearch to update search term
              }}
              aria-label="Search"
              style={{ paddingRight: '60px' }}
            />
            <img
              src={searchIcon}
              alt="Search"
              style={{
                position: 'absolute',
                right: '50px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <i
              className={`bi bi-mic-fill ${isListening ? 'text-danger' : 'text-primary'}`}
              onClick={handleMicClick}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '24px'
              }}
            ></i>
          </div>
        )}

        <div className="button btn btn-outline-primary" onClick={() => handleContentTypeChange('images')}>
          Images
        </div>
        <div className="button btn btn-outline-secondary" onClick={() => handleContentTypeChange('videos')}>
          Videos
        </div>
        {location.pathname !== "/saved" ? (
          <div className="button btn btn-warning" onClick={() => navigate("/saved")}>
            Collections
          </div>
        ) : (
          <div className="button btn btn-warning" onClick={() => navigate("/")}>
            Home
          </div>
        )}
      </div>

      <div className="nav mt-3 overflow-auto">
        <div className="d-flex">
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("nature"); navigate('/'); }}>
            Nature
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("travel"); navigate('/'); }}>
            Travel
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("city"); navigate('/'); }}>
            City
          </div>
          <div className="button btn btn-outline-secondary mx-2" onClick={() => { setSearch("car"); navigate('/'); }}>
            Car
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("fashion"); navigate('/'); }}>
            Fashion
          </div>
          <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("animals"); navigate('/'); }}>
            Animals
          </div>
          <div className="button btn btn-outline-dark mx-2" onClick={() => { setSearch("technology"); navigate('/'); }}>
            Technology
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("finance"); navigate('/'); }}>
            Business & Finance
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("sports"); navigate('/'); }}>
            Sports
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("entertainment"); navigate('/'); }}>
            Entertainment
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("dubai"); navigate('/'); }}>
            Dubai
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("love"); navigate('/'); }}>
            Love
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("india"); navigate('/'); }}>
            India
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


/*Update version of Navbar.jsx with working mic and Modal */


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
        navigate("/");
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
    navigate("/");
  };

  const onClose = () => {
    // Stop the recognition and close the modal
    if (recognition && isListening) {
      recognition.stop();
    }
    setShowModal(false);
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
            <input
              type="text"
              value={inputValue} // Bind the input to the state
              className="form-control bg-dark text-light pl-5 input-white-placeholder"
              placeholder="Search images..."
              onChange={(e) => {
                setInputValue(e.target.value); // Update state when typing
                setSearch(e.target.value); // Call setSearch to update search term
              }}
              aria-label="Search"
              style={{ paddingRight: "60px" }}
            />
            <img
              src={searchIcon}
              alt="Search"
              style={{
                position: "absolute",
                right: "50px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
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

        <div className="button btn btn-outline-primary" onClick={() => handleContentTypeChange("images")}>
          Images
        </div>
        <div className="button btn btn-outline-secondary" onClick={() => handleContentTypeChange("videos")}>
          Videos
        </div>
        {location.pathname !== "/saved" ? (
          <div className="button btn btn-warning" onClick={() => navigate("/saved")}>
            Collections
          </div>
        ) : (
          <div className="button btn btn-warning" onClick={() => navigate("/")}>
            Home
          </div>
        )}
      </div>

      <div className="nav mt-3 overflow-auto">
        <div className="d-flex">
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("nature"); navigate("/"); }}>
            Nature
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("travel"); navigate("/"); }}>
            Travel
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("city"); navigate("/"); }}>
            City
          </div>
          <div className="button btn btn-outline-secondary mx-2" onClick={() => { setSearch("car"); navigate('/'); }}>
            Car
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("fashion"); navigate('/'); }}>
            Fashion
          </div>
          <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("animals"); navigate('/'); }}>
            Animals
          </div>
          <div className="button btn btn-outline-dark mx-2" onClick={() => { setSearch("technology"); navigate('/'); }}>
            Technology
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("finance"); navigate('/'); }}>
            Business & Finance
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("sports"); navigate('/'); }}>
            Sports
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("entertainment"); navigate('/'); }}>
            Entertainment
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("dubai"); navigate('/'); }}>
            Dubai
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("love"); navigate('/'); }}>
            Love
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("india"); navigate('/'); }}>
            India
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
              position: "relative" // To position the close button
            }}
          >
            {/* Close button at top right */}
            <button className="back-button" onClick={onClose} style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer"
            }}>
              <i className="fas fa-times"></i>
            </button>
            

            
            {/* Replace mic icon with an image */}
            <img
              src={micImage} // Use your microphone image here
              alt="Mic"
              style={{
                width: "100px", // Adjust width for better display
                height: "100px", // Adjust height for better display
                marginBottom: "20px", // Added margin to create space between the image and text  
              }}
            />
            
            <h4 style={{color:"black",marginLeft:"20px"}}>Listening...</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


/*Updated version of Navbar.jsx with functional mic and good style and searchIcon icon on left side */


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
        navigate("/");
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
    navigate("/");
  };

  const onClose = () => {
    // Stop the recognition and close the modal
    if (recognition && isListening) {
      recognition.stop();
    }
    setShowModal(false);
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
              placeholder="Search images..."
              onChange={(e) => {
                setInputValue(e.target.value); // Update state when typing
                setSearch(e.target.value); // Call setSearch to update search term
              }}
              aria-label="Search"
              style={{  paddingLeft: "45px", // Add padding on the left to avoid overlapping with the icon,
                  paddingRight:"60px"}}
            />
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

        <div className="button btn btn-outline-primary" onClick={() => handleContentTypeChange("images")}>
          Images
        </div>
        <div className="button btn btn-outline-secondary" onClick={() => handleContentTypeChange("videos")}>
          Videos
        </div>
        {location.pathname !== "/saved" ? (
          <div className="button btn btn-warning" onClick={() => navigate("/saved")}>
            Collections
          </div>
        ) : (
          <div className="button btn btn-warning" onClick={() => navigate("/")}>
            Home
          </div>
        )}
      </div>

      <div className="nav mt-3 overflow-auto">
        <div className="d-flex">
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("nature"); navigate("/"); }}>
            Nature
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("travel"); navigate("/"); }}>
            Travel
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("city"); navigate("/"); }}>
            City
          </div>
          <div className="button btn btn-outline-secondary mx-2" onClick={() => { setSearch("car"); navigate('/'); }}>
            Car
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("fashion"); navigate('/'); }}>
            Fashion
          </div>
          <div className="button btn btn-outline-light mx-2" onClick={() => { setSearch("animals"); navigate('/'); }}>
            Animals
          </div>
          <div className="button btn btn-outline-dark mx-2" onClick={() => { setSearch("technology"); navigate('/'); }}>
            Technology
          </div>
          <div className="button btn btn-outline-warning mx-2" onClick={() => { setSearch("finance"); navigate('/'); }}>
            Business & Finance
          </div>
          <div className="button btn btn-outline-primary mx-2" onClick={() => { setSearch("sports"); navigate('/'); }}>
            Sports
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("entertainment"); navigate('/'); }}>
            Entertainment
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("dubai"); navigate('/'); }}>
            Dubai
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("love"); navigate('/'); }}>
            Love
          </div>
          <div className="button btn btn-outline-info mx-2" onClick={() => { setSearch("india"); navigate('/'); }}>
            India
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
              position: "relative" // To position the close button
            }}
          >
            {/* Close button at top right */}
            <button className="back-button" onClick={onClose} style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer"
            }}>
              <i className="fas fa-times"></i>
            </button>

            {/* Replace mic icon with an image */}
            <img
              src={micImage} // Use your microphone image here
              alt="Mic"
              style={{
                width: "100px", // Adjust width for better display
                height: "100px", // Adjust height for better display
                marginBottom: "20px", // Added margin to create space between the image and text  
              }}
            />
            
            <h4 style={{color:"black",marginLeft:"20px"}}>Listening...</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


/*style for Navbar.jsx*/
/*Navbar.jsx style */

/* Navbar styles */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between items */
  background-color: #1e1e2f; /* Background color */
}

.logoTitle {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px; /* Adjust size as needed */
  margin-right: 10px;
}

.navbar-title {
  font-size: 1.8rem;
  color: #fff; /* Title color */
}

.search-container {
  flex: 1; /* Allow input to take available space */
  position: relative;
  margin: 0 20px; /* Add space around the input */
}

.input-white-placeholder::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-control {
  background-color: #2c2c3e; /* Dark background */
  color: #fff; /* Text color */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

.form-control:focus {
  border-color: #007bff; /* Focus border color */
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.button {
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 10px; /* Space between buttons */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Button color styles */
.btn-outline-primary {
  color: #007bff;
  border: 1px solid #007bff;
}

.btn-outline-secondary {
  color: #6c757d;
  border: 1px solid #6c757d;
}

.btn-outline-warning {
  color: #ffc107;
  border: 1px solid #ffc107;
}

.btn-outline-info {
  color: #17a2b8;
  border: 1px solid #17a2b8;
}

.btn-outline-light {
  color: #f8f9fa;
  border: 1px solid #f8f9fa;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack items on small screens */
    align-items: flex-start;
  }

  .search-container {
    margin: 10px 0; /* Margin adjustment for smaller screens */
    width: 100%; /* Full width */
  }

  .navbar-title {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }
}

/*style for buttons and .nav for scrolling style*/
.nav {
  white-space: nowrap; /* Prevent line breaks */
  
  }

.overflow-auto {
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 10px 5px; /* Optional: add some padding */
  scrollbar-width: none; /*hide scrollbar For Firefox */
}

.overflow-auto::-webkit-scrollbar {
  display: none; /*hide scrollbar For Chrome, Safari, and Edge */
}

.button {
  display: inline-block; /* Ensure buttons are inline */
}

/*Previous Task*/
Navbar structure done with responsive 
next task is Home.jsx about images and videos structure and Modal structure


/*Compare*/

      <div className="image-gallery">+
        <ul className="images">+
          {(contentType === "images" ? images : videos).map((item) => (
            <li key={item.id} className="image">+
              {contentType === "images" ? (
                <>
                  <img
                    src={item.src.medium}
                    className="photo"+
                    alt={item.photographer}
                    onClick={() => openModal(item)}
                  />
                  <div className="button-container">
                    <button
                      className="download-button"
                      onClick={() => saveImage(item)}
                    >
                      <i className="fas fa-star" />
                    </button>
                    <button
                      className="download-button"
                      onClick={() =>
                        downloadImgVideo(
                          item.src.medium,
                          `image-${item.alt}-${item.id}.jpg`
                        )
                      }
                    >
                      <i className="fas fa-download"></i> Download
                    </button>
                  </div>
                </>
              ) : (
                <>
               +   <video className="photo" onClick={() => openModal(item)}>
                    <source
                      src={item.video_files[0].link}
                      type={item.video_files[0].file_type}
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="button-container">
                    <button
                      className="download-button"
                      onClick={() => saveImage(item)}
                    >
                      <i className="fas fa-star" />
                    </button>
                    <button
                      className="download-button"
                      onClick={() =>
                        downloadImgVideo(
                          item.video_files[0].link,
                          `video-${item.id}.mp4`
                        )
                      }
                    >


/*Updated version of style.css for Home.jsx*/

/*Image and video structure style*/
.homeDiv {
  padding-left: auto;
  padding-right: auto;
}

@media screen and (max-width: 900px) {
  .homeDiv {
    padding-left: 5px;
    padding-right: 5px;
  }
}

@media screen and (max-width: 500px) {
  .homeDiv {
    padding-left: 2px;
    padding-right: 2px;
  }
}

.image-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 40px;
  transform: translateX(-15px);
}

.image-gallery .images {
  columns: 5 340px;
  max-width: 95%;
  margin-top: 20px;
}

@media (min-width: 1064px) and (max-width: 1165px) {
  .image-gallery .images {
    columns: 5 300px;
    max-width: 100%;
  }
}

@media (min-width: 800px) and (max-width: 1063px) {

  .image-gallery .images {
    columns: 5 240px;
    max-width: 100%;
  }
}


@media (min-width: 580px) and (max-width: 799px) {

  .image-gallery .images {
    columns: 5 200px;
    max-width: 100%;
  }
}
@media screen and (max-width: 576px) {
  .image-gallery .images {
    columns: 5 200px;
    max-width: 100%;
  }
}

@media screen and (max-width: 476px) {
  .image-gallery .images {
    columns: 5 150px;
    max-width: 100%;
  }
}

@media screen and (max-width: 376px) {
  .image-gallery .images {
    columns: 5 130px;
    max-width: 100%;
  }
}

/* Image container and hover effect */
.image {
  overflow: hidden;
  margin-bottom: 15px;
  list-style: none;
  position: relative;
  cursor: pointer;
  border: 2px solid white;
}

.photoVideo {
  width: 100%;
  transition: all 0.5s;
}

.photoVideo:hover {
  scale: 110%;
}

/* Download and collect button container */
.items {
  position: relative;
  display: inline-block;
}

.button-container {
  position: absolute;
  bottom: 8px;
  right: 10px;
  display: none; /* Hidden by default */
}

.download-collect {
  background-color: #FFC300;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  margin-right: 15px;
  margin-bottom: 5px;
  align-items: center;
}

.download-button {
  background-color: #FFC300;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 5px;
  align-items: center;
}

.image:hover .button-container {
  display: block; /* Show the button on hover */
}

/* Adjust button styles and icon sizes based on screen size */
@media screen and (max-width: 1030px) {
  .button-container {
    display: block; /* Show the buttons regardless of hover on smaller screens */
  }
}
@media screen and (min-width:841px) and (max-width:1030px){
  .download-collect,
  .download-button {
    font-size: 16px; /* Hide text by reducing font size */
    padding: 5px; /* Adjust padding for smaller buttons */
  }

}

@media screen and (max-width: 840px) {
  /* Remove the text from the buttons, keep the icons */
  .download-collect,
  .download-button {
    font-size: 0; /* Hide text by reducing font size */
    padding: 5px; /* Adjust padding for smaller buttons */
  }

  .download-collect i,
  .download-button i {
    font-size: 18px; /* Icon size for screens under 810px */
    margin-right: 0;
  }
}

@media screen and (max-width: 600px) {
  .button-container {
    position: absolute;
    bottom: 6px;
    right: 8px;
  }

  .download-collect i,
  .download-button i {
    font-size: 16px; /* Icon size for screens under 600px */
    
  }
 
}

@media screen and (max-width: 480px) {
  .download-collect i,
  .download-button i {
    font-size: 14px; /* Icon size for screens under 480px */
  }
}

@media screen and (max-width: 360px) {
  .download-collect i,
  .download-button i {
    font-size: 12px; /* Icon size for screens under 360px */
  }
}




/*back  to top button bottom button */
.animated-button {
  background-color: #FFD700; /* Bright yellow */
  color: black; /* Text color */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  position: relative; /* Positioning for pseudo-elements */
  overflow: hidden; /* Hide overflow */
  transition: transform 0.3s, box-shadow 0.3s; /* Animation effects */
}

.animated-button:hover {
  background-color: #FFC300; /* Darker shade of yellow */
  transform: translateY(-3px); /* Slightly lift on hover */
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); /* Glow effect */
}

/* Pulsating effect */
.animated-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(255, 215, 0, 0.3); /* Semi-transparent yellow */
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: pulsate 1.5s infinite; /* Pulsating effect */
  z-index: 0; /* Behind the button */
}

@keyframes pulsate {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
}


/*updated version of style.css of Modal.jsx*/
12/10/2024 time 5:00pm
/*Modal.jsx style Css*/
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Use column layout for stacking */
  justify-content: center;
  align-items: center;
}

.modal-image,
.modal-video {
  max-width: 100%; /* Ensure image/video width is responsive */
  max-height: calc(100% - 40px); /* Adjust height to account for margins */
  object-fit: contain; /* Maintain aspect ratio for images */
  margin: 25px 0px 0px 0px; /* Add margin from the top and bottom */
}

.back-button {
  position: absolute;
  top: 5px;
  left: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  transition: transform 0.2s;
}

.back-button:hover {
  transform: scale(1.1);
}

.button-container-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.download-button-modal {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.2s;
}

.download-button-modal:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.download-button-modal:focus {
  outline: 2px solid #0056b3;
}



@media (max-width: 480px) {
  .modal-content {
    height: auto;
  }
}


/*Updated version of Navbar.jsx style.css*/
/*13 oct 2024 8:38px*/

/* Navbar styles */
.container {
  max-width: 1200px; /* Max width for the navbar */
  margin: auto; /* Center align */
  padding: 10px 20px; /* Padding for spacing */
  display: flex; /* Flexbox for alignment */
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Space between items */
  /*background-color: #1e1e2f; /* Background color */
}

/* Logo and title container */
.logoTitle {
  display: flex; /* Flex for alignment */
  align-items: center; /* Center logo and title vertically */
}

.logo {
  height: 50px; /* Logo height */
  margin-right: 10px; /* Space between logo and title */
}

.navbar-title {
  font-size: 1.8rem; /* Title font size */
  color: #fff; /* Title color */
}

/* Search container */
.search-container {
  flex: 1; /* Allow input to take available space */
  position: relative; /* For positioning inner elements */
  margin: 0 20px; /* Space around the input */
}

/* Placeholder color */
.input-white-placeholder::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

/* Input field styles */
.form-control {
  background-color: #2c2c3e; /* Dark background */
  color: #fff; /* Text color */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Inner padding for input */
  width: 100%; /* Full width */
}

.form-control:focus {
  border-color: #007bff; /* Focus border color */
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); /* Focus shadow */
}

/* Button styles */
.button {
  cursor: pointer; /* Pointer cursor on hover */
  padding: 10px 15px; /* Button padding */
  border-radius: 5px; /* Rounded corners */
  margin-left: 10px; /* Space between buttons */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
  white-space: nowrap; /* Prevent text wrapping */
}


/* Responsive styles */
@media (max-width: 1200px) {
  .navbar-title {
    font-size: 1.6rem; /* Slightly smaller title on large screens */
  }
}

@media (max-width: 992px) {
  .navbar-title {
    font-size: 1.4rem; /* Smaller title on medium screens */
  }

  .search-container {
    margin: 10px 0; /* Margin for smaller screens */
    width: 100%; /* Full width */
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align items to start */
  }

  .navbar-title {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }

  .button {
    width: 100%; /* Full width for buttons */
    margin: 5px 0; /* Margin between buttons */
  }
}

/* Scrollable nav */
.nav {
  white-space: nowrap; /* Prevent line breaks */
}

.overflow-auto {
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 10px 5px; /* Padding for spacing */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

.overflow-auto::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Edge */
}

.button {
  display: inline-block; /* Ensure buttons are inline */
}

/*Updated version of Modal.jsx*/
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Modal = ({ isOpen, onClose, media, saved, setSaved,isSavedPage  }) => {
  if (!isOpen) return null;

  const saveMedia = (media) => {
    if (saved.some(savedMedia => savedMedia.id === media.id)) {
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
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.blob();
      })
      .then(file => {
        const tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = filename;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
      })
      .catch(err => {
        console.error(err);
        toast.danger("Failed to download file", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });  
      });
  };

  {/*When escape button press then this useEffect workout and the Modal close */}
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
          <button className="download-button-modal" aria-label={`Save ${media.src ? "image" : "video"}`} onClick={() => saveMedia(media)}>
            <i className="fas fa-star" />
          </button>
        )}
          <button
            className="download-button-modal"
            onClick={() => {
              if (media.video_files && media.video_files.length > 0) {
                const videoUrl = media.video_files[0].link;
                const filename = `video-${media.alt || 'default'}-${media.id}.mp4`;
                downloadMedia(videoUrl, filename);
              } else if (media.src.medium) {
                const imageUrl = media.src.medium;
                const filename = `image-${media.alt || 'default'}-${media.id}.jpg`;
                downloadMedia(imageUrl, filename);
              } else {
                toast.danger("Media URL is not available", {
                  position: "top-right",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "dark",
                });
              }
            }}
          >
            <i className="fas fa-download"></i> Download
          </button>
        </div>

        {media.src ? (
          <img src={media.src.large} alt={media.photographer} className="modal-image" />
        ) : media.video_files && media.video_files.length > 0 ? (
          <video controls className="modal-video">
            <source src={media.video_files[0].link} type={media.video_files[0].file_type} />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;

/*Updated version of style.css for Modal.jsx*/


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Use column layout for stacking */
  justify-content: center;
  align-items: center;
}

.modal-image,
.modal-video {
  max-width: 100%; /* Ensure image/video width is responsive */
  max-height: calc(100% - 40px); /* Adjust height to account for margins */
  object-fit: contain; /* Maintain aspect ratio for images */
  margin: 25px 0px 0px 0px; /* Add margin from the top and bottom */
}

.back-button {
  position: absolute;
  top: 10px; /* Slightly adjusted for better visibility */
  left: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  transition: transform 0.2s;
}

.back-button:hover {
  transform: scale(1.1);
}

.button-container-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.download-button-modal {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.2s;
}

.download-button-modal:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.download-button-modal:focus {
  outline: 2px solid #0056b3;
}

@media (max-width: 840px) {
  .modal-content {
    position: relative;
    background: white;
    border-radius: 8px;
    padding:10px;
    max-width: 500px;
    width: 90%;
    height: 40vh;
    overflow: hidden;
    display: flex;
    flex-direction: column; /* Use column layout for stacking */
    justify-content: center;
    align-items: center;
  }

  .back-button {
    position: absolute;
    top: 5px; /* Slightly adjusted for better visibility */
    left: 10px;
    font-size: 1.5rem; /* Adjust button size for smaller screens */
  }

  .download-button-modal {
    font-size: 1rem; /* Adjust font size for smaller buttons */
    padding: 3px 8px; /* Adjust padding */
  }
}

@media (max-width: 480px) {
  .modal-content {
    position: relative;
    background: white;
    border-radius: 8px;
    padding:10px;
    max-width: 500px;
    width: 90%;
    height: 40vh;
    overflow: hidden;
    display: flex;
    flex-direction: column; /* Use column layout for stacking */
    justify-content: center;
    align-items: center;
  }
  .back-button {
    font-size: 1.2rem; /* Adjust button size further for small screens */
  }

  .download-button-modal {
    font-size: 0.9rem; /* Smaller font size for buttons */
    padding: 4px 8px; /* Adjust padding for small buttons */
  }
}



/*Saved.jsx 3 janauary*/
import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // Import the Loader component
import Modal from "./Modal"; // Import the Modal component
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Saved = ({ saved, setSaved, loader }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loading, setLoading] = useState(loader); // Local loading state

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
                  <li key={media.id} className="image" onClick={() => openModal(media)}>
                    {media.file ? (
                      <>
                        <img
                          src={media.file}
                          className="photoVideo"
                          alt={media.photographer}
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
                                `image-${media.alt || media.id}.jpg`
                              );
                            }}
                          >
                            <i className="fas fa-download" /> Download
                          </button>
                        </div>
                      </>
                    ) : media.video ? (
                      <>
                        <div className="video-container" onMouseEnter={() => handleMouseEnter(media.id)} onMouseLeave={() => handleMouseLeave(media.id)}>
                          <video
                            id={`video-${media.id}`}
                            className="photoVideo"
                          >
                            <source
                               src={media.file} // Use `file` for video source
                               type="video/mp4" // Assuming all are mp4 format
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
                                  `video-${media.id}.mp4`
                                );
                              }}
                            >
                              <i className="fas fa-download" /> Download
                            </button>
                          </div>
                        </div>
                      </>
                    ) : null}
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








""""
testing purpose only
from django.shortcuts import render
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def upload_media(request):
    if request.method == 'POST':
        media_type = request.data.get('media_type')  # Get media type from the frontend (image or video)
        file = request.FILES.get('file')  # Get file from the form

        if not file:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)
        
        if media_type not in ['image', 'video']:
            return Response({"error": "Invalid media type"}, status=status.HTTP_400_BAD_REQUEST)

        # Define the appropriate folder based on the media type
        if media_type == 'image':
            folder = 'media/media_items/media_items/images/'
        else:
            folder = 'media/media_items/media_items/videos/'

        fs = FileSystemStorage(location=folder)
        filename = fs.save(file.name, file)
        file_url = fs.url(filename)

        return Response({"message": "Upload successful", "file_url": file_url}, status=status.HTTP_201_CREATED)
"""