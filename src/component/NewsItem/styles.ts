import styled from 'styled-components/native';
import colors from '../../constants/colors';
import { transparentize } from 'polished';

export const Wrap = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  padding: 0 24px;
`;

export const Container = styled.View`
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  border-color: ${transparentize(0.8, colors.gray)};
  border-style: solid;
  border-bottom-width: 1px;
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 24px;
`;

export const Title = styled.Text`
  color: ${colors.dark};
  font-family: Inter_400Regular;
  font-size: 17px;
  line-height: 25px;
`;

export const Thumb = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 96px;
  height: 96px;
  border-bottom-right-radius: 16px;
`;

export const ThumbWrap = styled.View`
  height: 96px;
  border-color: ${colors.primary};
  border-style: solid;
  border-left-width: 3px;
`;
