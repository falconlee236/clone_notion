import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlineDoubleRight, AiOutlineMenu } from 'react-icons/ai';
import ButtonBox from './ButtonBox';
import { OpenStateProps } from './Topbar';

export default function TopbarSidebarArrow({ openState }: OpenStateProps) {
  const [hover, setHover] = useState<boolean>(false);
  const changeHover = () => setHover(!hover);
  return (
    <TopbarSidebarArrowDiv
      onMouseEnter={changeHover}
      onMouseLeave={changeHover}
      isOpen={openState.open}
    >
      <ButtonBox openState={openState} validOpen>
        {hover ? (
          <AiOutlineMenu size="20" />
        ) : (
          <AiOutlineDoubleRight size="20" />
        )}
      </ButtonBox>
    </TopbarSidebarArrowDiv>
  );
}

const TopbarSidebarArrowDiv = styled.div<{ isOpen: boolean }>`
  visibility: ${(p) => (p.isOpen ? 'hidden' : 'visibilty')};
  &.hover {
    animation-delay: 0.1ms;
  }
`;
