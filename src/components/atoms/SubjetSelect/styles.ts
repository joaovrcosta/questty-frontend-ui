import styled, { css } from 'styled-components'

export const SubjectSelect = styled.select`
  height: 2.5rem;
  width: 180px;
  background-color: #ebf2f7;
  border: none;
  color: #46535f;
  font-family: Poppins;
  cursor: pointer;

  border-radius: 30px;
  padding: 0 0 0 16px;

  &:focus {
    border: 2px solid #6d83f3;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.1s ease all;
  }

  &:hover {
    opacity: 0.8;
  }
`
