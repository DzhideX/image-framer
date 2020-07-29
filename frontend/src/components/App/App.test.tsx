import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

describe("test basic functionality of the app", async () => {
  it("renders the main upload-an-image button", () => {
    const { queryByTestId } = render(<App />);
    const appButton: any = queryByTestId("app-open-button");
    expect(appButton).toBeInTheDocument();
  });

  it("renders the choose a file button", () => {
    const { queryByTestId } = render(<App />);
    const appButton: any = queryByTestId("app-open-button");
    fireEvent.click(appButton);
    const chooseFileButton = queryByTestId("choose-file-button");
    expect(chooseFileButton).toBeInTheDocument();
  });

  test("correctly applies styling to the clicked frames", () => {
    const { queryByTestId } = render(<App />);
    const appButton: any = queryByTestId("app-open-button");
    fireEvent.click(appButton);
    const testFrame: any = queryByTestId("test-frame");
    fireEvent.click(testFrame);
    expect(testFrame.classList.contains("frame-carousel__item--active")).toBe(
      true
    );
  });
});
