import React from 'react'
import Ddata from './Ddata'
import Slider from 'react-slick'

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
  return (
    <>
        <div className="content">
            <Slider {...settings}>
                    {Ddata.map((val, index) => {
                        return(
                            <>
                                <div className="box product" key={index}>
                                    <div className="box">
                                        <div className="img">
                                            <img src={val.cover} alt="" />
                                        </div>
                                        <h4>{val.name}</h4>
                                        <span>{val.price}.00</span>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </Slider>
        </div>
    </>
  )
}

export default Dcard