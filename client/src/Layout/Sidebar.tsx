import styled from 'styled-components';
import ArrowLeftFillIcon from 'remixicon-react/ArrowLeftFillIcon';

interface SidebarProps {
  openState: {
    open: boolean;
    onClick: () => void;
  };
}

function Sidebar({ openState }: SidebarProps) {
  return (
    <SidebarDiv isOpen={openState.open}>
      <ArrowLeftFillIcon onClick={openState.onClick} />
    </SidebarDiv>
  );
}

export default Sidebar;

const SidebarDiv = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(251 251 250);
  height: 100vh;
  width: 15.5vw;
`;
