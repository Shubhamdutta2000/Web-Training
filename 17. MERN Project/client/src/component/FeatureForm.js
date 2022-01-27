import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useStyles } from "../styles/NewnoteStyling";
import { Container } from "@material-ui/core";

function BugForm() {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={0} >
          <Container>
                      <br />
        <TextField
          label="Name"
          id="margin-none"
          className={classes.textField}
        />
        <br />
        <TextField
          label="Email"
          id="margin-none"
          className={classes.textField}
        />
    <br /> <br />
        <TextField
          placeholder="Feature Requested....."
          multiline
          rows={18}
          rowsMax={12}
          variant="filled"
          className={classes.textField}
        />
        <br />

        <Button
          
          style={{ background: "rgb(38 98 137)", color: "#fff" }}
        >
          Submit
        </Button>
        </Container>
      </Paper>
    </div>
  );
}

export default BugForm;
