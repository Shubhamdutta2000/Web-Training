import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions/notesAction";

import { useStyles } from "../styles/NewnoteStyling";

function NewNote() {
  const classes = useStyles();
  const history = useHistory();

  const [postTitle, setpostTitle] = useState();
  const [postDesc, setpostDesc] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postTitle, postDesc, history));
  };

  return (
    <div>
      <Paper elevation={1} className={classes.Paper}>
        <Typography variant="h4" align="center">
          {" "}
          New Note
        </Typography>
        <br />
        <TextField
          label="Note Title"
          id="margin-none"
          className={classes.textField}
          //value={postTitle}
          onChange={(e) => setpostTitle(e.target.value)}
        />

        <TextField
          placeholder="Write your Note here....."
          multiline
          rows={18}
          rowsMax={9}
          className={classes.textArea}
          variant="filled"
          value={postDesc}
          onChange={(e) => setpostDesc(e.target.value)}
        />
        <br />

        <Button
          className={classes.btn}
          style={{ background: "rgb(38 98 137)", color: "#fff" }}
          onClick={handleSubmit}
        >
          Post
        </Button>
      </Paper>
    </div>
  );
}

export default NewNote;
