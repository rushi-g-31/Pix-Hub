import React, { useState, useEffect } from 'react';
import { fetchCategories, handleFileUpload } from '../services/api'; // Adjust import path if necessary

const Upload = () => {
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [mediaType, setMediaType] = useState('image');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    loadCategories();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }
  
    if (!category) {
      setError("Please enter a category.");
      return;
    }
  
    if (!title) {
      setError("Please enter a title.");
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      console.log('Uploading file:', selectedFile);
      const uploadedItem = await handleFileUpload(
        selectedFile,
        mediaType,
        category,
        description,
        title
      );
      console.log('Uploaded Item:', uploadedItem);
  
      setSuccessMessage('Upload Successful!');
      setLoading(false);
  
      setSelectedFile(null);
      setMediaType('image');
      setCategory('');
      setDescription('');
      setTitle('');
    } catch (err) {
      setLoading(false);
      setError("Failed to upload. Please try again.");
      console.error("Upload error:", err);
    }
  };
  
  return (
    <div className="upload-page">
      <h2 id="uploadHeading">Upload Media</h2>

      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Select File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept={mediaType === 'image' ? 'image/*' : 'video/*'}
            required
          />
          {selectedFile && (
            <span className="file-name">Selected File: {selectedFile.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="media-type">Media Type:</label>
          <select
            id="media-type"
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter 1-9 any single digit"
          
          />
        </div> 

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
          />
        </div>

        <button id="uploadButton" type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default Upload;
