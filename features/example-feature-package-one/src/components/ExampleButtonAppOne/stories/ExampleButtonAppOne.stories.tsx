import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import ExampleButtonAppOne from "../ExampleButtonAppOne";
  
  export default {
    title: "Newly Generated/ExampleButtonAppOne/Default",
    component: ExampleButtonAppOne,
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof ExampleButtonAppOne>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof ExampleButtonAppOne> = (args) => (
    <ExampleButtonAppOne {...args} />
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