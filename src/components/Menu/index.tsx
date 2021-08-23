import React, {ChangeEvent, useState} from 'react';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Button} from "@material-ui/core";
import {api} from "../../services/api/api";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooksAsync} from "../../redux/actions";
import {AppState} from "../../redux/reducers/rootReducer";
import {IBooksStore} from "../../redux/types";
import './index.scss';
import Pagination from '@material-ui/lab/Pagination';
import { CardsList } from '../CardsList';

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
        pagination: {
            '& > *': {
                marginTop: theme.spacing(2),
              },
        }
    }),
);

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState<string>()

    const dispatch = useDispatch()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        setInputValue(value)
    }

    const onFetchBooks = async () => {
        inputValue && dispatch(fetchBooksAsync(inputValue))
        setInputValue('')
    }

    const base = 'Menu'

    return (
        <>
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
                            value={inputValue || ''}
                        />
                    </div>
                    <Button
                        variant="contained"
                        onClick={onFetchBooks}
                    >
                        Search
                    </Button>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
            </div>
            <div className={classes.pagination}>
                <Pagination count={10} color="primary" />
            </div>
        </>
    );
}