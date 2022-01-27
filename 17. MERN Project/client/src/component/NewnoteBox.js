import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import PostAddIcon from '@material-ui/icons/PostAdd';
import { Link } from 'react-router-dom';

import { useStyles } from "../styles/NotesStyling";

function NewnoteBox() {
    const classes = useStyles();
    return (
        <Container maxWidth={'md'}>
         <Link to = "/new" style={{ textDecoration: 'none' }}>
            <Paper className={classes.newnote} elevation={2}  >
                Take a New note 
                <PostAddIcon  className={classes.icon} />
            </Paper>
          </Link>  
        </Container>
    )
}

export default NewnoteBox
