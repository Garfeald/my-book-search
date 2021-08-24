import { Chip, makeStyles } from "@material-ui/core";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import { IBooksStore, ITotalItams } from "../../redux/types";
import { BookCard } from "../Card";

const useStyles = makeStyles(() => ({
    root: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: '100px'
    },
    totalItems: {
        position: 'fixed',
        top: '120px',
        left: '10px',
        zIndex: 1000
    },
  }));

export const CardsList = ():ReactElement => {

    const { bookInfo } = useSelector<AppState, IBooksStore>(state => state.books)

    const { totalItems } = useSelector<AppState, ITotalItams>(state => state.totalItems)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {totalItems && <Chip
                label={`Total books found: ${totalItems}`}
                color="primary"
                className={classes.totalItems}
            />}
            {bookInfo && bookInfo.map(book => 
                <BookCard
                    key={book.id}
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
                    title={book.volumeInfo.title ? book.volumeInfo.title : ''}
                    categories={book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}
                    authors={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}
                    id={`${book.id}, ${book.volumeInfo.title}`}
                />
            )}
        </div>
    )
}