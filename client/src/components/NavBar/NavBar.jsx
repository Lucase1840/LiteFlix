import Typography from '@mui/material/Typography';
import { ReactComponent as AddIcon } from "../../images/addicon.svg"
import { ReactComponent as MenuIcon } from "../../images/menuicon.svg"
import { ReactComponent as NotificationIcon } from "../../images/notificationicon.svg"
import { ReactComponent as ProfileIcon } from "../../images/profileicon.svg"
import Box from '@mui/material/Box';
import React from 'react';

export default function NavBar({ handleOpen }) {

    return (
        <Box sx={{ display: "flex", minHeight: "50px", justifyContent: "space-between", }} >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h1" component="div" sx={{
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "34px",
                    lineHeight: "34px",
                    letterSpacing: "4px",
                    color: "#64EEBC"
                }}>
                    lite
                </Typography>
                <Typography variant="h1" component="div" sx={{
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 200,
                    fontSize: "34px",
                    lineHeight: "34px",
                    letterSpacing: "4px",
                    color: "#64EEBC",
                    mr: "64px"
                }}>
                    flix
                </Typography>

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
                </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", minWidth: "175px", justifyContent: "space-around" }}>
                <MenuIcon></MenuIcon>
                <NotificationIcon></NotificationIcon>
                <ProfileIcon></ProfileIcon>
            </Box>
        </Box>
    )
};