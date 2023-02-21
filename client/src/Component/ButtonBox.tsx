import React from 'react';
import styled from 'styled-components';
import { OpenStateProps } from './Topbar';

interface ButtonBoxProps extends OpenStateProps {
  children: React.ReactNode;
}

export default function ButtonBox({ openState, children }: ButtonBoxProps) {
  return <ButtonBoxDiv onClick={openState.onClick}>{children}</ButtonBoxDiv>;
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
