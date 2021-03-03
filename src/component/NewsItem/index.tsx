import React from 'react';

import config from '../../config';
import CategoryTag from '../CategoryTag';

import { Wrap, Container, ThumbWrap, Thumb, Content, Title } from './styles';

type NewsItemProps = {
  item: {
    id: string;
    category: string;
    cover: string;
    title: string;
    subtitle: string;
    body: string;
  };
  onPress(): void;
};
const NewsItem = ({ item, onPress }: NewsItemProps) => {
  return (
    <Wrap onPress={onPress}>
      <Container>
        <ThumbWrap>
          <Thumb source={{ uri: `${config.API_URI}/image/${item.cover}` }} />
        </ThumbWrap>
        <Content>
          <CategoryTag title={item.category} />
          <Title>{item.title}</Title>
        </Content>
      </Container>
    </Wrap>
  );
};

export default NewsItem;
