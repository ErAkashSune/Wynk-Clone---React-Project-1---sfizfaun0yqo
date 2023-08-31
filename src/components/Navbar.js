import React from "react";

const Navbar=() =>{
  return (
        
            <nav>
                 <div className="WebLogo">
                    <img src='https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e772f9654b8947adbc6e3c633169c395.svg' alt="Logo" />
                 </div>
                 <div>
                    Wynk Music
                 </div>
                 <div>
                    <input type="text" placeholder="Search Songs"></input>
                 </div>
                 <div>
                    <a href="#">Manage Subscription</a>
                 </div>
                 <div>
                    <a href="#">Login</a>
                 </div>
            </nav>
                

                 

          
      );
    
};
export default Navbar;