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
/*
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm i --save-dev @types/jest
npm i jsdom (typ så)

tsconfig.json:
,
  "compilerOptions": {
    // ... dina övriga inställningar
    "types": ["vitest/globals"]
  }
vite.config.ts:
import { defineConfig } from "vitest/config"; istället för första raden
och:
test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },

  filen setupTests.ts:
  import '@testing-library/jest-dom';
*/
