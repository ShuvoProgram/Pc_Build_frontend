import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
    return (
        <div className='sweet-loading h-screen flex justify-center items-center'>
            <ClipLoader
                color={'#87CEEB'}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
