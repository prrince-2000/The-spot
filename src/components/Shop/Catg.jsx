import React from 'react'

const Catg = () => {
    const data = [
        {
          cateImg:  require('../../common/assets/brands/apple1.png'),
          cateName: "Apple",
        },
        {
          cateImg: require('../../common/assets/brands/samsung.png'),
          cateName: "Samsung",
        },
        {
          cateImg: require('../../common/assets/brands/oppo.png'),
          cateName: "Oppo",
        },
        {
          cateImg: require('../../common/assets/brands/vivo.png'),
          cateName: "Vivo",
        },
        {
          cateImg: require('../../common/assets/brands/mi.png'),
          cateName: "Redmi",
        },
        {
          cateImg: require('../../common/assets/brands/sony.png'),
          cateName: "Sony",
        },
      ]
  return (
    <>
        <div className="category">
            <div className="chead d_flex">
                <h1>Brands</h1>
                <h1>Shops</h1>
            </div>
            {
                data.map((value, index)=> {
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
            <div className="box box2">
                <button>View All Brands</button>
            </div>
        </div>
    </>
  )
}

export default Catg