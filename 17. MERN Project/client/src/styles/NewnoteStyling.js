import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    Paper : {
        backgroundColor: 'rgb(247 247 247)',
        padding: '0.5rem 2rem',
        textAlign: 'center',
        borderRadius: '1rem',
        margin: '0.5rem 0',
    },

    textField:{
        width: '80%',
    },
    textArea:{
        width: '80%',
        marginTop: "0.5rem",
        border: "none",
        background: "#fff"
    },
    btn: {
        padding: '0.5rem 1rem',
        marginLeft: '-60%',
        borderRadius: ' 1rem ',
        background: 'rgb(38 98 137)',
        marginTop: '3rem'
      },
      btndelete: {
        padding: '0.5rem 1rem',
        borderRadius: ' 1rem ',
        background: 'red',
        marginTop: '3rem',
        marginLeft: "1rem"
      },
    grid: {
        marginTop: '1rem',
    },  

}));