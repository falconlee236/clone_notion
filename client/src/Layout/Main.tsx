import { useState } from 'react';
import styled from 'styled-components';
import Contents from './Contents';
import Sidebar from './Sidebar';

export default function Main() {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => setOpen(!open);
  return (
    <MainDiv>
      <Sidebar openState={{ open, onClick }} />
      <Contents openState={{ open, onClick }} />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
