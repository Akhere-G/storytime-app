import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import storytimeLogo from "./images/storytimeLogo.png";
import { Form, Posts } from "./components";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Storytime
        </Typography>
        <img
          className={classes.image}
          src={storytimeLogo}
          alt='storytime'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
