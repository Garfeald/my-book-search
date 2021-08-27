import React, {ChangeEvent, useEffect, useState} from 'react';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooksAsync, fetchTotalItemsAsync} from "../../redux/actions";
import {AppState} from "../../redux/reducers/rootReducer";
import {FetchBooksPayload, IBooksStore, ITotalItams} from "../../redux/types";
import './index.scss';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
        },
        title: {
            fontFamily: 'Abril Fatface, cursiv',
            fontSize: '33px',
            display: 'none',
            color: '#724fff',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        toolBar: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100px'
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '50ch',
            },
        },
        searchButton: {
            backgroundColor: '#5226ff'
        },
        pagination: {
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: 1000,
            height: '40px',
            background: 'rgba(0, 40, 238, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),
);

export default function PrimarySearchAppBar() {

    const classes = useStyles();

    const [inputValue, setInputValue] = useState<string>()

    const { totalItems } = useSelector<AppState, ITotalItams>(state => state.totalItems)

    const { searchValue } = useSelector<AppState, IBooksStore>(state => state.books)

    const [pageCount, setPageCount] = useState<number>()

    const [pageNumber, setPageNumber] = useState<number>(1)

    const [fetchValue, setFetchValue] = useState<FetchBooksPayload>()

    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        totalItems && setPageCount(Math.floor((totalItems / 16)))
    }, [totalItems])

    const dispatch = useDispatch()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        setInputValue(value)
    }

    useEffect(() => {
        pageNumber && inputValue && setFetchValue({
            searchValue: inputValue,
            pageNumber: pageNumber
        })
    }, [inputValue, pageNumber])

    const onFetchBooks = () => {
        fetchValue && dispatch(fetchBooksAsync(fetchValue))
        fetchValue && dispatch(fetchTotalItemsAsync(fetchValue))
    }

    const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(e.key === 'Enter' && inputValue) {
            fetchValue && dispatch(fetchBooksAsync(fetchValue))
            fetchValue && dispatch(fetchTotalItemsAsync(fetchValue))
        }
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (value !== currentPage && value > currentPage && pageCount && value < pageCount) {
            setCurrentPage(value)
            setPageNumber(pageNumber + 16);
            fetchValue ? dispatch(fetchBooksAsync(fetchValue)) : searchValue && dispatch(fetchBooksAsync({searchValue: searchValue.searchValue, pageNumber: pageNumber}))
        }
        if (value !== currentPage && value < currentPage && pageCount && value < pageCount) {
            setCurrentPage(value)
            setPageNumber(pageNumber - 16);
            fetchValue ? dispatch(fetchBooksAsync(fetchValue)) : searchValue && dispatch(fetchBooksAsync({searchValue: searchValue.searchValue, pageNumber: pageNumber}))
        }
      };

    const base = 'Menu'

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.toolBar}>
                <Toolbar className={`${base}__tool-bar`}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Search for books
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            name="search"
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={(e) => onChangeInput(e)}
                            onKeyDown={(e) => onInputKeyDown(e)}
                            value={inputValue || ''}
                        />
                    </div>
                    <Button
                        variant="contained"
                        onClick={onFetchBooks}
                        className={classes.searchButton}
                    >
                        Search
                    </Button>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
            {pageCount && pageCount > 16 
            && <div className={classes.pagination}>
                <Pagination 
                count={pageCount} 
                color="primary"
                onChange={handlePageChange}
                page={currentPage}
                />
                </div>}
        </div>
    );
}