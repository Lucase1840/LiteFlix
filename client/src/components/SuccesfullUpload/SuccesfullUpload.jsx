import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

function SuccesfullUpload({ title, exitModal }) {
    const screenWidth = useMediaQuery('(max-width:375px)');
    const handleClick = () => {
        exitModal(false)
    }
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 700, justifyContent: "center" }}>
                {screenWidth ? ''
                    :
                    <Box sx={{ display: "flex", alignItems: "center", }}>
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
                        }}>
                            flix
                        </Typography>
                    </Box>}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    minHeight: { xs: 300, lg: 180 },
                    mt: 12
                }}>
                    <Box>
                        <Typography variant="h1" component="div" sx={{
                            fontFamily: "BebasNeue-Regular",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "26px",
                            letterSpacing: "4px",
                            color: "white",
                            mb: 3
                        }}>
                            ¡felicitaciones!
                        </Typography>
                        <Typography variant="h1" component="div" sx={{
                            fontFamily: "BebasNeue-Regular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "24px",
                            letterSpacing: "4px",
                            color: "white",
                            mb: 11
                        }}>
                            {`${title} fue correctamente subida.`}
                        </Typography>
                    </Box>
                    <Button type="submit" variant="contained" onClick={handleClick}
                        sx={[{
                            width: "248px",
                            height: "56px",
                            fontFamily: "BebasNeue-Regular",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "22px",
                            letterSpacing: "4px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "0px",
                            boxShadow: 0,
                            color: "black"
                        }, {
                            ":hover": {
                                backgroundColor: "#FFFFFF",
                                boxShadow: 0,
                                color: "black"
                            }
                        }]} >ir al home</Button>
                </Box>
            </Box>
        </>
    )
}

export default SuccesfullUpload