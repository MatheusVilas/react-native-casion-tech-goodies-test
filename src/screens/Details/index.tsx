import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { DefaultRootState, useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { newsGet } from '../../store/modules/news/actions';

import Logo from '../../component/Logo';
import CategoryTag from '../../component/CategoryTag';
import colors from '../../constants/colors';
import config from '../../config';
import {
  Container,
  Header,
  Back,
  BackText,
  Cover,
  Title,
  BoxSubtitle,
  Subtitle,
  Body,
  Content,
} from './styles';

type ParamList = {
  Details: {
    newsId: number;
  };
};

type DetailsProps = {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamList, 'Details'>;
};

const Details = ({ route, navigation }: DetailsProps) => {
  const dispatch = useDispatch();
  const { details } = useSelector(
    (state: DefaultRootState | any) => state.news,
  );
  const { newsId } = route.params;

  useEffect(() => {
    dispatch(newsGet(newsId));
  }, []);

  if (!details) return null;

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={12} color={colors.gray} />
          <BackText>Voltar</BackText>
        </Back>
        <Logo />
      </Header>
      <Cover source={{ uri: `${config.API_URI}/image/${details.cover}` }} />
      <Content>
        <CategoryTag title={details.category} />
        <Title>{details.title}</Title>
        <BoxSubtitle>
          <Subtitle>{details.subtitle}</Subtitle>
        </BoxSubtitle>
        <Body>{details.body}</Body>
      </Content>
    </Container>
  );
};

export default Details;
