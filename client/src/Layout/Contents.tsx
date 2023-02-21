import styled from 'styled-components';
import Topbar, { OpenStateProps } from '../Component/Topbar';

function Contents({ openState }: OpenStateProps) {
  return (
    <ContentsDiv isOpen={openState.open}>
      <Topbar openState={openState} />
    </ContentsDiv>
  );
}

export default Contents;

const ContentsDiv = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: ${(props) => (props.isOpen ? '84.5vw' : '100vw')};
`;
