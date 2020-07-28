import React, { useState } from "react";

const App: React.FC = () => {
  const [editorToggled, setEditorToggled] = useState<boolean>(false);
  const [image, setImage] = useState<any>("");

  const handleOnChange = (e: { target: { files: any } }) => {
    console.log(typeof e.target.files[0]);
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setImage(reader.result);
    };
  };
  return (
    <div className="app">
      <h2 className={`app__header${editorToggled ? "--toggled" : ""}`}>
        imageFramer
      </h2>
      <button
        onClick={() => setEditorToggled(true)}
        className={`app__upload-button${editorToggled ? "--toggled" : ""}`}
      >
        Upload an image
      </button>
      <div className={`app__image-editor${editorToggled ? "--toggled" : ""}`}>
        <div className="app__image-editor__close">
          <p
            onClick={() => setEditorToggled(false)}
            className="app__image-editor__close__button"
          >
            X
          </p>
        </div>
        <h2 className="app__image-editor__header">imageFramer</h2>
        <input
          className="app__image-editor__file-input"
          type="file"
          name="file"
          onChange={handleOnChange}
        />
        {image && (
          <img src={image} style={{ maxHeight: "15rem" }} alt="your file" />
        )}
      </div>
    </div>
  );
};

export default App;
