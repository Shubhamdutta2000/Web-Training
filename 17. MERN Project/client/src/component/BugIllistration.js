import Home from "../assets/Bug.png";

import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function BugIllistration() {
  const classes = useStyles();
  return (
    <Container>
      <img src={Home} className={classes.root} />
    </Container>
  );
}

export default BugIllistration;
