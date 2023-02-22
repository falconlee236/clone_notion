import { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import Topbar, { OpenStateProps } from '../Component/Topbar';

// {openState} : {openState : 타입}
export default function Contents({ openState }: OpenStateProps) {
  const [value, setValue] = useState<string | undefined>('**Hello world!!!**');
  return (
    <ContentsDiv isOpen={openState.open}>
      <Topbar openState={openState} />
      <div className="container">
        <MDEditor value={value} onChange={(val) => setValue(val)} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
      </div>
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
