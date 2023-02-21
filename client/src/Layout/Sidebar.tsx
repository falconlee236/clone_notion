import styled from 'styled-components';
import ArrowLeftFillIcon from 'remixicon-react/ArrowLeftFillIcon';
import ButtonBox from '../Component/ButtonBox';

interface SidebarProps {
  openState: {
    open: boolean;
    onClick: () => void;
  };
}

export default function Sidebar({ openState }: SidebarProps) {
  return (
    <SidebarDiv isOpen={openState.open}>
      <ButtonBox>
        <ArrowLeftFillIcon onClick={openState.onClick} />
      </ButtonBox>
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(251 251 250);
  height: 100vh;
  width: 15.5vw;
`;
