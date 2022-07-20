import React from 'react'

const Navbar = ({filter,nav}) => {

    
  return (
    
    <nav className="navbar">
    <div className="btngroup">
    {
        nav.map((value)=>{
            return(
                <div className="btnitem" onClick={() => filter(value)}>{value}</div>
            )
        })
    }
      
    </div>
  </nav>
  )
}

export default Navbar