import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
      background: "#fff",
      width: "100%",
      boxShadow: "none"
    },
    height:{
        height: '4rem',
        background: '#fff',
        marginTop: '-0.5rem',
        boxShadow: "none"
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
      margin : '2rem 0.5rem',
    },
    navItems: {
        color: '#4D7178',
        flexGrow: 0.1,
       fontWeight:600,
       fontSize: '1rem',
    },
    mobilenavItems: {
      color: '#4D7178',
      flexGrow: 0,
     fontWeight:600,
     fontSize: '1rem',
     padding: '1.2rem 0'
  },
  exit:{
    color: '#4D7178',
  },
    auth:{
        borderRadius: '2.6rem',
        background: 'rgb(38 98 137)',
        padding: '0.4rem 1.5rem 0.4rem 0.8rem',
        color: '#fff',
        boxShadow: '0 1px 3px 1px #d0f7ff',
        '&:hover': {
          background: '#203e72',
          color: '#fff',
        }
    },
    list: {
      width: 210,
    },
    fullList: {
      width: 'auto',
    },
  }),
);