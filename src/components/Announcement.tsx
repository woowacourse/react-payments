import styled from "@emotion/styled";

interface AnnouncementProps {
  main: string;
  caption?: string;
}

function Announcement({ main, caption }: AnnouncementProps) {
  return (
    <AnnouncementContainer>
      <MainTitle>{main}</MainTitle>
      <Caption>{caption ?? ""}</Caption>
    </AnnouncementContainer>
  );
}

export default Announcement;

const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MainTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const Caption = styled.p`
  color: #8b95a1;
  font-size: 9.5px;
`;
