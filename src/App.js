import React from 'react'
import AppSection from './AppSection'
import CardSection from './CardSection'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import Navbar from './Navbar'


const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <FooterSection />

        </div>
    )
}

export default App;
