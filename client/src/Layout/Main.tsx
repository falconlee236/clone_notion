import { useState } from 'react';
import styled from 'styled-components';
import Contents from './Contents';
import Sidebar from './Sidebar';

function Main() {
  const [open, setOpen] = useState<boolean>(true);
  const onClick = () => setOpen(!open);

  return (
    <MainDiv>
      <Sidebar openState={{ open, onClick }} />
      <Contents openState={{ open, onClick }} />
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
