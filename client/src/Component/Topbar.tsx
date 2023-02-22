import styled from 'styled-components';
import TopbarSidebarArrow from './TopbarSidebarArrow';
import TopRightButtons from './TopRightButtons';

export interface OpenStateProps {
  openState: {
    open: boolean;
    onClick: () => void;
  };
}

const TopbarDiv = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.isOpen ? '84.5vw' : '100vw')};
  height: 7vh;
  position: fixed;
`;

export default function Topbar({ openState }: OpenStateProps) {
  return (
    <TopbarDiv isOpen={openState.open}>
      <TopbarSidebarArrow openState={openState} />
      <TopRightButtons openState={openState} />
    </TopbarDiv>
  );
}
