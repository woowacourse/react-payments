import { Button } from '../../../style/addForm';

function SubmitButton({ label, width, height, hidden }) {
  return (
    <Button type="submit" width={width} height={height} hidden={hidden}>
      {label}
    </Button>
  );
}

export default SubmitButton;
