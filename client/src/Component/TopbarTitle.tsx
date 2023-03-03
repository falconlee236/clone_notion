import { BsPinAngleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useState } from 'react';
import { OpenStateProps } from './Topbar';
import TopTextToComponent from './TopTextToComponent';
import TopbarTitleInside from './TopbarTitleInside';
import ButtonBox from './ButtonBox';

export default function TopbarTitle({ openState }: OpenStateProps) {
  const [titleOpen, settitleOpen] = useState<boolean>(false);
  const Popup = () => settitleOpen(!titleOpen);
  const size = {
    height: 20,
    width: 100,
  };
  return (
    <div style={{ position: 'relative' }}>
      <PageTitlePopup onClick={Popup}>
        <ButtonBox openState={openState} validOpen={false} size={size}>
          <BsPinAngleFill size={20} style={{ paddingRight: '10px' }} />
          <TopTextToComponent string="빠른메모" />
        </ButtonBox>
      </PageTitlePopup>
      {titleOpen ? <TopbarTitleInside /> : null}
    </div>
  );
}

const PageTitlePopup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
