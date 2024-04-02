import Exif from 'exif-js';
import { useState } from 'react';

function readImage(imageFile) {
    Exif.getData(imageFile, function() {
        var allMetaData = Exif.getAllTags(this);
        console.log(allMetaData)
    });
}


export function Reader() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    
    
        Exif.getData(file, ()=>{
            const alld = Exif.getAllTags(file);
            console.log(alld)
        })
    
    }

    return (
        <div className="inputImage">
            <h2>Insert your image</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} alt="" />
        </div>
    )


}