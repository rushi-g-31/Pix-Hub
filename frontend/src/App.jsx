import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Saved from "./components/Saved";
import Upload from "./components/Upload";
import { fetchCategories, fetchMediaItems, handleFileUpload } from './services/api'; // Adjust the path if necessary

function App() {
  const [contentType, setContentType] = useState("images");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("Animals");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // Error handling state for any failed API call

  // Fetch categories from the Django API
  const fetchCategoriesData = async () => {
    try {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("Failed to fetch categories.");
    }
  };

  // Fetch media items from the Django API based on contentType
  const fetchMediaItemsData = async () => {
    try {
      const mediaItemsData = await fetchMediaItems(contentType === "images" ? "image" : "video");
      const filteredItems = mediaItemsData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      
      if (contentType === "images") {
        setImages(filteredItems); // Set filtered images
      } else {
        setVideos(filteredItems); // Set filtered videos
      }
    } catch (error) {
      console.error("Error fetching media items:", error);
      setError("Failed to fetch media items.");
    }
  };

  // Fetch categories and media items on initial load
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        await fetchCategoriesData();
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  // Fetch media based on search term and contentType (images or videos)
  useEffect(() => {
    const fetchMedia = async () => {
      setLoader(true);
      try {
        await fetchMediaItemsData();
      } catch (error) {
        console.error("Error fetching media:", error);
        setError("Failed to fetch media items.");
      } finally {
        setLoader(false);
      }
    };
    fetchMedia();
  }, [search, contentType]); // Rerun when search term or contentType changes

  // Fetch saved items from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Images"));
    if (savedData) setSaved(savedData);
  }, []);

  // Update saved items in local storage
  useEffect(() => {
    if (saved.length > 0) {
      localStorage.setItem("Images", JSON.stringify(saved));
    }
  }, [saved]);

  return (
    <Router>
      <Navbar setSearch={setSearch} setContentType={setContentType} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              images={images}
              videos={videos}
              loader={loader}
              saved={saved}
              setSaved={setSaved}
              contentType={contentType}
              categories={categories}
              error={error} // Pass error state to Home component
            />
          }
        />
        <Route
          path="/upload"
          element={<Upload categories={categories} onUpload={handleFileUpload} />}
        />
        <Route
          path="/saved"
          element={<Saved saved={saved} loader={loader} setSaved={setSaved} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
