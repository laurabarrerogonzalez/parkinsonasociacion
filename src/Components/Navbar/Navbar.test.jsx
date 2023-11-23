import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const logoElement = screen.getByAltText("Logo de tu empresa");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders all navbar items", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const navItems = [
      "¿Quiénes somos?",
      "¿Qué es el Parkinson?",
      "Servicios",
      "Actualidad",
      "Colabora",
      "Trabaja con nosotros",
      "¿Dónde encontrarnos?",
    ];
    navItems.forEach((item) => {
      const navItemElement = screen.getByText(item);
      expect(navItemElement).toBeInTheDocument();
    });
  });
});
