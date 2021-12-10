import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { rest } from "msw";

const Readme = require("../README.md").default;

import ExampleImportedFeatures from "../ExampleImportedFeatures";

// import { exampleSearchHandlers } from "@create-rs-domain/express-server";

// const { exampleSearchAll, exampleSearchBySearchTerm } = exampleSearchHandlers;

export default {
  title: "Newly Generated/ExampleImportedFeatures/Default",
  component: ExampleImportedFeatures,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof ExampleImportedFeatures>;

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template: ComponentStory<typeof ExampleImportedFeatures> = (args) => (
  <ExampleImportedFeatures {...args} />
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

const MockTemplate: ComponentStory<typeof ExampleImportedFeatures> = (args) => (
  <ExampleImportedFeatures {...args} />
);
export const MockPrimary = MockTemplate.bind({});
MockPrimary.args = {
  text: "Hello World",
};
MockPrimary.parameters = {
  readme: {
    sidebar: Readme,
  },
  // msw: [
  //   rest.get('https://localhost:8000/api/search', (req, res, ctx) => {
  //     const responseObject = exampleSearchAll();
  //     return res(
  //       ctx.json(responseObject),
  //     );
  //   }),
  // ],
};