import React from 'react'

const CardData = ({ menuData }) => {
  // console.log(menuData);


  return (

    <>

      <div className='main-container'>
        {menuData.map((value) => {

          const {id,image,name,category,price,description}=value;
          return (
            <>

              <div className="container"  key={id}>
                <div className="card">
                  <div className="body">
                    <span className="cnumber">{id}</span>
                    <span className="ctype">{category}</span>
                    <span className="cname">{name}</span>
                    <span className="cdis">{description} </span>

                    <img className="cimg" src={image} alt="images"></img>
                    <span className="cread">Read</span>
                    <span className="ctag">Order Now</span>

                  </div>
                </div>
              </div>

            </>

          );

        })}
        </div> 
      </>
      )
}

      export default CardData;