import React from 'react';
import { render, screen } from "@testing-library/react";

import NavBar from "./NavBar";

test("NavBar includes title 'Charlie Leopard'", () => {
  render(<NavBar />);
  const navigationBarTitle = screen.getByText(/Charlie Leopard/i);
  expect(navigationBarTitle).not.toBeNull;
})
