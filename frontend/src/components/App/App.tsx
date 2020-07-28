import React, { useState } from "react";
import ImageEditor from "../ImageEditor/ImageEditor";

const App: React.FC = () => {
  const [editorToggled, setEditorToggled] = useState<boolean>(false);

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
      {editorToggled && <ImageEditor setEditorToggled={setEditorToggled} />}
    </div>
  );
};

export default App;
