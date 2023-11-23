import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonDonate from "./ButtonDonate";

describe("ButtonDonate", () => {
  it("renders ButtonDonate with correct heart and donate text", () => {
    render(<ButtonDonate />);

    const heartElement = screen.getByText("❤");
    expect(heartElement).to.exist;

    const donateTextElement = screen.getByText("Donar");
    expect(donateTextElement).to.exist;
  });
});
