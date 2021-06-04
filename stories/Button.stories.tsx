import { Button as ButtonComponent } from '../components/Button';

export default {
  title: 'Components API/Components/Button',
  component: ButtonComponent,
};

// This is the only named export in the file, and it matches the component name
export const Button = (args) => {
  return <ButtonComponent {...args} />;
};
