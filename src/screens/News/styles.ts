import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const FlatList = styled.FlatList``;

export const AllNews = styled.Text`
  color: ${colors.gray};
  font-family: PTSerif_700Bold_Italic;
  font-size: 12px;
  padding: 0 24px;
`;
