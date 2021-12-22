import { React, useState } from 'react';
import styles from './assets/style.module.scss';
import folder from './assets/img/folder_5.svg';
import close from './assets/img/x.svg';

export default function ImagePreview() {
  const [image, setImage] = useState();
  const [isUpload, setIsUpload] = useState(false);
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUpload(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <h2>Upload your image</h2>
        <p>Image Preview</p>
        <div className={styles.image}>
          <div className={styles.imageUpload}>
            {!isUpload ? (
              <>
                <label htmlFor='upload-input'>
                  {/* <img
                    src={folder}
                    draggable={'false'}
                    alt='placeholder'
                    style={{ width: '5rem' }}
                  /> */}
                  <a href='#'>Upload</a>
                  <p style={{ color: '#444' }}>Click to upload your image</p>
                </label>
                <input
                  id='upload-input'
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <div className={styles.ImagePreview}>
                {/* <img
                  className={styles.closeIcon}
                  src={close}
                  alt='close'
                  onClick={() => {
                    setIsUpload(false);
                    setImage(null);
                  }}
                /> */}
                <img
                  id={styles.uploadedImage}
                  src={image}
                  alt='uploaded-img'
                  onClick={() => {
                    setIsUpload(false);
                    setImage(null);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
