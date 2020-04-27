import styled from '@emotion/styled';

export const Button = styled.div`
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
