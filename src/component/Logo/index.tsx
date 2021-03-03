import React from 'react';
import { ImageSourcePropType } from 'react-native';

import image from '../../assets/logo.png';
import { Container, Image } from './styles';

const Logo = () => {
  return (
    <Container>
      <Image resizeMode="contain" source={image as ImageSourcePropType} />
    </Container>
  );
};

export default Logo;
