/**
 * @format
 */

import 'react-native';
import React from 'react';
import { LoginContainer } from '../app/features/login/containers/LoginContainer';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<LoginContainer />)
});
