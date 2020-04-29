import styled from '@emotion/styled';
import { NoStyleLink } from '../Links/LinkStyles';

export const Button = styled(NoStyleLink)`
  display: inline-block;
  outline: none;
  border: none;
  padding: 5px 12px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const ButtonExternal = styled.a`
  display: inline-block;
  text-decoration: none;
  outline: none;
  border: none;
  padding: 5px 12px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
