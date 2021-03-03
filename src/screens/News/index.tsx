import React, { useEffect } from 'react';
import { DefaultRootState, useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

import { newsRequest, featuredRequest } from '../../store/modules/news/actions';

import NewsItem from '../../component/NewsItem';
import Featured from '../../component/Featured';
import Logo from '../../component/Logo';
import { Container, FlatList, Header, AllNews } from './styles';

type NewsProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const News = ({ navigation }: NewsProps) => {
  const dispatch = useDispatch();
  const { list, featured } = useSelector(
    (state: DefaultRootState | any) => state.news,
  );

  useEffect(() => {
    dispatch(newsRequest());
    dispatch(featuredRequest());
  }, []);

  if (list.length === 0 || !featured) return null;

  const renderItem = ({ item }: any) => (
    <NewsItem
      item={item}
      onPress={() => {
        navigation.navigate('Details', {
          newsId: item.id,
        });
      }}
    />
  );

  const renderHeader = () => (
    <>
      <Header>
        <Logo />
      </Header>
      {!!featured && (
        <Featured
          onPress={() => {
            navigation.navigate('Details', {
              newsId: featured.id,
            });
          }}
          item={featured}
        />
      )}
      <AllNews>Todas as notícias</AllNews>
    </>
  );

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </Container>
  );
};

export default News;
