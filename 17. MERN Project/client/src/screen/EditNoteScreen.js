import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../redux/actions/notesAction";
//Styling
import { useStyles } from "../styles/NewnoteStyling";
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { useState } from "react";

function EditNewNote() {
  const history = useHistory();
  const { notes, error } = useSelector((state) => state.userNotes);
const {id}  = useParams();
console.log(id);

const [post, setPost] = useState({
  title: " ",
  body: " ",
});


  const classes = useStyles();
   //Redux  
  const dispatch = useDispatch();
  //Update Post
  const handelClickUpdate = (event) => {
    dispatch(updatePost(id, post, history));
    event.preventDefault();
  };
  //Delete Post
  const handleClickDelete = (event) => {
    dispatch(deletePost(id, history));
    event.preventDefault();
  };
  return (
    <div>
      <Paper elevation={1} className={classes.Paper}>
        <Typography variant="h4" align="center">
          {" "}
          Edit Note
        </Typography>
        <br />
        <TextField
          label="Note Title"
          id="margin-none"
          className={classes.textField}
          value={post.title}
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
        />

        <TextField
          placeholder="Write your Note here....."
          multiline
          rows={18}
          rowsMax={9}
          className={classes.textArea}
          variant="filled"
          value={post.body}
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
        />
        <br />

        <Button
          className={classes.btn}
          style={{ background: "rgb(38 98 137)", color: "#fff" }}
          onClick={handelClickUpdate}
        >
          Update
        </Button>

        <Button
          className={classes.btndelete}
          style={{ background: "#892626", color: "#fff" }}
          onClick={handleClickDelete}
        >
          Delete
        </Button>
      </Paper>
    </div>
  );
}

export default EditNewNote;
