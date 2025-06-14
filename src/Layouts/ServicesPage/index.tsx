import { Box, Container, Typography } from "@mui/material";
import Services from "../../Components/Services";
import theme from "../../theme";

const ServicesPage = () => {
  const containerStyle = {
    marginBottom: 4,
  };

  const typographyStyle = {
    color: theme.palette.secondary.main,
    fontWeight: 900,
    marginTop: 3,
  };
  return (
    <>
      <Container maxWidth="lg" sx={containerStyle} id="Services">
        <Typography variant="h3" sx={typographyStyle}>
          Services
        </Typography>
        <Services />
      </Container>
    </>
  );
};

export default ServicesPage;
