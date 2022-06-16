// count componenta for increasing and decreasing count and price
import React, { useState } from 'react'
export const Count = () => {
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(13999);


    let price = 13999
    const handleIncrease = () => {
        if (count >= 1) {
            setCount(count + 1)

            if (amount) {
                setAmount(amount + price)
            }
        }
    }
    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1)
            if (amount) {
                setAmount(amount - price)
            }
        }
    }
    return (
        <div className="">
            <div className="flex items-center gap-14 my-5">
                <h2>₦{amount}</h2>
                <div className="flex gap-7 items-center bg-slate-200 py-2 px-5 border-width-3 rounded-md">
                    <button className="" onClick={handleIncrease} type="button"><h3>+</h3></button>
                    <h3 className="bg-white px-5 rounded-md">{count}</h3>
                    <button onClick={handleDecrease} type="button"><h3>-</h3></button>
                </div>
            </div>
            <hr />
        </div>
    )
}
//  discount component list
export const DiscountList = () => {
    const lists = [
        {
            id: 1,
            discount: 'Buy 3 and get a discount',
        },
        {
            id: 2,
            discount: 'Buy 6 and get a discount',
        },
        {
            id: 3,
            discount: 'Buy 9 and get a discount',
        },
        {
            id: 4,
            discount: 'Buy 12 and get a discount',
        }
    ]
    return (
        <div className="">
            <form action="">
                {lists.map((list) => {
                    const { id, discount } = list;
                    return <div key={id} className="flex items-center gap-6">
                        <input type="checkbox" />
                        <h4>{discount}</h4>
                    </div>
                })}
            </form>
            <div className="bg-red-200 p-4 mt-4 rounded-md w-fit">
                <p className='text-red-700 text-2xl'>Guaranteed delivery between 24hrs and 24hrs in the same state and 12hrs to 72hrs in other state</p>
            </div>
        </div>
    )
}