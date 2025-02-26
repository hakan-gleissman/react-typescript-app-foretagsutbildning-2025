import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Greeting from "../components/Greeting";
import "@testing-library/jest-dom";

describe("Greeting Component", () => {
  test("renders the greeting with provided name", () => {
    render(<Greeting name="Håkan" />);
    const headingElement = screen.getByText("Hello, Håkan!");
    expect(headingElement).toBeInTheDocument();
  });
});
