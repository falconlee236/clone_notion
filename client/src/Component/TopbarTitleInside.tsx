import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';

export default function TopbarTitleInside() {
  return (
    <TopbarTitleInsidediv>
      <EmojiPicker height={300} width={300} />
    </TopbarTitleInsidediv>
  );
}

const TopbarTitleInsidediv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
  z-index: 10;
`;
