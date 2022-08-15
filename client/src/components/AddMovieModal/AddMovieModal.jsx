import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadMovie, validate } from './MovieUploadUtils'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoadingBar from '../LoadingBar/LoadingBar';
import { useEffect } from 'react';
import DeopZone from '../DropZone/DropZone.jsx';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import { uploadUserMovie } from '../../redux/actions';
import SuccesfullUpload from '../SuccesfullUpload/SuccesfullUpload.jsx';
const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "100%", lg: 730 },
    minHeight: { xs: "100vh", lg: 440 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    backgroundColor: "#242424",
    color: "white",
    boxSizing: "border-box"
};

function AddMovieModal({ open, setOpen, handleOpen, handleClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch()
    const error = useSelector(state => state.error)

    const [input, setInput] = React.useState({
        title: '',
        image: ''
    });

    const [uploadError, setUploadError] = React.useState(false);

    const [errors, setErrors] = React.useState({
        title: '',
        image: ''
    });
    let buttonStyle

    input.image && input.title ? buttonStyle = [{
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
    }]
        : buttonStyle =

        [{
            width: "248px",
            height: "56px",
            fontFamily: "BebasNeue-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            letterSpacing: "4px",
            backgroundColor: "#7d7c7c",
            borderRadius: "0px",
            boxShadow: 0,
            color: "black"
        }, {
            " &.Mui-disabled": {
                backgroundColor: "#7d7c7c",
                boxShadow: 0,
                color: "black"
            }
        }]

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    const handleImageDrop = function (image) {
        setInput({
            ...input,
            image: image
        });
        setErrors(validate({
            ...input,
            image: image
        }));
    };

    console.log(input)
    console.log(error)

    const handleSubmit = async function (e) {
        e.preventDefault();
        try {
            await uploadMovie(input, setIsLoading, setProgress, setFinished, setUploadError)
            // e.target.reset();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {!finished ? <SuccesfullUpload title={input.title} exitModal={setOpen} /> :
                        <>
                            <Typography variant="h1" component="div" sx={{
                                fontFamily: "BebasNeue-Regular",
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "20px",
                                lineHeight: "20px",
                                letterSpacing: "4px",
                                color: "#64EEBC",
                                mb: 4
                            }}>
                                agregar película
                            </Typography>
                            <FormControl sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                alignItems: "center",
                                minHeight: 300,
                                minWidth: "350px"
                            }}>
                                {!isLoading && !finished ? <DeopZone handleImageDrop={handleImageDrop} /> : ''}
                                {isLoading || finished ? <LoadingBar progress={progress} error={uploadError} /> : ''}
                                <TextField sx={[{
                                    display: "flex",
                                    height: "56px",
                                    backgroundColor: "#242424",
                                    borderRadius: "0px",
                                    boxShadow: 0,
                                    textAlign: "center",
                                    borderColor: "#242424",
                                }, {
                                    "input": {
                                        width: "248px",
                                        textAlign: "center",
                                        fontFamily: "BebasNeue-Regular",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "22px",
                                        letterSpacing: "4px",
                                        color: "white",
                                        backgroundColor: "#242424",
                                    }
                                }]}
                                    name="title" id="filled-basic" onChange={handleInputChange} variant="standard" placeholder="título" disableAnimation={true} focused={false} />
                                <Button type="submit" onClick={handleSubmit} variant="contained"
                                    sx={buttonStyle} disabled={input.image && input.title ? false : true}>subir pelicula</Button>
                            </FormControl>
                        </>
                    }
                </Box>
            </Modal>
        </div >
    );
}

export default AddMovieModal;