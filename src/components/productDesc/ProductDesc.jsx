import React from 'react'
import { Button } from '../Button'
import { Size, Color } from './ChangeSize'
import { Count, DiscountList } from './ChangeCount'

// product description component
const ProductDesc = () => {
    return (
        <article className='pl-3 sm:pr-8 '>
            <div className="flex items-center text-xs flex-wrap">
                <p className="bg-[#f04b50ee] text-white py-5 px-4 rounded-l-md">Ready to Ship</p>
                <div className="flex gap-5 bg-[#f8e4e5ee] text-pink-600 py-4 px-4 rounded-r-md">
                    <p> <span><i className="fa-regular fa-circle-check"></i></span> In stock</p>
                    <p> <span><i className="fa-regular fa-circle-check"></i></span> fast Dispatch</p>
                </div>
            </div>
            <h3 className="py-3">2-15years new design boy kids clothing cotton colorful striped short sleeve boy polo t-shirt</h3>
            <h3 className="text-slate-400">
                SKU:BAM-VINO4-SKY
            </h3>
            {/* ratings and reviews */}
            <div className="mt-10">
                <div className="flex items-center text-xl gap-4">
                    <div className=" text-[#f04b50ee] ">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                    </div>
                    <div className="flex gap-4">
                        <h4 className="text-slate-400">11 Reviews</h4>
                        <h4>Write your Review</h4>
                    </div>
                </div>
                <hr />
                <div className="">
                    <Count />
                    <DiscountList />
                    <Size />
                    <Color />
                    <div className='flex gap-6'>
                        <Button name="Wishlist" />
                        <Button name="Compare" />
                    </div>

                </div>
            </div>
        </article>
    )
}


export default ProductDesc