import React from "react";
import { Box, Grid, Link, Container, Typography } from "@mui/material";
import { FacebookOutlined, Instagram } from "@material-ui/icons";

const Copyright = () => {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://processorapido.com/">
        Processo Rápido
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
};

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "lightcyan",
  mr: 1,
  "&:hover": {
    bgcolor: "darkgray",
  },
};

const FooterSystem = () => {
  return (
    <Typography
      component="footer"
      sx={{
        display: "flex",
        bgcolor: "lightcyan",
      }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component="a"
                  href="https://www.facebook.com/processorapido"
                  sx={iconStyle}
                >
                  <FacebookOutlined />
                </Box>
                <Box
                  component="a"
                  href="https://www.instagram.com/processorapido/"
                  sx={iconStyle}
                >
                  <Instagram />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Termos
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Uso</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Privacidade</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default FooterSystem;
