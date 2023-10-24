import { Grid, Typography } from "@mui/material";

interface Props {
  type: string;
  children: React.ReactNode;
}

const SliderWrapper = ({ children, type }: Props) => {
  return (
    <Grid px={12} py={6}>
      <Typography variant="h4" mb={4}>
        {type}
      </Typography>
      {children}
    </Grid>
  );
};

export default SliderWrapper;
