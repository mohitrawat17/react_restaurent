import React, { useState } from "react";
import "./index.css"
import Api from "./Api";
import CardData from "./CardData";
import Navbar from "./Navbar";

const unique=[...new Set( 
  Api.map((val)=>{
  return val.category;
   } )
   ),"All",
  ];
  console.log(unique);

function App() {

  const [data, newdata] = useState(Api);

const [nav,newnav]=useState(unique);
  const filter = (cate) => {
    if(cate==="All"){
      return newdata(Api);

    }
    const update = Api.filter((vallue) => {
      return vallue.category === cate;
    });
    newdata(update);
  }

  return (
    <>
    <Navbar filter={filter} nav={nav}/>
      <CardData menuData={data} />
    </>
  );
}

export default App;
