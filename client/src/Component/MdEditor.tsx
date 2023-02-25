import { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export default function MdEditor() {
  const [value, setValue] = useState<string | undefined>();
  return (
    <MdEditorDiv data-color-mode="light">
      <MDEditor
        value={value}
        onChange={(val) => setValue(val)}
        preview="edit"
        height={700}
      />
    </MdEditorDiv>
  );
}

const MdEditorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 100%;
  position: fixed;
  top: 7vh;
`;

// <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
