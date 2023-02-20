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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  border: solid 1px red;
`;
