import React from 'react'

import { BuyNow } from './Button'

const ShiptoSec = () => {
    return (
        <div className="">
            {/* <StateLga /> */}

            <div className="h-[20rem] shadow-md">contact form</div>


            <BuyNow name="Buy Now" />
            <BuyNow name="Contact Supplier" >
                <i className="fa-regular fa-envelope"></i>
            </BuyNow>
            <BuyNow name="Chart with Us" >
                <i className="fa-regular fa-comment-dots"></i>
            </BuyNow>
            <div className="grid place-self-center mt-4 text-2xl hover:text-red-500">
                <button>
                    <i className="fa-solid fa-cart-shopping"></i> Add Item
                </button>
            </div>


        </div>
    )
}

export default ShiptoSec