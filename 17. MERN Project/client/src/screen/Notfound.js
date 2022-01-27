import NotFoundIllistration from "../component/NotFoundIllistration";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <Grid container component="main" >
        <Grid item md={6}>
          <NotFoundIllistration />
        </Grid>
        <Grid item md={6}>
            <br /><br />
          <Typography variant="h1">404 !</Typography>
          <Typography variant="h3">
            Seems Like You are Lost.....
          </Typography>

          <Link to="/">
            <Button>Home Page</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Notfound;
