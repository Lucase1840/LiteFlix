import axios from "axios";
let URL;
process.env.NODE_ENV === "development" ? URL = "http://localhost:3001" : URL = "";
const uploadPreset = 'd9vdlmyy'
const cloudName = 'da42wdmjv'

export const uploadMovie = async (data, setIsLoading, setProgress) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', data.image);
    formData.append('upload_preset', uploadPreset);
    try {
        axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData, {
            headers: {
                "Content-Type": data.image.type,
            },
            onUploadProgress: (progressEvent) => {
                const imageUploadProgress = Math.floor((progressEvent.loaded / progressEvent.total) * 90);
                setProgress(imageUploadProgress);
            },
        }).then(async (resp) => {
            let dataToSubmit = {
                ...data,
                image: resp.data.public_id
            }
            await axios.post(`${URL}/movies/upload`, dataToSubmit, {
                onUploadProgress: (progressEvent) => {
                    const MovieUploadProgress = 90 + (Math.floor((progressEvent.loaded / progressEvent.total) * 10));
                    console.log("upload MOVIE:", MovieUploadProgress)
                    setProgress(MovieUploadProgress);
                },
            })
            setIsLoading(false)
        })
    }
    catch (err) {
        console.log(err.message);
    }
};


export const validate = function (input) {
    let errors = {};
    if (input.name) {
        if (!input.name || input.name.length < 1 || typeof input.name !== 'string') {
            errors.name = 'The course name must be at least 2 characters long.';
        } else if (/["`!'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.name)) {
            errors.name = 'The course name can not contain special characters.';
        };
    };
    if (input.image?.name) {
        let extention = input.image?.name.slice(input.image.name.length - 5, input.image.name.length)
        let reg = /(\.jpg|\.jpeg|\.png)$/i
        if (!reg.test(extention)) {
            errors.image = 'The image must be a jpg, jpeg or a png file.';
        }
    }
    return errors;
};

