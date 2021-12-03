import React from "react";
import ExampleButtonAppTwoWrapper from "./ExampleButtonAppTwo.styles";

interface ExampleButtonAppTwoProps {
  /**
   * Button label text
   */
  text?: string;
}

const ExampleButtonAppTwo = ({ text }: ExampleButtonAppTwoProps) => {
  return (
    <ExampleButtonAppTwoWrapper>
      App Two
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </ExampleButtonAppTwoWrapper>
  );
};

// export const MemoizedExampleButtonAppTwo = React.memo(ExampleButtonAppTwo);
// export { ExampleButtonAppTwo };
export default ExampleButtonAppTwo;
