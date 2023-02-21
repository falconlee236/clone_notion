import React from 'react';
import styled from 'styled-components';
import { OpenStateProps } from './Topbar';

interface ButtonBoxProps extends OpenStateProps {
  children: React.ReactNode;
  validOpen?: boolean;
}

export default function ButtonBox({
  openState,
  validOpen,
  children,
}: ButtonBoxProps) {
  if (validOpen)
    return <ButtonBoxDiv onClick={openState.onClick}>{children}</ButtonBoxDiv>;
  return <ButtonBoxDiv>{children}</ButtonBoxDiv>;
}

ButtonBox.defaultProps = { validOpen: false };

const ButtonBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: Gainsboro;
  }
  width: 30px;
  height: 30px;
`;
