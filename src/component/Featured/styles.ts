import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  padding: 26px 24px 16px 24px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${colors.dark};
  font-family: PTSerif_700Bold_Italic;
  font-size: 26px;
  line-height: 33px;
`;

export const ReadNow = styled.Text`
  color: ${colors.gray};
  font-family: Inter_400Regular;
  font-size: 12px;
  margin-right: 5px;
  text-transform: uppercase;
`;
