import { Grid } from "@mui/material";
import palette from "src/theme/palette";
import Link from "src/components/common/Link";
import movieDb from "src/assets/images/movieDb.png";

const Header = () => {
  return (
    <Grid sx={{ background: palette.primary.main }} py={3} px={12}>
      <Link to="/">
        <img
          src={movieDb}
          alt="movieDb-logo"
          style={{ width: "180px", height: "60px", borderRadius: "6px" }}
        />
      </Link>
    </Grid>
  );
};

export default Header;
