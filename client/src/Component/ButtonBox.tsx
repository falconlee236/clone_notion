import React from 'react';
import styled from 'styled-components';
import { OpenStateProps } from './Topbar';

export interface ButtonBoxSizeProps {
  size: {
    height: number;
    width: number;
  };
}

interface ButtonBoxProps extends OpenStateProps, ButtonBoxSizeProps {
  children: React.ReactNode;
  validOpen?: boolean;
}

const ButtonBoxDiv = styled.div<ButtonBoxSizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: Gainsboro;
  }
  width: ${({ size }) => `${size.width + 10}px`};
  height: ${({ size }) => `${size.height + 10}px`};
`;

export default function ButtonBox({
  openState,
  validOpen,
  children,
  size,
}: ButtonBoxProps) {
  if (validOpen)
    return (
      <ButtonBoxDiv onClick={openState.onClick} size={size}>
        {children}
      </ButtonBoxDiv>
    );
  return <ButtonBoxDiv size={size}>{children}</ButtonBoxDiv>;
}

ButtonBox.defaultProps = { validOpen: false };
