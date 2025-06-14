import { Container, Grid } from "@mui/material";
import Hightlights from "../../Components/Highlights";

const HighlightsPage = () => {
  return (
    <>
      <Grid

        id="Highlights"
        sx={{
          marginTop: 5,
          marginBottom: 5,

        }}
      >
        <Hightlights />
      </Grid>
    </>
  );
};

export default HighlightsPage;
