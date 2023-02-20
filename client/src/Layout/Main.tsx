import styled from 'styled-components';
import Contents from './Contents';
import Sidebar from './Sidebar';

function Main() {
  return (
    <MainDiv>
      <Sidebar />
      <Contents />
    </MainDiv>
  );
}

export default Main;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
