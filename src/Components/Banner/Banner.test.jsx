import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "../Banner/Banner";

describe("Banner", () => {
  it("renders Banner component with correct image, text, and title", () => {
    const image = "test-image.jpg";
    const text = "Test Text";
    const title = "Test Title";

    render(<Banner image={image} text={text} title={title} />);

    const imgElement = screen.getByAltText("Banner");
    expect(imgElement).toHaveAttribute("src", image);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it("renders Banner component with custom image, text, and title", () => {
    const image = "custom-image.jpg";
    const text = "Custom Text";
    const title = "Custom Title";

    render(<Banner image={image} text={text} title={title} />);

    const imgElement = screen.getByAltText("Banner");
    expect(imgElement).toHaveAttribute("src", image);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
