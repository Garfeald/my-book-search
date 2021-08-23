import { makeStyles } from "@material-ui/core";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import { IBooksStore } from "../../redux/types";
import { BookCard } from "../Card";

const useStyles = makeStyles(() => ({
    root: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: '100px'
    },
  }));

export const CardsList = ():ReactElement => {

    const { bookInfo } = useSelector<AppState, IBooksStore>(state => state.books)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {bookInfo && bookInfo.map(book => 
                <BookCard
                    key={book.id}
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
                    title={book.volumeInfo.title ? book.volumeInfo.title : ''}
                    categories={book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}
                    authors={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}
                />
            )}
        </div>
    )
}