import React, { useState } from "react";
import ImageEditor from "../ImageEditor/ImageEditor";
import FrameCarousel from "../FrameCarousel/FrameCarousel";

const App: React.FC = () => {
  const [editorToggled, setEditorToggled] = useState<boolean>(false);
  const [frame, setFrame] = useState<number>(0);

  return (
    <div className={`app${editorToggled ? "--toggled" : ""}`}>
      <h2 className={`app__header${editorToggled ? "--toggled" : ""}`}>
        imageFramer
      </h2>
      <button
        onClick={() => setEditorToggled(true)}
        className={`app__upload-button${editorToggled ? "--toggled" : ""}`}
        data-testid="app-open-button"
      >
        Upload an image
      </button>
      {editorToggled && (
        <ImageEditor setEditorToggled={setEditorToggled} frame={frame} />
      )}
      {editorToggled && <FrameCarousel setFrame={setFrame} />}
    </div>
  );
};

export default App;
