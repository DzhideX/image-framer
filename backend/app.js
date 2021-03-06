const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const images = require("images");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: 2000000 }));
app.use(bodyParser.json({ limit: 2000000 }));

app.post("/image", (req, res) => {
  const frame = images(`./images/frame${req.body.frameNumber}.png`);
  let base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
  let bufferData = Buffer.from(base64Data, "base64");
  let frontendImage = images(bufferData);
  let finishedImage = frontendImage.draw(
    frame.width(frontendImage.width()).height(frontendImage.height()),
    0,
    0
  );
  finishedImage.save("output.jpg");
  res.status(200).send();
});

app.listen(3002, () => {
  console.log("listening");
});

module.exports = app;
