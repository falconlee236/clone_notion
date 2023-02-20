import styled from 'styled-components';

function Contents() {
  return <ContentsDiv>this is contents</ContentsDiv>;
}

export default Contents;

const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 84.5vw;
`;
