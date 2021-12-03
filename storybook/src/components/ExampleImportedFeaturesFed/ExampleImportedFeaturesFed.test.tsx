import React from "react";
import { render } from "@testing-library/react";
import ExampleImportedFeaturesFed from "./ExampleImportedFeaturesFed";

it("ExampleImportedFeaturesFed renders text prop", () => {
    const { getByText } = render(
    <ExampleImportedFeaturesFed text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("ExampleImportedFeaturesFed renders with no prop value provided", () => {
    const { getByText } = render(<ExampleImportedFeaturesFed text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});