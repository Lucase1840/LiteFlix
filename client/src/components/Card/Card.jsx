import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ReactComponent as PlayButton } from "../../images/playbutton.svg"
import { ReactComponent as Star } from "../../images/star.svg"
import { ReactComponent as PlayButtonLittle } from "../../images/playbuttonlittle.svg"

import { initializeConnect } from 'react-redux/es/components/connect';

export default function Card({ title, votes, year, image }) {
    console.log(`https://image.tmdb.org/t/p/w300${image}`)

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    console.log(isHovering)
    return (
        <>
            {isHovering ?
                (<CardContent sx={[{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w780${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    p: 0,
                    pb: "0px !important",
                    maxWidth: 220,
                    minHeight: 146,
                    color: "white",
                    mb: 1,
                    position: "relative",
                    borderRadius: 1



                }, {
                    //     "&:hover": {
                    //         backgroundColor: "red"
                    //     }
                }
                ]}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    <Box sx={{
                        position: "absolute",
                        bottom: 0,
                        width: 220,
                        height: 146,
                        background: "rgba(36, 36, 36, 0.7)",
                        borderRadius: 1
                    }}>
                    </Box>
                    <Box sx={{
                        maxWidth: 220,
                        minHeight: 146,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        ml: 1
                    }}>
                        <Box sx={{ display: "flex", position: "relative", justifyContent: "center", alignItems: "flex-start", }}>
                            <PlayButtonLittle />
                            <Typography variant="h1" component="div" sx={{
                                maxWidth: "85%",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontFamily: "BebasNeue-Regular",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "16px",
                                letterSpacing: "4px",
                                position: "relative",
                                left: "10px",
                                textAlign: "left"
                            }}>
                                {title}
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-around", position: "relative", minWidth: "90%", mb: 2, mt: 2 }}>
                            <Typography variant="body2" sx={{
                                mr: 12,
                                fontFamily: "BebasNeue-Regular",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                letterSpacing: "4px"
                            }}>
                                <Star />
                                {` ${votes}`}
                            </Typography>
                            <Typography variant="body2" sx={{
                                fontFamily: "BebasNeue-Regular",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                letterSpacing: "4px"
                            }}>
                                {year.slice(0, 4)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent >) :
                (
                    <CardContent sx={[{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w780${image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        p: 0,
                        pb: "0px !important",
                        maxWidth: 220,
                        minHeight: 146,
                        color: "white",
                        mb: 1,
                        position: "relative",
                        borderRadius: 1
                    }, {
                        //     "&:hover": {
                        //         backgroundColor: "red"
                        //     }
                    }
                    ]}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        <Box sx={{
                            position: "absolute",
                            bottom: 0,
                            width: 220,
                            height: 146,
                            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%)",
                            borderRadius: 1
                            // {
                            //     "&:hover": {
                            //         width: 220,
                            //         height: 146,
                            //         backgroundColor: "rgba(36, 36, 36, 0.7)",
                            //         position: "absolute",
                            //     }
                        }}>
                        </Box>
                        <Box sx={{
                            maxWidth: 220,
                            minHeight: 146,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end"
                        }}>
                            <Box sx={{ position: "relative", maxHeight: 94 }}>
                                <PlayButton />
                                <Typography variant="h1" component="div" sx={{
                                    px: 1,
                                    maxWidth: 220,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontFamily: "BebasNeue-Regular",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "18px",
                                    letterSpacing: "4px",
                                    mt: 1,
                                    mb: 2,
                                }}>
                                    {title}
                                </Typography>
                            </Box>

                            <Box sx={{ display: "none", justifyContent: "space-around" }}>
                                <Typography variant="body2">

                                    {votes}
                                </Typography>
                                <Typography variant="body2">
                                    {year}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent >
                )
            }
        </>
    );
}
