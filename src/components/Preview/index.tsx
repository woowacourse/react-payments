import styled from '@emotion/styled';

const Preview: React.FC = () => {
  return (
    <PreviewContainer>
      <CardFrame>
        <ICChip></ICChip>
      </CardFrame>
    </PreviewContainer>
  );
};

export default Preview;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 34px 0 45px;
`;

const CardFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: #333333;
  box-shadow: 3px 3px 5px 0px #00000040;
  position: relative;
`;

const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background-color: #ddcd78;
  border-radius: 3px;
  position: absolute;
  top: 8px;
  left: 12px;
`;
