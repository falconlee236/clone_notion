import { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { OpenStateProps } from './Topbar';

export default function MdEditor({ openState }: OpenStateProps) {
  const [value, setValue] = useState<string | undefined>();
  return (
    <MdEditorDiv data-color-mode="light">
      <MDEditor
        value={value}
        onChange={(val) => setValue(val)}
        preview="edit"
        height={750}
        maxHeight={750}
        style={{ width: openState.open ? '80vw' : '100vw' }}
      />
    </MdEditorDiv>
  );
}

const MdEditorDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

// <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
//        style={{ width: openState.open ? '93vw' : '100vw' }}
