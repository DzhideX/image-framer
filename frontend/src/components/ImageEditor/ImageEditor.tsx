import React, { useState, useRef } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
//@ts-ignore
import IE from "@toast-ui/react-image-editor";

const ImageEditor: React.FC<{
  setEditorToggled: any;
}> = ({ setEditorToggled }) => {
  const [image, setImage] = useState<any>("");
  const editorRef = useRef();

  const upload = () => {
    let editor: any = editorRef.current;
    console.log("imageToBeSent", editor.imageEditorInst.toDataURL());
  };

  const handleOnChange = (e: { target: { files: any } }) => {
    console.log(typeof e.target.files[0]);
    let file = e.target.files[0];
    let reader = new FileReader();
    console.log(file);
    if (file && file.type.match("image.*")) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = (e) => {
      setImage("");
      setImage(reader.result);
    };
  };

  return (
    <div className={`app__image-editor`}>
      <div className="app__image-editor__close">
        <p
          onClick={() => setEditorToggled(false)}
          className="app__image-editor__close__button"
        >
          X
        </p>
      </div>
      <h2 className="app__image-editor__header">imageFramer</h2>
      {image && (
        <IE
          ref={editorRef}
          includeUI={{
            loadImage: {
              path: image,
              name: "SampleImage",
            },
            theme: {
              "loadButton.display": "none",
              "common.backgroundColor": "#05386b",
              "header.display": "none",
              "deleteButton.display": "none",
            },
            menu: ["flip", "crop", "rotate"],
            initMenu: "filter",
            uiSize: {
              width: "50rem",
              height: "35rem",
            },
            menuBarPosition: "bottom",
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
          }}
          usageStatistics={true}
        />
      )}
      <div className="app__image-editor__bottom">
        <input
          className="app__image-editor__file-input"
          type="file"
          name="file"
          id="file"
          onChange={handleOnChange}
          accept="image/png, image/jpeg"
        />
        <label
          className={`app__image-editor__bottom__button${
            image ? "" : "--toggled"
          }`}
          htmlFor="file"
        >
          Choose a file
        </label>
        {image && (
          <>
            <button
              className="app__image-editor__bottom__button"
              onClick={() => setImage("")}
            >
              Delete File
            </button>
            <button
              onClick={upload}
              className="app__image-editor__bottom__button"
            >
              Upload Image
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageEditor;
