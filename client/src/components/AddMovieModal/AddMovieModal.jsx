import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { uploadMovie, validate } from './MovieUploadUtils'

function AddMovieModal() {
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
        let data = null
        if (e.target.name === 'image') {
            data = e.target.files[0];
        }
        setInput({
            ...input,
            [e.target.name]: data ? data : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: data ? data : e.target.value
        }));
    };

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
        <>
            <div >
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
                            {input.image?.name
                                ? "Image Selected"
                                : "Select an image from your device"}
                            <input
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                name="image"
                                onChange={handleInputChange}

                            />
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
            </div>
        </>
    );
};



export default AddMovieModal;