import React from "react";
const Nav=(y)=>{
    console.log(y)
    return(
        <div>
            <li>
                cart <sup>{y.props}</sup>
            </li>
        </div>
    )
}
export default Nav;