import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ReactComponent as PlayButton } from "../../images/playbutton.svg"
import { ReactComponent as Star } from "../../images/star.svg"
import { ReactComponent as PlayButtonLittle } from "../../images/playbuttonlittle.svg"
import { ReactComponent as PlayButtonMobile } from "../../images/playbuttonmobile.svg"
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Card({ title, votes, year, image }) {
    const [isHovering, setIsHovering] = useState(false);
    const screenWidth = useMediaQuery('(max-width:375px)');
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const handleClick = () => {
        if (isHovering) return setIsHovering(false);
        return setIsHovering(true)
    };


    let imageUrl;

    !image.includes("https:") ? imageUrl = `https://image.tmdb.org/t/p/w780${image}` : imageUrl = image

    return (
        <>
            {isHovering ?
                (<CardContent sx={[{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    p: 0,
                    pb: "0px !important",
                    maxWidth: { xs: 350, lg: 220 },
                    minWidth: { xs: 350, lg: 220 },
                    minHeight: { xs: 194, lg: 146 },
                    maxHeight: { xs: 194, lg: 146 },
                    color: "white",
                    position: "relative",
                    borderRadius: 1,
                    mb: { xs: "30px", lg: "20px" },
                    cursor: "pointer",
                    "&:last-child": {
                        mb: "0"
                    }
                }
                ]}
                    onMouseOver={screenWidth ? null : handleMouseOver}
                    onMouseOut={screenWidth ? null : handleMouseOut}
                    onClick={!screenWidth ? null : handleClick}>
                    <Box sx={{
                        position: "absolute",
                        bottom: 0,
                        width: { xs: 350, lg: 220 },
                        height: { xs: 194, lg: 146 },
                        background: "rgba(36, 36, 36, 0.7)",
                        borderRadius: 1
                    }}>
                    </Box>
                    <Box sx={{
                        maxWidth: { xs: 320, lg: 220 },
                        minHeight: 146,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex- start",
                        ml: { xs: 2, lg: 1 },
                        mt: { xs: 4, lg: 0 }
                    }}>
                        <Box sx={{ display: "flex", position: "relative", justifyContent: "flex-start", alignItems: "center", }}>
                            <PlayButtonLittle />
                            <Typography variant="h1" component="div" sx={{
                                maxWidth: { xs: 260, lg: "85%" },
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

                        <Box sx={{ display: "flex", justifyContent: "space-around", position: "relative", mb: 2, mt: { xs: 3, lg: 2 } }}>
                            <Typography variant="body2" sx={{
                                width: { xs: 180, lg: "60px" },
                                mr: 12,
                                ml: 0,
                                fontFamily: "BebasNeue-Regular",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "14px",
                                letterSpacing: "4px",
                                textAlign: "left"
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
                                letterSpacing: "4px",
                                mr: { xs: 0, lg: 1 }
                            }}>
                                {year.slice(0, 4)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent >) :
                (
                    <CardContent sx={[{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        p: 0,
                        pb: "0px !important",
                        maxWidth: { xs: 350, lg: 220 },
                        minWidth: { xs: 350, lg: 220 },
                        maxHeight: { xs: 194, lg: 146 },
                        minHeight: { xs: 194, lg: 146 },
                        color: "white",
                        position: "relative",
                        borderRadius: 1,
                        mb: { xs: "30px", lg: "20px" },
                        "&:last-child": {
                            mb: "0"
                        }
                    }, {
                    }
                    ]}
                        onMouseOver={screenWidth ? null : handleMouseOver}
                        onMouseOut={screenWidth ? null : handleMouseOut}
                        onClick={!screenWidth ? null : handleClick}>
                        <Box sx={{
                            position: "absolute",
                            bottom: 0,
                            width: { xs: 350, lg: 220 },
                            height: { xs: 194, lg: 146 },
                            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%)",
                            borderRadius: 1
                        }}>
                        </Box>
                        <Box sx={{
                            maxWidth: { xs: "100%", lg: 220 },
                            minHeight: 146,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: { xs: "flex-end", lg: "flex-end" },
                            alignItems: { xs: "center" }
                        }}>
                            <Box sx={{ position: "relative", maxHeight: 94 }}>
                                {screenWidth ? <PlayButtonMobile /> : <PlayButton />}
                                <Typography variant="h1" component="div" sx={{
                                    px: 1,
                                    maxWidth: { xs: 260, lg: 220 },
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontFamily: "BebasNeue-Regular",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: { xs: "16px", lg: "18px" },
                                    lineHeight: { xs: "16px", lg: "18px" },
                                    letterSpacing: "4px",
                                    mt: { xs: 4, lg: 1 },
                                    mb: 2,
                                }}>
                                    {title}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent >
                )
            }
        </>
    );
}
