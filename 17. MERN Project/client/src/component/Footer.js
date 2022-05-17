//For adding multiple class in a component
import clsx from 'clsx';

//MUI components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

//Styling
import { useStyles } from '../styles/FooterStyling';

function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footer}>
        <Grid container spacing={1}>

          {/*Column-1 logo column */}
          <Grid item spacing={1} md={6} lg={4} xs={10}>
            <Typography variant="h4" className={classes.title}>
              Note Taking App
            </Typography>
            <Grid container className={classes.top}> {/*Grid for store icons*/}
            </Grid>
          </Grid>

          {/*Column-2 Company column */}
          <Grid item spacing={6} md={6} lg={4} xs={6}>
            <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
              <Typography className={clsx(classes.list, classes.top)}>
                About Note Taking App
              </Typography>
            </ Link>
            <Link to="/ContactUs" style={{ textDecoration: 'none' }}>
              <Typography className={clsx(classes.list, classes.top)}>
                Contact Us
              </Typography>
            </ Link>
          </Grid>

          {/*Column-3 Company column */}
          <Grid item spacing={6} md={6} lg={4} xs={4}>
            <Link to="/FeatureRequest" style={{ textDecoration: 'none' }}><Typography className={clsx(classes.list, classes.top)}> Feature Request </Typography></ Link>
            <Link to="/Bug" style={{ textDecoration: 'none' }}><Typography className={clsx(classes.list, classes.top)}> Report a Bug </Typography></ Link>
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Footer;