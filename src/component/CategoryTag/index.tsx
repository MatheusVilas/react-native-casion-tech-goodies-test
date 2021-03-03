import React from 'react';

import { Container, Title } from './styles';

type CategoryTagProps = {
  title: string;
};

const CategoryTag = ({ title }: CategoryTagProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default CategoryTag;
