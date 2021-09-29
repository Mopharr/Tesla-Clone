import React from 'react'
import Style from "../Style/footer.module.css"

const Footer = () => {
    return (
        <div className = {Style.main}>
            <ul className = {Style.mainCap}>
                <li>Tesla © 2021</li>
                <li>Privacy & legal</li>
                <li  className = {Style.dis}>Contact</li>
                <li>Career</li>
                <li>News</li>
                <li className = {Style.dis}>Engage</li>
                <li className = {Style.dis}>Location</li>
            </ul>
        </div>
    )
}

export default Footer
