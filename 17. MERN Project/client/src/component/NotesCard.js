import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
//MUI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//Redux
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/notesAction";
//styling
import { useStyles } from "../styles/NotesStyling";

function NotesCard({ notes, setCurrentId }) {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
// Push or Redirect to edit screen
  function Editpost() {
    history.push(`/edit/${notes._id}`);
  }
//For Random colour of the cards
  function randomColor() {
    let hex = Math.floor(Math.random() * 0x01171c);
    let color = "#" + hex.toString(18);
    return color;
  }
  const classes = useStyles();
  return (
    <>
        <Paper
          onClick={Editpost}
          className={classes.CardOne}
          elevation={3}
          style={{ backgroundColor: randomColor() }}
        >
          <Typography variant="h4" component="h1">
            {notes.title}
          </Typography>
          <Typography variant="body1">
            {notes.body}
          </Typography>
        </Paper>
    </>
  );
}

export default NotesCard;
