import { Container, Grid, Typography } from "@material-ui/core";

import BugIllistration from '../component/BugIllistration';
import BugForm from '../component/BugForm';

function Bug() {
    return (
        <Container>
            <Typography variant='h3'>Report Your Bug</Typography>
            <Grid container component="main" >
            <Grid item md={5}>
                <BugIllistration />
            </Grid>
            <Grid item md={7}>
                <BugForm />
            </Grid>
          </Grid>  

        </Container>
    )
}

export default Bug;
