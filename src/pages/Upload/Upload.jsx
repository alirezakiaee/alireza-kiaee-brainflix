import React from "react";
import './Upload.scss';
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

const Upload = () => {
  return (
    <section className="upload">
      <header className="upload__margin">
        <h1 className="upload__title">Upload Video</h1>
      </header>
      <form className="upload__flex">
        <div>
          <h4 className="upload__description">VIDEO THUMBNAIL</h4>
          <img className="upload__image" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="upload__flex-two">
          <label htmlFor="title" className="upload__description">
            TITLE YOUR VIDEO
          </label>
          <input
            id="title"
            className="upload__form-title"
            name="title"
            placeholder="Add a title to your video"
            autoComplete="off"
          />
          <label htmlFor="description" className="upload__description">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            id="description"
            className="upload__form-description"
            name="description"
            rows="10"
            placeholder="Add a description of your video"
          ></textarea>
        </div>
      </form>
      <footer className="upload__button-container">
        <button className="upload__button-publish">PUBLISH</button>
        <button className="upload__button-cancel">CANCEL</button>
      </footer>
    </section>
  );
};

export default Upload;
