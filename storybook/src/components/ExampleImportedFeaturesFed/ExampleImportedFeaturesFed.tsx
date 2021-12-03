import React from "react";
import ExampleImportedFeaturesFedWrapper from "./ExampleImportedFeaturesFed.styles";
import DynamicRemoteContainer from "../../util/hooks/DynamicRemoteContainer";

interface ExampleImportedFeaturesFedProps {
  /**
   * Button label text
   */
  text?: string;
}

const ExampleImportedFeaturesFed  = ({ text }: ExampleImportedFeaturesFedProps) => {
  return (
    <ExampleImportedFeaturesFedWrapper>
      <DynamicRemoteContainer
       url={"http://localhost:2002/remoteEntry.js"}
       scope={"appOne"}
       module={"./ExampleButtonAppOne"}
       componentProps={{text: "App One"}}
     />
       <DynamicRemoteContainer
       url={"http://localhost:3002/remoteEntry.js"}
       scope={"appTwo"}
       module={"./ExampleButtonAppTwo"}
       componentProps={{text: "App Two"}}
     />
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </ExampleImportedFeaturesFedWrapper>
  );
};

// export const MemoizedExampleImportedFeaturesFed = React.memo(ExampleImportedFeaturesFed);
// export { ExampleImportedFeaturesFed };
export default ExampleImportedFeaturesFed;
  