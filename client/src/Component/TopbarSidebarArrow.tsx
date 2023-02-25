import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlineDoubleRight, AiOutlineMenu } from 'react-icons/ai';
import ButtonBox from './ButtonBox';
import { OpenStateProps } from './Topbar';

const TopbarSidebarArrowDiv = styled.div<{ isOpen: boolean }>`
  visibility: ${(p) => (p.isOpen ? 'hidden' : 'visibilty')};
  box-sizing: content-box;
  height: 20px;
  width: 20px;
`;

export default function TopbarSidebarArrow({ openState }: OpenStateProps) {
  const [hover, setHover] = useState<boolean>(false);
  const changeHover = () => setHover(!hover);
  const iconSize = {
    height: 20,
    width: 20,
  };
  return (
    <TopbarSidebarArrowDiv
      onMouseEnter={changeHover}
      onMouseOut={changeHover}
      isOpen={openState.open}
    >
      <ButtonBox openState={openState} validOpen size={iconSize}>
        {hover ? (
          <AiOutlineMenu size="20" />
        ) : (
          <AiOutlineDoubleRight size="20" />
        )}
      </ButtonBox>
    </TopbarSidebarArrowDiv>
  );
}
