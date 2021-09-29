import React, {useRef, useEffect} from 'react'
import Style from "../Style/loading.module.css"
import Footer from './Footer'
import { gsap } from "gsap"



const Loading = () => {
    
    
    const hide = useRef()
    const hideWord = useRef()
    const hideWord1 = useRef()


    useEffect(() => {
        gsap.to(hideWord.current, {y: "0%"}, 1)
        gsap.to(hideWord1.current, {y: "0%"}, 1.5)
        gsap.to(hide.current, {y: "-100%"}, 2)
        
    }, [])

    return (
        <div ref = {hide} className = {Style.main}>
            <div className = {Style.mainCap}>
                <h4 ref = {hideWord}>Learn more about how Tesla is accelerating the world's transition to sustainable energy</h4>
                <p ref = {hideWord1}>I love Tesla</p>
            </div>
            
            <Footer className = {Style.footer}/>
        </div>
    )
}

export default Loading
