import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"

test("should load context us page", ()=>{

    render(<ContactUs />);

    const heading = screen.getByRole("textbox");

    expect(heading).toBeInTheDocument();
})