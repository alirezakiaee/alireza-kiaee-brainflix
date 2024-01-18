import React, { useState } from "react";
import axios from 'axios';
import './Upload.scss';
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/upload.svg";


const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/videos/', formData);
      console.log('Video uploaded successfully', response.data);
      alert('Video uploaded successfully');
    } catch (error) {
      console.error('Upload failed', error);
    }
  };
  return (
    <section className="upload">
      <header className="upload__margin">
        <h1 className="upload__title">Upload Video</h1>
      </header>
      <form className="upload__flex" onSubmit={handleSubmit}>
        <div className="upload__flex-two-left">
          <h4 className="upload__label">VIDEO THUMBNAIL</h4>
          <img className="upload__image" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="upload__flex-two-right">
          <label htmlFor="title" className="upload__label">TITLE YOUR VIDEO</label>
          <input
            id="title"
            className="upload__input"
            name="title"
            placeholder="Add a title to your video"
            autoComplete="off"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label htmlFor="description" className="upload__label">ADD A VIDEO DESCRIPTION</label>
          <textarea
            id="description"
            className="upload__textarea"
            name="description"
            rows="10"
            placeholder="Add a description of your video"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        <footer className="upload__action">
          <button type="submit" className="upload__button-publish">
            <img className="search-form__submit-icon" src={uploadIcon} alt="upload icon" />
            PUBLISH
          </button>
          <button className="upload__link">CANCEL</button>
        </footer>
        </div>
      </form>
    </section>
  );
};

export default Upload;
