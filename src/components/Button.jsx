import React from 'react'

export const Button = ({ name }) => {
    return (
        <div className="text-2xl mt-5 text-red-800">
            <button className="border-red-400 border-2  py-1 px-8 hover:bg-red-600 hover:text-white" type="submit">
                {name}
            </button>
        </div>
    )
}
export const BuyNow = (props) => {
    return (
        <div className="text-2xl text-center mx-5 text-red-800 ">
            <button className="border-red-400 border-2 py-2 px-20 my-2 rounded-3xl hover:bg-red-600 hover:text-white" type="submit">
                {props.children} {props.name}
            </button>
        </div>
    )
}

