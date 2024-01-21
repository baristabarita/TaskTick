import React, {useState} from 'react'

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className='underline'>Landing Page lmao</h1>
            <Footer />
        </div>
    );
}

export default LandingPage;