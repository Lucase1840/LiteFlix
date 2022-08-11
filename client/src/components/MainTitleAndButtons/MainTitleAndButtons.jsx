import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React from 'react';
import { ReactComponent as AddIcon } from "../../images/addicon.svg"
import { ReactComponent as PlayIcon } from "../../images/playicon.svg"
export default function MainTitleAndButtons({ movieTitle }) {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", }} >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", }}>
                <Box sx={{ display: "flex", mb: "24px" }}>
                    <Typography variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "20px",
                        letterSpacing: "4px",
                        color: "white"
                    }}>
                        {`original de\xa0`}
                    </Typography>
                    <Typography variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "20px",
                        letterSpacing: "4px",
                        color: "white"
                    }}>
                        liteflix
                    </Typography>
                </Box>
                <Typography variant="h1" component="div" sx={{
                    minWidth: "950px",
                    maxWidth: "950px",
                    maxHeight: "400px",
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "120px",
                    lineHeight: "100px",
                    letterSpacing: "16px",
                    color: "#64EEBC",
                    textAlign: "left",
                    mb: "32px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {movieTitle}
                </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 14 }}>
                <Button variant="contained" sx={[{
                    width: "248px",
                    height: "56px",
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "4px",
                    backgroundColor: "#242424",
                    borderRadius: "0px",
                    boxShadow: 0,
                    mr: "24px"
                }, {
                    "&:hover": {
                        backgroundColor: "#343434",
                        boxShadow: 0
                    }
                }]}><PlayIcon />{`\xa0reproducir`}</Button>
                <Button variant="contained" sx={[{
                    width: "248px",
                    height: "56px",
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "4px",
                    backgroundColor: "rgba(36, 36, 36, 0.5)",
                    borderRadius: "0px",
                    boxShadow: 0
                }, {
                    "&:hover": {
                        backgroundColor: "rgba(36, 36, 36, 0.6)",
                        boxShadow: 0
                    }
                }]}> <AddIcon />{`\xa0mi lista`}</Button>
            </Box>
        </Box >
    )
};