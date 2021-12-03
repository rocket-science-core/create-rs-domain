import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import ExampleButtonAppTwo from "../ExampleButtonAppTwo";
  
  export default {
    title: "Newly Generated/ExampleButtonAppTwo/Default",
    component: ExampleButtonAppTwo,
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof ExampleButtonAppTwo>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof ExampleButtonAppTwo> = (args) => (
    <ExampleButtonAppTwo {...args} />
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