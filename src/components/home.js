import React from 'react'
import styled from "styled-components"
import Section  from './Section'
import modelS from '../Asset/image/model-s.jpeg' 
import modelY from '../Asset/image/model-y.jpeg' 
import model3 from '../Asset/image/model-3.jpeg' 
import modelX from '../Asset/image/model-x.jpeg' 
import SolarP from '../Asset/image/solar-panel.jpeg' 
import SolarR from '../Asset/image/solar-roof.jpeg' 
import Acc from '../Asset/image/accessories.jpeg' 

function Home() {

    return (
        <div id = 'fullpage'>
        <Container>
            <Section
                tittle = 'Model S'
                description = "Order Online for Touchless Delivery"
                LeftButton = 'Custom Order'
                RightButton = 'Existing Inventory'
                BackgroundImg = {modelS}
            />
            <Section
                tittle = 'Model Y'
                description = "Order Online for Touchless Delivery"
                LeftButton = 'Custom Order'
                RightButton = 'Existing Inventory'
                BackgroundImg = {modelY}
            />
            <Section
                tittle = 'Model 3'
                description = "Order Online for Touchless Delivery"
                LeftButton = 'Custom Order'
                RightButton = 'Existing Inventory'
                BackgroundImg = {model3}
            />
            <Section
                tittle = 'Model X'
                description = "Order Online for Touchless Delivery"
                LeftButton = 'Custom Order'
                RightButton = 'Existing Inventory'
                BackgroundImg = {modelX}
            />
            <Section
                tittle = 'Solar Panels'
                description = "Lowest Cost Solar Panels in America"
                LeftButton = 'Order Now'
                RightButton = 'Learn More'
                BackgroundImg = {SolarP}
            />
            <Section
                tittle = 'Solar Roof'
                description = "Produce Clean Energy From Your Roof"
                LeftButton = 'Order Now'
                RightButton = 'Learn More'
                BackgroundImg = {SolarR}
            />
            <Section
                tittle = 'Accesories' 
                LeftButton = 'Shop Now'
                BackgroundImg = {Acc}
            />
        </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`