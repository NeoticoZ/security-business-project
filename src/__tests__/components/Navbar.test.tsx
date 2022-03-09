import { render, screen } from "@testing-library/react";
import React from "react";
import Navbar from "../../components/Navbar";
// import UserEvent from "@testing-library/user-event";

describe("<Navbar />", () => {
  it("renders correctly", () => {
    render(<Navbar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
