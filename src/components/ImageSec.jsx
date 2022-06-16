import React, { useState } from 'react'

import img1 from '.././assets/polo_shirt.png'
import img2 from '.././assets/img2.png'
import img3 from '.././assets/img3.png'
import img4 from '.././assets/img4.png'
import img5 from '.././assets/img5.png'

const ImageSec = () => {
    const [image, setImage] = useState(img1);
    return (
        <div className="lg:ml-[10rem]">
            <img className="w-full h-[35rem]" src={image} alt="polo-shirt" />
            <div className="text-center mt-4">
                <a href={image}>
                    <p>
                        <i className="fa-solid fa-magnifying-glass-plus"></i> View larger Image
                    </p>
                </a>
            </div>
            <div className="imageSize flex gap-6 bg-slate-200 p-5 h-fit rounded-md">
                <button onClick={() => setImage(img1)}> <img src={img1} alt="" /></button>
                <button onClick={() => setImage(img2)}> <img src={img2} alt="" /></button>
                <button onClick={() => setImage(img3)}> <img src={img3} alt="" /></button>
                <button onClick={() => setImage(img4)}> <img src={img4} alt="" /></button>
                <button onClick={() => setImage(img5)}> <img src={img5} alt="" /></button>

            </div>
        </div>
    )
}

export default ImageSec