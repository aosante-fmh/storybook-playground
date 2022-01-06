import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "danger"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Button", // will be the default children prop if not specified in story
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success Button",
};
export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger Button",
};

export const LongPrimary = Template.bind({});
LongPrimary.args = {
  ...Primary.args,
  children: "Long Primary Args",
};
