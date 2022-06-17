import React, { useState } from 'react';
// change size component
export const Size = () => {
    const [size, setSize] = useState('Medium')

    return (
        <div className="mt-6">
            <h4> <strong>Size: {size}</strong></h4>

            <div className="flex text-3xl gap-6 mt-3">
                <button onClick={() => setSize('Small')}>S</button>
                <button onClick={() => setSize('Medium')}>M</button>
                <button onClick={() => setSize('Large')}>L</button>
                <button onClick={() => setSize('Extra Large')}>XL</button>
            </div>
        </div>
    )
}

// change color Component
export const Color = () => {
    const [color, setColor] = useState('Black')
    return (
        <div className="mt-6">
            <h4> <strong>Color: {color}</strong></h4>

            <div className="flex text-3xl gap-8 mt-3">
                <button className="bg-black p-5" onClick={() => setColor('Black')}></button>
                <button className="bg-blue-700 p-5" onClick={() => setColor('Blue')}></button>
                <button className="bg-yellow-500 p-5" onClick={() => setColor('Yellow')}></button>
                <button className="bg-red-700 p-5" onClick={() => setColor('Red')}></button>
                <button className="bg-green-700 p-5" onClick={() => setColor('Green')}></button>
            </div>
        </div>
    )
}