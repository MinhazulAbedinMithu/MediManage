import React, { useState } from 'react'
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Home from '../components/Home';

const Homepage = () => {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <>
    {!isLogin ? <Welcome isLogin={isLogin} setIsLogin={setIsLogin}/> : 
        <div className='min-h-screen h-full relative'>
            <Home />
            <Footer/>
        </div>
    }
    </>
  )
}

export default Homepage