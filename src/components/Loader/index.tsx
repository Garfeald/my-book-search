import {ReactElement} from "react";
import {CircularProgress, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: 1000
    },
    totalItems: {
        position: 'fixed',
        top: '120px',
        left: '10px',
        zIndex: 1000
    },
}));

export const Loader = ():ReactElement => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CircularProgress size={130}/>
        </div>
    )
}