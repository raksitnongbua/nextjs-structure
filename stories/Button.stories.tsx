import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, Props as ButtonProps } from '../components/Button';

export default {
  title: 'Component API/Components/Button',
  component: Button,
} as Meta;

export const Template: Story<ButtonProps> = () => <Button label='Button' />;
