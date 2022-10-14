import React from 'react'
import '../App.css'
import Google from '../assests/Google.png'
import Food1 from '../assests/Food1.png'
import Food2 from '../assests/Food2.png'
import Food3 from '../assests/Food3.png'
import App from '../assests/App.png'
import Landing from '../assests/LandImg.png'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div>
      <Nav />
      <div className='contaner'> 
        <div className='wrapper'>
      {/* NAVBAR */}
          <section className='sec1'>
            <div className='sec1-text'>
              <h1>Order food anytime, anywhere</h1>
              <p>Browse from our list of specials to place your order and have food delivered to you in no time. 
                Affordable, tasty and fast!</p>
               <div>
                  <img src={Google} style = {{height: '23px', paddingLeft: '10px'}} alt= '' />       
                  <img src={App} style = {{height: '23px', marginLeft: '10px'}} alt= '' />       
                </div> 
            </div>
            <div className='sec1-img' >
              <img src={Landing} alt='Landing_pic' />
            </div>
          </section>
          {/* Secton two */}
          <section className='sec2'>
            <div className='sec2-text' style={{textAlign: 'center'}}>
              <h2>Special Meals of the day!</h2>
              <p>Check our sepecials of the day and get discounts on all our meals and swift delivery to 
                what ever location within Ilorin.</p>
            </div>
            <div className='sec2-img'>
                <div>
                  <img src={Food1} alt = 'Food1' />
                  <h5>Stir fry Pasta</h5>
                  <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
                <div>
                <img src={Food2} alt = 'Food2' />
                  <h5>Meat Balls</h5>
                  <p>Stir fry pasta yada yada yada because of Sesan</p> 
                </div>
                <div>
                <img src={Food3} alt = 'Food3' />
                  <h5>Burger Meal</h5>
                  <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
            </div>
          </section>
          <section className='sec3'>
              <div>
                <h5>Get notified when we update!</h5>
                <p>Get notified when we add new items to our specials menu, 
                  update our price list of have promos!</p>
              </div>
              <div>
                <input type='text' />
                <button>Get notified</button>
              </div>
          </section>
        </div>  
      </div>
      <Footer />
    </div>
  )
}

export default Home