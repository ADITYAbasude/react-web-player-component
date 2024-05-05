import '@testing-library/jest-dom';
import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerControls from "../src/PlayerControls";


test("render player component with play and pause button", () => {
  render(<PlayerControls />);
  const playButton = screen.getByRole('button', {name: /play/i});
  const pauseButton = screen.getByRole('button', {name: /pause/i});
  expect(playButton).toContainHTML('<svg');
  expect(pauseButton).toContainHTML('<svg');
});
