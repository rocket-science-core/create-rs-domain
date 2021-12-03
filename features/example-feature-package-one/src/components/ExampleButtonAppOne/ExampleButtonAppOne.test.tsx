import React from "react";
import { render } from "@testing-library/react";
import ExampleButtonAppOne from "./ExampleButtonAppOne";

it("ExampleButtonAppOne renders text prop", () => {
    const { getByText } = render(
    <ExampleButtonAppOne text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("ExampleButtonAppOne renders with no prop value provided", () => {
    const { getByText } = render(<ExampleButtonAppOne text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});