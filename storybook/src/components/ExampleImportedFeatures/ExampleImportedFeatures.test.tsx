import React from "react";
import { render } from "@testing-library/react";
import ExampleImportedFeatures from "./ExampleImportedFeatures";

it("ExampleImportedFeatures renders text prop", () => {
    const { getByText } = render(
    <ExampleImportedFeatures text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("ExampleImportedFeatures renders with no prop value provided", () => {
    const { getByText } = render(<ExampleImportedFeatures text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});