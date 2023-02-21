import React from 'react';
import styled from 'styled-components';

interface ButtonBoxProps {
  children: React.ReactNode;
}

export default function ButtonBox({ children }: ButtonBoxProps) {
  return <ButtonBoxDiv>{children}</ButtonBoxDiv>;
}

const ButtonBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: Gainsboro;
  }
  width: 25px;
  height: 25px;
`;
