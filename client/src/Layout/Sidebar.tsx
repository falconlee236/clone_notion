import styled from 'styled-components';

function Sidebar() {
  return <Sidebarstyle>this is Sidebar</Sidebarstyle>;
}

export default Sidebar;

const Sidebarstyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(251 251 250);
  height: 100vh;
  width: 15.5vw;
`;
