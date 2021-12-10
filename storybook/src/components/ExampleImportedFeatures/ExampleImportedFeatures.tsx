import React from "react";
import ExampleImportedFeaturesWrapper from "./ExampleImportedFeatures.styles";

import { ExampleButtonAppOne } from "@create-rs-domain/example-feature-package-one"
import { ExampleButtonAppTwo } from "@create-rs-domain/example-feature-package-two"

interface ExampleImportedFeaturesProps {
  /**
   * Button label text
   */
  text?: string;
}

const ExampleImportedFeatures  = ({ text }: ExampleImportedFeaturesProps) => {
  console.log(ExampleButtonAppOne)

  // const ExampleFetch = async () => {
  //   const response = await fetch("https://localhost:8000/api/search");
  //   const data = await response.json();
  //   console.log(data);
  // }

  // console.log(ExampleFetch)

  return (
    <ExampleImportedFeaturesWrapper>
      {/* {ExampleFetch()} */}
      <ExampleButtonAppOne text="App One" />
      <ExampleButtonAppTwo text="App Two" />
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </ExampleImportedFeaturesWrapper>
  );
};

// export const MemoizedExampleImportedFeatures = React.memo(ExampleImportedFeatures);
// export { ExampleImportedFeatures };
export default ExampleImportedFeatures;
  