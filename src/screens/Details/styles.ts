import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.ScrollView`
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${colors.white};
  padding-bottom: 10px;
  padding: 0 24px;
  height: 52px;
`;

export const Back = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex-direction: row;
  align-items: center;
`;

export const BackText = styled.Text`
  color: ${colors.gray};
  font-family: PTSerif_700Bold_Italic;
  font-size: 12px;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 310px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  color: ${colors.dark};
  font-family: PTSerif_700Bold_Italic;
  font-size: 32px;
  line-height: 36px;
  margin: 10px 0 16px 0;
`;

export const BoxSubtitle = styled.View`
  border-color: ${colors.primary};
  border-style: solid;
  border-left-width: 3px;
  padding-left: 16px;
  margin-bottom: 48px;
`;

export const Subtitle = styled.Text`
  color: ${colors.gray};
  font-family: PTSerif_400Regular;
  font-size: 20px;
  line-height: 26px;
`;

export const Body = styled.Text`
  color: ${colors.dark};
  font-family: Inter_400Regular;
  font-size: 17px;
  line-height: 28px;
`;

export const Content = styled.View`
  padding: 0 24px;
`;
