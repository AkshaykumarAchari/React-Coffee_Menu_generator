import React from 'react'
import "../menupages-css/menu2.css"
import coffee from "../images/img2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"; 

function Menu2() {
  useEffect(()=>{
    AOS.init({offset:1,});
        })
    
  return (
    <div>
       <div>
     
     <hr/>
     <div className="about">
     <div
       className="aboutTop"
       style={{ backgroundImage: `url(${coffee})` }} data-aos="zoom-in" data-aos-duration="2300"
     ></div>
     <div className="aboutBottom">
       <h1> Vietnamese  </h1>
       <br/>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
         mollitia, molestiae quas vel sint commodi repudiandae consequuntur
         voluptatum laborum numquam blanditiis harum quisquam eius sed odit
         fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
         accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
         molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
         officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
         nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
         error repudiandae fuga? Ipsa laudantium molestias eos sapiente
         officiis modi at sunt excepturi expedita sint? Sed quibusdam
         recusandae alias error harum maxime adipisci amet laborum.
         Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
         cumque velit
       </p>
     </div>
   </div>
   <hr/>
     </div>
    </div>
  )
}

export default Menu2