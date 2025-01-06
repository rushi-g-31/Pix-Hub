import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Django backend URL

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token (if necessary)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token"); // Retrieve token from storage (if applicable)
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Add token to request headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fetch categories from the API
export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get(`/categories/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error.response?.data || error.message);
    throw error; // Rethrow the error so it can be caught elsewhere if needed
  }
};

// Fetch media items from the API, optionally filter by media type and category
export const fetchMediaItems = async (mediaType = '', categoryId = '') => {
  try {
    let url = `/media-items/`;
    const params = {};

    if (mediaType) params.media_type = mediaType;
    if (categoryId) params.category_id = categoryId;

    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching media items:", error.response?.data || error.message);
    throw error;
  }
};

// Upload media item to the API
export const uploadMediaItem = async (data) => {
  try {
    const response = await axiosInstance.post("/media-items/", data, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure you're sending form data
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading media item:", error.response?.data || error.message);
    throw error;
  }
};

// Handle file upload and call the upload API
export const handleFileUpload = async (file, mediaType, categoryId, description = '',title) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    formData.append('media_type', mediaType);
    formData.append('category', categoryId);
    formData.append('description', description);

    // Upload the file via the uploadMediaItem API
    const uploadedItem = await uploadMediaItem(formData); 
    console.log('Uploaded media:', uploadedItem);

    // Handle the response here (e.g., update state, show success message, etc.)
    return uploadedItem;  // Returning the uploaded item for further use
  } catch (error) {
    console.error('Failed to upload:', error.response?.data || error.message);
    throw error;
  }
};
