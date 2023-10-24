import { Grid } from "@mui/material";
import Link from "src/components/common/Link";
import movieDb from "src/assets/images/movieDb.png";

const Header = () => {
  return (
    <Grid sx={{ background: "#fff" }} py={3} px={12}>
      <Link to="/">
        <img
          alt="movieDb"
          src={movieDb}
          style={{ width: "180px", height: "60px", borderRadius: "6px" }}
        />
      </Link>
    </Grid>
  );
};

export default Header;
