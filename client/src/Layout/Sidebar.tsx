import styled from 'styled-components';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import ButtonBox, { ButtonBoxSizeProps } from '../Component/ButtonBox';

interface SidebarProps {
  openState: {
    open: boolean;
    onClick: () => void;
  };
}

const SidebarDiv = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(251 251 250);
  height: 100vh;
  width: 15.5vw;
`;

export default function Sidebar({ openState }: SidebarProps) {
  const iconSize: ButtonBoxSizeProps = {
    size: {
      height: 20,
      width: 20,
    },
  };
  return (
    <SidebarDiv isOpen={openState.open}>
      <ButtonBox openState={openState} validOpen size={iconSize.size}>
        <AiOutlineDoubleLeft size="20" />
      </ButtonBox>
    </SidebarDiv>
  );
}
