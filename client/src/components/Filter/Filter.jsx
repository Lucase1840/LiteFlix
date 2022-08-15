import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import React from 'react';
import { ReactComponent as FilterArrow } from "../../images/filterarrow.svg"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Tick } from "../../images/tick.svg"
import { moviesSelected } from '../../redux/actions';

export default function Filter() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [option, setOption] = React.useState("populares");
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if (e.target.innerText === "") return setAnchorEl(null)
        dispatch(moviesSelected(e.target.innerText))
        setAnchorEl(null);
        setOption(e.target.innerText)
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "flex-end", mr: { xs: 0, lg: 12 } }}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Box sx={{ display: "flex", }}>
                    <Typography variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "20px",
                        letterSpacing: "4px",
                        color: "white"
                    }}>
                        {`ver:\xa0`}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h1" component="div" sx={{
                            fontFamily: "BebasNeue-Regular",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "20px",
                            lineHeight: "20px",
                            letterSpacing: "4px",
                            color: "white"
                        }}>
                            {`${option ? option : "mis peliculas"}\xa0`}
                        </Typography>
                        <FilterArrow />
                    </Box>
                </Box>
            </Button>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1,
                        backgroundColor: "#242424",
                        width: { xs: "375px", lg: "241px" },
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                            backgroundColor: "#242424"
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                            backgroundColor: "#242424"
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "16px",
                    letterSpacing: "4px",
                    color: "white",
                }}
                    onClick={handleClose}>
                    {option === "populares" ? <>{`populares\xa0`}<Tick /></> : "populares"}
                </MenuItem>
                <MenuItem sx={{
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "16px",
                    letterSpacing: "4px",
                    color: "white",
                }}
                    onClick={handleClose}>
                    {option === "mis peliculas" ? <>{`mis peliculas\xa0`}<Tick /></> : "mis peliculas"}
                </MenuItem>
            </Menu>
        </Box >
    )
};