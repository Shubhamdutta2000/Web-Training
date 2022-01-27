import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    CardOne:{
        height: '9rem',
        margin: '2rem 0',
        borderRadius: '0 2rem',
        color:'black',
        padding: "1rem",
        background: "#d0f7ff"
    },

    newnote:{
        width: "63%",
        padding: "0.9rem 3rem",
        borderRadius: "0.3rem", 
        margin: "1rem",
        fontWeight: "690",
        color: '#8b8888'
    },

    icon:{
        color: "#8b8888",
        float: 'right'
    }
    
}));