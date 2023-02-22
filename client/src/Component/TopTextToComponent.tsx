import styled from 'styled-components';

interface TopTextToComponentProps {
  string: string;
}

export default function TopTextToComponent({
  string,
}: TopTextToComponentProps) {
  return <TopTextToComponentSpan>{string}</TopTextToComponentSpan>;
}

const TopTextToComponentSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
