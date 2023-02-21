import styled from 'styled-components';
import TopbarSidebarArrow from './TopbarSidebarArrow';
import TopRightButtons from './TopRightButtons';

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
      <TopbarSidebarArrow openState={openState} />
      <TopRightButtons openState={openState} />
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
