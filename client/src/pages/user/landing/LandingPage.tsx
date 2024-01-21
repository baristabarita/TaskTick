import React, {useState} from 'react'

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';

const LandingPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='w-full mt-[6em]'>
            <h1 className='underline'>Landing Page lmao</h1>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;