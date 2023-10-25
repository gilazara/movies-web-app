import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

interface Props {
  count: number;
  onPageChange: (val: number) => void;
}

const Paginator = ({ count, onPageChange }: Props) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        onChange={(_, value) => onPageChange(value)}
      />
    </Stack>
  );
};

export default Paginator;
