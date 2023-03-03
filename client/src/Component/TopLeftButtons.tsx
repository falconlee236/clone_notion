import styled from 'styled-components';
import { OpenStateProps } from './Topbar';
import TopbarSidebarArrow from './TopbarSidebarArrow';
import TopbarTitle from './TopbarTitle';

const TopLeftButtonDiv = styled.div`
  display: flex;
`;

export default function TopLeftButtons({ openState }: OpenStateProps) {
  return (
    <TopLeftButtonDiv>
      <TopbarSidebarArrow openState={openState} />
      <TopbarTitle openState={openState} />
    </TopLeftButtonDiv>
  );
}
