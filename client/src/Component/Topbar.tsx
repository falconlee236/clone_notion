import styled from 'styled-components';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import ButtonBox from './ButtonBox';

export interface OpenStateProps {
  openState: {
    open: boolean;
    onClick: () => void;
  };
}

export default function Topbar({ openState }: OpenStateProps) {
  /*
  function newDateformat() {
    const today = new Date();
    return `${today.getMonth()}월 ${today.getDate()}일 편집`;
  } */

  return (
    <TopbarDiv isOpen={openState.open}>
      <ButtonBox openState={openState}>
        <AiOutlineDoubleRight display={openState.open ? 'none' : 'block'} />
      </ButtonBox>
    </TopbarDiv>
  );
}

const TopbarDiv = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.isOpen ? '84.5vw' : '100vw')};
  height: 7vh;
  position: fixed;
  border: solid red 2px;
`;
