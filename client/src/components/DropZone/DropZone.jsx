import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as Clip } from "../../images/clip.svg"
import useMediaQuery from '@mui/material/useMediaQuery';

const baseStyle = {
    minWidth: "290px",
    heigth: "100px",
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    padding: '20px',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
    backgroundColor: '#242424',
    color: 'white',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    fontFamily: "BebasNeue-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "16px",
    letterSpacing: "4px",
};

const focusedStyle = {
    borderColor: '#64EEBC'
};

const acceptStyle = {
    borderColor: '#64EEBC',
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const fileReady = {
    borderColor: '#64EEBC',
}

export default function DropZone({ handleImageDrop }) {
    const screenWidth = useMediaQuery('(max-width:375px)');
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
        acceptedFiles
    } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: files => handleImageDrop(files[0])
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
        ...(acceptedFiles.length ? fileReady : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject,
        acceptedFiles
    ]);

    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input name="image" {...getInputProps()} />
                <Clip />
                <p style={{ "margin-left": "15px" }}>{screenWidth ? "Agregá un archivo" : "Agregá un archivo o arrastralo y soltalo aquí"}</p>
            </div>
        </div >
    );
}
