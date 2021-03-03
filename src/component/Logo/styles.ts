import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View`
  width: 135px;
  border-color: ${colors.primary};
  border-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 6px;
`;

export const Image = styled.Image`
  width: 135px;
  height: 22px;
  border-bottom-right-radius: 16px;
`;
