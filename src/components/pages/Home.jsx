import React from 'react'
import Ikb from "../../assets/images/Ikbal 3.png"

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="inner-container">
        <h1>Whate are you looking for?</h1>
        <div >
        <p className="home-items">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsam?</p>
        <p className="home-items">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsam?</p>
      </div>
        </div>
      <div className="right-items">
      <img src={Ikb} alt="" />
     
      <p className="inner-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis, exercitationem repellendus eligendi atque ea nobis molestias ipsa. Consequuntur, pariatur.</p>
      
        <p className="inner-item">Lorem ipsum dolor sit amet.</p>
      
      </div>
     
      </div>
    </div>
  )
}

export default Home