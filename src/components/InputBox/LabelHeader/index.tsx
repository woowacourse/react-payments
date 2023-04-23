import * as styled from './LabelHeader.styled';

const LabelHeader = (props: any) => {
  return (
    <styled.LabelHeader>
      <styled.LabelTitle>{props.title}</styled.LabelTitle>
      {props.required && <styled.RequiredIcon>*</styled.RequiredIcon>}
    </styled.LabelHeader>
  );
};

export default LabelHeader;
