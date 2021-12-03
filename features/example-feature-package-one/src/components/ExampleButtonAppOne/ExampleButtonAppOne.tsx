import React from "react";
import ExampleButtonAppOneWrapper from "./ExampleButtonAppOne.styles";

interface ExampleButtonAppOneProps {
  /**
   * Button label text
   */
  text?: string;
}

const ExampleButtonAppOne = ({ text }: ExampleButtonAppOneProps) => {
  return (
    <ExampleButtonAppOneWrapper>
      App One
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </ExampleButtonAppOneWrapper>
  );
};

// export const MemoizedExampleButtonAppOne = React.memo(ExampleButtonAppOne);
// export { ExampleButtonAppOne };
export default ExampleButtonAppOne;
