import styled from 'styled-components';
import { ReactElement } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { RxChatBubble, RxClock, RxDotsHorizontal } from 'react-icons/rx';
import { OpenStateProps } from './Topbar';
import ButtonBox, { ButtonBoxSizeProps } from './ButtonBox';
import TopTextToComponent from './TopTextToComponent';

const TopRightButtonDiv = styled.div`
  display: flex;
`;

function newDateformat() {
  const today = new Date();
  return `${today.getMonth()}월 ${today.getDate()}일 편집`;
}

interface rightButtonsProps extends ButtonBoxSizeProps {
  component: ReactElement;
}

export default function TopRightButtons({ openState }: OpenStateProps) {
  return (
    <TopRightButtonDiv>
      {rightButtons.map((icons) => (
        <ButtonBox openState={openState} size={icons.size}>
          {icons.component}
        </ButtonBox>
      ))}
    </TopRightButtonDiv>
  );
}

const rightButtons: rightButtonsProps[] = [
  {
    component: <TopTextToComponent string={newDateformat()} />,
    size: {
      height: 20,
      width: 100,
    },
  },
  {
    component: <TopTextToComponent string="공유" />,
    size: {
      height: 20,
      width: 20,
    },
  },
  {
    component: <RxChatBubble size="20" />,
    size: {
      height: 20,
      width: 20,
    },
  },
  {
    component: <RxClock size="20" />,
    size: {
      height: 20,
      width: 20,
    },
  },
  {
    component: <AiOutlineStar size="20" />,
    size: {
      height: 20,
      width: 20,
    },
  },
  {
    component: <RxDotsHorizontal size="20" />,
    size: {
      height: 20,
      width: 20,
    },
  },
];
