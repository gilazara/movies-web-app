import Search from "../Search";
import { Layout, GenresList } from "./styles";
import { Box, Typography } from "@mui/material";
import { colorRandomizer } from "src/utils/helpers";

interface MainLayoutProps {
  genres: { id: number; name: string }[];
}

const MainLayout = ({ genres }: MainLayoutProps) => {
  return (
    <Layout>
      <Box className="menu">
        <Typography variant="h2">
          Keep list of movies & TV series you are watching
        </Typography>
        <Search />
      </Box>
      <GenresList>
        {genres.map((genre) => {
          const randomColor = colorRandomizer();
          return (
            <Box
              padding={1}
              key={genre.id}
              borderRadius="8px"
              border={`1px solid ${randomColor}`}
            >
              <Typography variant="caption" color="#fff">
                {genre.name}
              </Typography>
            </Box>
          );
        })}
      </GenresList>
    </Layout>
  );
};

export default MainLayout;
