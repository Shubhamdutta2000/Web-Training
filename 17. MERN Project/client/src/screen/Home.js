import NewnoteBox from "../component/NewnoteBox";
import NotesCard from "../component/NotesCard";
import Grid from "@material-ui/core/Grid";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/notesAction";
import { useEffect } from "react";
import { Container } from "@material-ui/core";

function Home() {
  const { notes, error } = useSelector((state) => state.userNotes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

   return (
    <>
      <NewnoteBox />
      <Container>
        <Grid container spacing={3}>
          {notes &&
            notes.map((id) => (
              <Grid  key={id}  item xs={12} md={4} lg={4}>
                <NotesCard  notes={id} />
              </Grid>
            ))}
          ;
        </Grid>
      </Container>
    </>
  );
}

export default Home;
