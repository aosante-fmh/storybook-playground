import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Small size",
};
Small.storyName = "Small Input";

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "Medium size",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Large size",
};
