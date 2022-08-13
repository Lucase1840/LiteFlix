import React, { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';
import { uploadMovie, validate } from './MovieUploadUtils'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoadingBar from '../LoadingBar/LoadingBar';
import { useEffect } from 'react';
import DeopZone from '../DropZone/DropZone.jsx'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddMovieModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const [input, setInput] = React.useState({
        title: '',
        image: ''
    });

    const [errors, setErrors] = React.useState({
        title: '',
        image: ''
    });

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


    const handleSubmit = async function (e) {
        e.preventDefault();
        try {
            return await uploadMovie(input, setIsLoading, setProgress);
            // e.target.reset();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>{progress}</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Movie title:</label>
                            <div
                                data-tip="required"
                            >
                                <div >
                                    <input
                                        name="title"
                                        onChange={handleInputChange}
                                        placeholder="Product's name"
                                    />

                                </div>
                            </div>
                            {/* {errors.name ? (
                            <span >
                                {errors.name}
                            </span>
                        ) : (
                            ""
                        )} */}

                            <label>Image:</label>
                            <label

                            >
                                {/* {input.image?.name
                                    ? "Image Selected"
                                    : "Select an image from your device"} */}
                                {/* <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    name="image"
                                    onChange={handleInputChange}

                                /> */}
                                <DeopZone handleImageDrop={handleImageDrop} />
                            </label>
                            {/* {errors.image ? (
                            <span >
                                {errors.image}
                            </span>
                        ) : (
                            ""
                        )} */}
                            <button type="submit" >
                                Subir pelicula
                            </button>
                        </div>
                    </form>
                    <LoadingBar progress={progress} />
                    {/* // <Typography id="modal-modal-title" variant="h6" component="h2">
                    //     Text in a modal
                    // </Typography>
                    // <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    //     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    // </Typography> */}
                </Box>
            </Modal>
        </div >
    );
}

export default AddMovieModal;