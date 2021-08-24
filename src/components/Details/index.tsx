import React, {ReactElement, useEffect} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/reducers/rootReducer";
import {IBookDetails} from "../../redux/types";
import {fetchBookById} from "../../redux/actions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '800px'
        },
        blockCard: {
            maxWidth: '600px',
            maxHeight: '750px'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        description: {
            overflowY: 'auto',
            maxHeight: '250px'
        }
    }),
);

export const BookDetails = ():ReactElement => {

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const dispatch = useDispatch()

    const searchId = window.location.href.split(':').pop()

    const { bookDetails, isLoading } = useSelector<AppState, IBookDetails>(state => state.bookDetails)

    useEffect(() => {
        searchId && dispatch(fetchBookById(searchId))
    }, [])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classes.root}>
            {(bookDetails && !isLoading) && bookDetails.map(book => (
                <Card className={classes.blockCard}>
                    <CardHeader
                        title={book.volumeInfo.title}
                        subheader={book.volumeInfo.categories ? `Categories: ${book.volumeInfo.categories.toString()}` : ''}
                    />
                    <CardMedia
                        className={classes.media}
                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
                    />
                    <CardHeader
                        subheader={book.volumeInfo.authors ? `Authors: ${book.volumeInfo.authors}` : ''}
                    />
                    <CardContent>
                        <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p"
                        className={classes.description}
                        >
                            {book.volumeInfo.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}