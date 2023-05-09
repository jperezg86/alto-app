import React from "react";
import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
describe("[ATOMS][Button]", () => {
    it("should be mounted without errors", () => {
        render(
            <Button onClick={jest.fn} type={"primary"}>
            Click Me!
            </Button>
        );
      expect(screen.getByTestId("custom-button")).toBeInTheDocument();
    });
    

    it('should call to onClick method when user click them', () => {
        const onClick = jest.fn()
        render(
            <Button onClick={onClick} type={"primary"}>
                Click Me!
            </Button>
        );

        const button = screen.getByTestId('custom-button')
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalled()
    })
})
