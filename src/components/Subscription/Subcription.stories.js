import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
  title: "Form/Subscription",
};

export const PrimarySubscription = () => (
  <>
    <Large size="large" placeholder="Large size" />
    <Primary />
  </>
);
