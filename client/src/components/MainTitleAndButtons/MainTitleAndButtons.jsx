import React from 'react';

import { ReactComponent as AddIcon } from "../../images/addicon.svg";
import { ReactComponent as PlayIcon } from "../../images/playicon.svg";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function MainTitleAndButtons({ movieTitle }) {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: { xs: "312px", lg: "100%" }
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", lg: "flex-start" },
                maxWidth: { xs: "312px", lg: "100%" },
                mt: { xs: 10 }
            }}>
                <Box sx={{
                    display: "flex",
                    mb: { lg: "24px" }
                }}>
                    <Typography variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: { xs: "20px", lg: "24px" },
                        letterSpacing: "4px",
                        color: "white"
                    }}>
                        {`original de\xa0`}
                    </Typography>
                    <Typography variant="h1" component="div" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: { xs: 400, lg: 700 },
                        fontSize: "20px",
                        lineHeight: "20px",
                        letterSpacing: "4px",
                        color: "white"
                    }}>
                        liteflix
                    </Typography>
                </Box>
                <Typography variant="h1" component="div" sx={{
                    minWidth: { xs: "312px", lg: "950px" },
                    maxWidth: { xs: "312px", lg: "950px" },
                    maxHeight: "400px",
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: { xs: "76px", lg: "120px" },
                    lineHeight: { xs: "78px", lg: "100px" },
                    letterSpacing: { xs: "10px", lg: "16px" },
                    color: "#64EEBC",
                    textAlign: { xs: "center", lg: "left" },
                    mb: { xs: '15px', lg: "32px" },
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {movieTitle}
                </Typography>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: "center",
                mb: { xs: 5, lg: 14 }
            }}>
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
                    mr: { xs: 0, lg: "24px" },
                    mb: { xs: 1, lg: 0 }
                }, {
                    "&:hover": {
                        backgroundColor: "#343434",
                        boxShadow: 0
                    }
                }]}>
                    <PlayIcon />{`\xa0reproducir`}
                </Button>
                <Button variant="contained" sx={[{
                    width: "248px",
                    height: "56px",
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "4px",
                    backgroundColor: { xs: "#242424", lg: "rgba(36, 36, 36, 0.5)" },
                    borderRadius: "0px",
                    boxShadow: 0
                }, {
                    "&:hover": {
                        backgroundColor: { xs: "#242424", lg: "rgba(36, 36, 36, 0.6)" },
                        boxShadow: 0
                    }
                }]}>
                    <AddIcon />{`\xa0mi lista`}
                </Button>
            </Box>
        </Box >
    )
};