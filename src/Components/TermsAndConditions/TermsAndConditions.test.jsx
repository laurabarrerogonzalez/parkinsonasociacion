import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import TermsAndConditions from "./TermsAndConditions";

describe("TermsAndConditions", () => {
  it("renders TermsAndConditions and shows terms when link is clicked", () => {
    render(<TermsAndConditions />);

    const termsLink = screen.getByText(
      "Condiciones y la Política de privacidad"
    );
    expect(termsLink).toBeInTheDocument();

    fireEvent.click(termsLink);

    const termsModal = screen.getByText(
      "Condiciones y Política de privacidad:"
    );
    expect(termsModal).toBeInTheDocument();
  });
});
