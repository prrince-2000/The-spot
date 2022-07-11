import React from 'react'

const Categories = () => {

    const data = [
        {
            cateImg: require('../../common/assets/fashion.png'),
            cateName: 'Fashion',
        },
        {
            cateImg: require('../../common/assets/electronic.png'),
            cateName: "Electronics",
          },
          {
            cateImg: require('../../common/assets/car.png'),
            cateName: "Cars",
          },
          {
            cateImg: require('../../common/assets/home.png'),
            cateName: "Home & Garden",
          },
          {
            cateImg: require('../../common/assets/gifts.png'),
            cateName: "Gifts",
          },
          {
            cateImg: require('../../common/assets/music.png'),
            cateName: "Music",
          },
          {
            cateImg: require('../../common/assets/health.png'),
            cateName: "Health & Beauty",
          },
          {
            cateImg: require('../../common/assets/pets.jpg'),
            cateName: "Pets",
          },
          {
            cateImg: require('../../common/assets/lego.png'),
            cateName: "Baby Toys",
          },
          {
            cateImg: require('../../common/assets/cart.png'),
            cateName: "Groceries",
          },
          {
            cateImg: require('../../common/assets/book.png'),
            cateName: "Books",
          },
    ]
  return (
    <>
        <div className="category">
            {
                data.map((value,index) =>{
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories