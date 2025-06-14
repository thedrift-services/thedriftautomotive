import { Grid } from "@mui/material";
import HeaderAppBar from "../../Common/HeaderNavbar";
import ServicesPage from "../../Layouts/ServicesPage";
import Background from "../../Assets/Images/carbonfibre.jpg";
import FooterBar from "../../Common/FooterBar";
import ContactUsPage from "../../Layouts/ContactUsPage";
import HighlightsPage from "../../Layouts/HighlightsPage";
import Values from "../../Layouts/Values";
import theme from "../../theme";

const MainPage = () => {
  const bodyStyle = {
    background: 'black',
    // backgroundImage: `url(${Background})`,
    backgroundSize: "250px 250px",
    margin: 0,
  };
  return (
    <>
      <Grid container sx={bodyStyle} maxWidth={"false"}>
        <HeaderAppBar />
        <HighlightsPage />
        <ServicesPage />
        <Values />
        <ContactUsPage />
        <FooterBar />
      </Grid>
    </>
  );
};

export default MainPage;
