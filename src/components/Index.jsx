import React from 'react'
import Header from './Header'
import ImageSec from './ImageSec'
import ProductDesc from './productDesc/ProductDesc'
import ShiptoSec from './ShiptoSec'



// image section component
const Index = () => {
    return (
        <section className="">
            <Header />
            <div className="grid md:grid-cols-[40%,60%] lg:grid-cols-[30%,45%,25%] gap-6 p-9 lg:p-0">
                <ImageSec />
                <ProductDesc />
                <ShiptoSec />
            </div>
        </section>
    )
}

export default Index