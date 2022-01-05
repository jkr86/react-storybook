import React from "react";
import CustomSearch from "./index";
import data from "./data.json";
export default {
  title: "Autocomplete Search",
  component: CustomSearch,
  argTypes: {},
};

const Template = (args) => <CustomSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
};
