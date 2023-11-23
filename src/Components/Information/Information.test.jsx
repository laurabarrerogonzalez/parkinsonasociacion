import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Information from "./Information";

describe("Information", () => {
  it("renders Information and checks if elements are in the document", () => {
    render(<Information />);

    const badajozTitle = screen.getByText("Badajoz");
    expect(badajozTitle).toBeInTheDocument();

    const caceresTitle = screen.getByText("Cáceres");
    expect(caceresTitle).toBeInTheDocument();

    const montijoTitle = screen.getByText("Montijo");
    expect(montijoTitle).toBeInTheDocument();

    const meridaTitle = screen.getByText("Mérida");
    expect(meridaTitle).toBeInTheDocument();
  });
});
