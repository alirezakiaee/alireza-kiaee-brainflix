import React from "react";
import './Upload.scss';
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/upload.svg"

const Upload = () => {
  return (
    <section className="upload">
      <header className="upload__margin">
        <h1 className="upload__title">Upload Video</h1>
      </header>
      <form className="upload__flex">
        <div className="upload__flex-two-left">
          <h4 className="upload__label">VIDEO THUMBNAIL</h4>
          <img className="upload__image" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="upload__flex-two-right">
          <label htmlFor="title" className="upload__label">
            TITLE YOUR VIDEO
          </label>
          <input
            id="title"
            className="upload__input"
            name="title"
            placeholder="Add a title to your video"
            autoComplete="off"
          />
          <label htmlFor="description" className="upload__label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            id="description"
            className="upload__textarea"
            name="description"
            rows="10"
            placeholder="Add a description of your video"
          ></textarea>
        </div>
      </form>
      <footer className="upload__action">
        <button className="upload__button-publish"><img className="search-form__submit-icon" src={uploadIcon} alt="upload icon" />
        PUBLISH</button>
        <button className="upload__link">CANCEL</button>
      </footer>
    </section>
  );
};

export default Upload;
