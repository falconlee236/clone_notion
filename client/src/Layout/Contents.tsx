import styled from 'styled-components';
import MdEditor from 'Component/MdEditor';
import Topbar, { OpenStateProps } from '../Component/Topbar';

// {openState} : {openState : 타입}
export default function Contents({ openState }: OpenStateProps) {
  return (
    <ContentsDiv isOpen={openState.open}>
      <Topbar openState={openState} />
      <MdEditor />
    </ContentsDiv>
  );
}

const ContentsDiv = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: ${(props) => (props.isOpen ? '84.5vw' : '100vw')};
`;
