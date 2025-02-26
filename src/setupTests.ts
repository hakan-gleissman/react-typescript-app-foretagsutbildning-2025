// src/setupTests.ts
import { server } from "../mocks/server";
import { beforeAll, afterEach, afterAll } from "vitest";

// Starta MSW innan testerna körs
beforeAll(() => server.listen());

// Återställ eventuella anpassade handlers efter varje test
afterEach(() => server.resetHandlers());

// Stäng servern efter att alla tester har körts
afterAll(() => server.close());
