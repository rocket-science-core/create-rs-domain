import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import ExampleImportedFeaturesFed from "../ExampleImportedFeaturesFed";
  
  export default {
    title: "Newly Generated/ExampleImportedFeaturesFed/Default",
    component: ExampleImportedFeaturesFed,
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof ExampleImportedFeaturesFed>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof ExampleImportedFeaturesFed> = (args) => (
    <ExampleImportedFeaturesFed {...args} />
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
    text: "Hello World",
  };
  Primary.parameters = {
    readme: {
      sidebar: Readme,
    },
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    text: "",
  };
  Secondary.parameters = {
    readme: {
      sidebar: Readme,
    },
  };