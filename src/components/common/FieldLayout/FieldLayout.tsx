import styled from "@emotion/styled";
import type { PropsWithChildren, ReactNode } from "react";

interface FieldLayoutProps extends PropsWithChildren {
  titleComponent: ReactNode;
  captionComponent?: ReactNode;
  helperMessageComponent?: ReactNode;
}

const FieldLayout = ({
  titleComponent,
  captionComponent,
  children,
  helperMessageComponent,
}: FieldLayoutProps) => {
  return (
    <Container>
      <TitleWrapper>{titleComponent}</TitleWrapper>
      {captionComponent && <CaptionWrapper>{captionComponent}</CaptionWrapper>}
      {children && <ContentWrapper>{children}</ContentWrapper>}
      {helperMessageComponent && (
        <HelperMessage>{helperMessageComponent}</HelperMessage>
      )}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
`;

const TitleWrapper = styled.div``;

const CaptionWrapper = styled.div`
  margin-top: 0.25rem;
`;

const ContentWrapper = styled.div`
  margin-block: 1rem;
`;

const HelperMessage = styled.div``;

export default FieldLayout;
