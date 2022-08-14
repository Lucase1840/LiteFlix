import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function LinearProgressWithLabel(props) {
    if (props.value === "error") {
        let value = 100
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", minHeight: "100px", width: "600px", }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "4px",
                        color: "white",
                        mb: 2
                    }} >
                        ¡error! no se pudo cargar la película
                    </Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    mr: 1, position: "relative",
                    height: "10px"
                }}>
                    <LinearProgress variant="determinate" {...value
                    }
                        sx={
                            [{
                                height: "10px",
                            }, {
                                ".MuiLinearProgress-bar1Determinate": {
                                    backgroundColor: "red",
                                }
                            }]} />
                </Box>
                <Typography sx={{
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "18px",
                    letterSpacing: "4px",
                    color: "white",
                    mt: 2,
                    alignSelf: "flex-end"
                }} variant="body2" color="text.secondary">reintentar</Typography>
            </Box >
        );
    } else {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", minHeight: "100px", width: "600px", }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "4px",
                        color: "white",
                        mb: 2
                    }} >
                        {props.value === 100
                            ? "100% cargado"
                            : `cargando ${Math.round(props.value)}%`
                        }
                    </Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    mr: 1, position: "relative",
                    height: "10px"
                }}>
                    <LinearProgress variant="determinate" {...props
                    }
                        sx={
                            [{
                                height: "10px",
                            }, {
                                ".MuiLinearProgress-bar1Determinate": {
                                    backgroundColor: "#64EEBC",
                                }
                            }]} />
                </Box>
                {props.value === 100 ? <Typography sx={{
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "4px",
                    color: "#64EEBC",
                    mt: 2,
                    alignSelf: "flex-end"
                }} variant="body2" color="text.secondary">¡listo!</Typography> : ''}
            </Box >
        );
    }

}

export default function LoadingBar({ progress, error }) {
    if (!error) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} />
            </Box>
        );
    } else {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={"error"} />
            </Box>
        );
    }

}