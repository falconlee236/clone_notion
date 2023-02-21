import styled from 'styled-components';
import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';
import ButtonBox from '../Component/ButtonBox';

interface ContentsProps {
  openState: {
    open: boolean;
    onClick: () => void;
  };
}

function Contents({ openState }: ContentsProps) {
  return (
    <ContentsDiv isOpen={openState.open}>
      <ButtonBox>
        <ArrowRightFillIcon
          onClick={openState.onClick}
          display={openState.open ? 'none' : 'block'}
        />
      </ButtonBox>
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
