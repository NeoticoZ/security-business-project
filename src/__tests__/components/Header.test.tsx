import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("<Header />", () => {
  it("renders correctly", () => {
    render(<Header />);

    expect(screen.getByText("Have any questions?")).toBeInTheDocument();
  });
});
