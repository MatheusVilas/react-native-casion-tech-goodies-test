import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import config from '../../config';
import CategoryTag from '../CategoryTag';

import { Container, Cover, Title, ReadNow, Footer } from './styles';
import colors from '../../constants/colors';

type FeaturedProps = {
  item: {
    id: string;
    category: string;
    cover: string;
    title: string;
  };
  onPress(): void;
};
const Featured = ({ item, onPress }: FeaturedProps) => {
  return (
    <Container onPress={onPress}>
      <>
        <Cover source={{ uri: `${config.API_URI}/image/${item.cover}` }} />
        <CategoryTag title={item.category} />
        <Title>{item.title}</Title>
        <Footer>
          <ReadNow>Leia agora</ReadNow>
          <AntDesign name="arrowright" size={12} color={colors.gray} />
        </Footer>
      </>
    </Container>
  );
};

export default Featured;
