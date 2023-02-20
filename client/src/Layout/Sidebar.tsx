import styled from 'styled-components';

function Sidebar() {
  return <SidebarDiv>this is Sidebar</SidebarDiv>;
}

export default Sidebar;

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(251 251 250);
  height: 100vh;
  width: 15.5vw;
`;
