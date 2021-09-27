import React, {useState} from 'react'
import logo from "../Asset/image/logo.png"
import {BsX} from 'react-icons/bs'
import Style from '../Style/header.module.css'
import styled from 'styled-components'
import { selectCars } from "../features/car/carSlice"
import { useSelector } from "react-redux"

function Header() {
  const [burgerStatus, SetBurgerStatus] = useState(false)
    // const cars = useSelector(selectCars)
    // console.log(cars)

    return (
        <div className = {Style.main}>
            <a className = {Style.logo}>
                <img src = {logo}/>
            </a>
            <div className = {Style.mid}>
                    <a href = "/">Model S</a>
                    <a href = "/">Model 3</a>
                    <a href = "/">Model X</a>
                    <a href = "/">MOdel Y</a>
                    <a href = "/">Solar Roof</a>
                    <a href = "/">Solar Panel</a>
            </div>
            <div className = {Style.navBar}>
                <div className = {Style.mid}>
                    <a href = '/'>Shop</a>
                    <a href = "/">Account</a>
                </div> 
                    <a onClick = {() => SetBurgerStatus(true)} >Menu</a>
            </div>
            <BurgerNav show = {burgerStatus} className ={Style.navLinks}>
                <BsX  onClick = {() => SetBurgerStatus(false)} className = {Style.cancel} size = '2rem'/>
                <ul>
                    <li>Existing Inventory</li>
                    <li>Used Inventory</li>
                    <li>Trade In</li>
                    <li>Test Drive</li>
                    <li>PowerWall</li>
                    <li>Commercial Energy</li>
                    <li>Utilities</li>
                    <li>Charging</li>
                    <li>Find Us</li>
                    <li>Support</li>
                    <li>Investor Relation</li>
                </ul>
            </BurgerNav>
        </div>
    )
}

export default Header

const BurgerNav = styled.div`
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'}
`