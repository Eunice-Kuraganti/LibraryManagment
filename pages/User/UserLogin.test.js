import { render, screen } from "@testing-library/react"
import UserLogin from "./UserLogin"
import React from "react";

describe("Login render Page", () => {
    it('renders the Login page', () => {
      const {getByText} = render(<UserLogin/>);
      expect(getByText(/login/i)).toBeInTheDocument();
    });
    it('render 2 input components', () => {
        const {getByLabelText} = render(<UserLogin/>);
        expect(getByLabelText(/username/i)).toBeInTheDocument();
        expect(getByLabelText(/password/i)).toBeInTheDocument();
      });
    
      it('renders a submit button', () => {
        const {getByText} = render(<UserLogin/>);
        expect(getByText("Submit")).toBeInTheDocument();
      });
    });
