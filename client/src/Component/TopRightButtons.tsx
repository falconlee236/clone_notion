import styled from 'styled-components';
import { ReactElement } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { RxChatBubble, RxClock, RxDotsHorizontal } from 'react-icons/rx';
import { OpenStateProps } from './Topbar';
import ButtonBox from './ButtonBox';

export default function TopRightButtons({ openState }: OpenStateProps) {
  return (
    <TopRightButtonDiv>
      {rightButtons.map((icon) => (
        <ButtonBox openState={openState}>{icon}</ButtonBox>
      ))}
    </TopRightButtonDiv>
  );
}

const rightButtons: ReactElement[] = [
  <RxChatBubble size="20" />,
  <RxClock size="20" />,
  <AiOutlineStar size="20" />,
  <RxDotsHorizontal size="20" />,
];

const TopRightButtonDiv = styled.div`
  display: flex;
`;
