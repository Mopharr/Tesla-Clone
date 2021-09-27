import React from 'react'
import Style from "../Style/section.module.css"
import styled from 'styled-components'
import Fade from "react-reveal"
import Arrow from "../Asset/image/down-arrow.svg"

function Section({tittle, description, LeftButton, RightButton, BackgroundImg}) {
    return (
        
        <Wrap bgImg = {BackgroundImg}  className = {Style.main}>
            <Fade bottom>
                <div className = {Style.mainCap}>
                    <h1>{tittle}</h1>
                    <p>{description}</p>
                </div>
            </Fade>
            <div className = {Style.button}>
                <Fade bottom>
                    <div className = {Style.buttonGroup}>
                        <div className = {Style.leftButton}>
                            {LeftButton}
                        </div>
                        {RightButton && 
                        <div className = {Style.rightButton}>
                            {RightButton}
                        </div>
                        }
                    </div>
                </Fade>
                
             <img className = {Style.btnImg} src={Arrow} alt="" />
            </div>
            
        </Wrap>
        
    )
}

export default Section

const Wrap = styled.div`
   background-image: ${props => `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url("${props.bgImg}")`}


`




