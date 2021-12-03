import React from "react";
import { render } from "@testing-library/react";
import ExampleButtonAppTwo from "./ExampleButtonAppTwo";

it("ExampleButtonAppTwo renders text prop", () => {
    const { getByText } = render(
    <ExampleButtonAppTwo text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("ExampleButtonAppTwo renders with no prop value provided", () => {
    const { getByText } = render(<ExampleButtonAppTwo text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});