import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useToast } from "@/context/toast-context";
import { ToastProvider } from "@/context/toast-context";
import Modal from "@/components/modal";
import { sendMail } from "@/components/modal/action";

const renderWithProviders = (props: any) => {
  return render(
    <ToastProvider>
      <Modal {...props} />
    </ToastProvider>
  );
};

describe("Modal Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the modal when isOpen is true", () => {
    renderWithProviders({ isOpen: true, onClose: jest.fn() });

    expect(screen.getByText("Contact Information")).toBeInTheDocument();
  });

  it("doesn't render the modal when isOpen is false", () => {
    renderWithProviders({ isOpen: false, onClose: jest.fn() });

    expect(screen.queryByText("Contact Information")).not.toBeInTheDocument();
  });

  it("displays form validation errors", async () => {
    renderWithProviders({ isOpen: true, onClose: jest.fn() });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(
      await screen.findByText("Phone number is required")
    ).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Subject is required")).toBeInTheDocument();
    expect(await screen.findByText("Message is required")).toBeInTheDocument();
  });

  it("closes the modal when the close button is clicked", () => {
    const onCloseMock = jest.fn();
    renderWithProviders({ isOpen: true, onClose: onCloseMock });
    fireEvent.click(screen.getByText("×"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
