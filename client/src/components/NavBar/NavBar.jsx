import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ReactComponent as AddIcon } from "../../images/addicon.svg";
import { ReactComponent as MenuIcon } from "../../images/menuicon.svg";
import { ReactComponent as NotificationIcon } from "../../images/notificationicon.svg";
import { ReactComponent as ProfileIcon } from "../../images/profileicon.svg";
import { ReactComponent as AddMovieMobile } from "../../images/addmoviemobile.svg";

export default function NavBar({ handleOpen, onModal }) {

    const isMobileScreen = useMediaQuery('(max-width:375px)');

    return (
        <Box sx={{
            display: "flex",
            minHeight: "50px",
            justifyContent: "space-between",
        }} >
            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: 'row-reverse', lg: 'row' },
                mt: { xs: 2, lg: 0 },
                ml: { xs: 2, lg: 0 },
                justifyContent: "center"
            }}>
                <Box sx={{ display: "flex", }}>
                    <Typography variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: { xs: "28px", lg: "34px" },
                        lineHeight: { xs: "28px", lg: "34px" },
                        letterSpacing: "4px",
                        color: "#64EEBC",
                        ml: { xs: 10, lg: 2 }
                    }}>
                        lite
                    </Typography>
                    <Typography variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 200,
                        fontSize: { xs: "28px", lg: "34px" },
                        lineHeight: { xs: "28px", lg: "34px" },
                        letterSpacing: "4px",
                        color: "#64EEBC",
                        mr: "64px"
                    }}>
                        flix
                    </Typography>
                </Box>

                {isMobileScreen ?
                    <Box sx={{ minHeigth: "56px" }} onClick={handleOpen}>{!onModal ? <AddMovieMobile /> : ''}</Box>
                    :
                    <Typography onClick={handleOpen} variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "18 px",
                        letterSpacing: "4px",
                        color: "white",
                        cursor: "pointer"
                    }}>
                        <AddIcon></AddIcon>
                        {`\xa0agregar pelicula`}
                    </Typography>}
            </Box>

            <Box sx={{
                display: "flex",
                alignItems: "center",
                minWidth: { xs: "30px", lg: "175px" },
                justifyContent: "space-around",
                mr: { xs: 2, lg: 0 },
                mt: { xs: 2, lg: 0 }
            }}>
                {isMobileScreen ? '' : <MenuIcon></MenuIcon>}
                {isMobileScreen ? '' : <NotificationIcon></NotificationIcon>}
                <ProfileIcon></ProfileIcon>
            </Box>
        </Box >
    )
};