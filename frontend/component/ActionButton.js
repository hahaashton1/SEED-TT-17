import Button from "@mui/material/Button";
export default function ActionButton(props) {
  const { text, onClick, colour, disabled } = props;
  return (
    <Button onClick={onClick} variant="text" disabled={disabled}>
      {text}
    </Button>
  );
}
