import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  height: 20px;
  border: 1px solid ${colors.primary};
  border-bottom-right-radius: 8px;
  align-self: flex-start;
  margin-bottom: 11px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-family: Inter_400Regular;
  font-size: 12px;
  text-transform: uppercase;
`;
