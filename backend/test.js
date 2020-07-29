const chai = require("chai");
const request = require("supertest");
const app = require("./app");
const fs = require("fs");

const expect = chai.expect;

describe("test if backend works correctly", () => {
  before(() => {
    fs.unlink("output.jpg", (err) => {
      if (err) {
        console.log(err);
      }
    });
  });

  it("correctly recieves, frames and renders the image", () => {
    request(app)
      .post("/image")
      .send({
        image:
          "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAJklEQVR42mNk+P+/noGGgHHUglELRi0YtWDUglELRi0YtWBoWAAAvR470VbcovMAAAAASUVORK5CYII=",
        frameNumber: 0,
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .then((res) => {
        if (res.status === 200) {
          fs.readdir("./", (err, files) => {
            expect(files.some((el) => el === "output.jpg")).to.be.equal(true);
          });
        }
      });
  });
});
