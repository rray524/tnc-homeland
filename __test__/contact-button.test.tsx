import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactButton from "@/components/button/contact-button";

describe("ContactButton Component", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders the button with the provided text", () => {
    const buttonText = "Contact Us";
    render(<ContactButton text={buttonText} />);
    const button = screen.getByTestId("contact-btn");
    expect(button).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const buttonText = "Contact Us";
    render(<ContactButton text={buttonText} onClick={mockOnClick} />);
    const button = screen.getByTestId("contact-btn");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not fail when the onClick handler is not provided", () => {
    const buttonText = "Contact Us";
    render(<ContactButton text={buttonText} />);
    const button = screen.getByTestId("contact-btn");
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("renders the SVG icon inside the button", () => {
    const buttonText = "Contact Us";
    render(<ContactButton text={buttonText} onClick={mockOnClick} />);
    const svgIcon = screen.getByTestId("contact-icon");
    expect(svgIcon).toBeInTheDocument();
  });
});
