import React, { useEffect, useState } from 'react'
import { useReadyStateEffect } from "react-ready-state-effect"
import styles from './index.module.sass'
import background from '../assets/img/background.png'
import clouds from '../assets/img/clouds.png'
import way from '../assets/img/way.png'
import moon from '../assets/img/moon.png'
import mosque from '../assets/img/mosque.png'
import towers from '../assets/img/towers.png'
import littleTowers from '../assets/img/little-towers.png'
import MoonLoader from "react-spinners/MoonLoader"

// let counterImg = 0

export const Main = () => {

    const [animation, setAnimation] = useState(false)

    const [counterImg, setCounterImg] = useState(1)

    // useEffect (() => {
    //     setAnimation(true)
    // },[])



    // useReadyStateEffect(() => setAnimation(true),[])

    const handleLoadImage = () => {
        setCounterImg(counterImg + 1)
        console.log(counterImg)
        counterImg === 7 && setTimeout(() => {
            setAnimation(true)
        }, 0);
    }

    return (
        <>
        <div className = {styles.cont}>
            <img 
                className = {!animation ? styles.backgroundImg : `${styles.backgroundImg} ${styles.backgroundImgAnime}`} 
                alt = 'img' 
                src = {background}
                onLoad = {handleLoadImage}
            />
            <img 
                className = {!animation ? styles.clouds : `${styles.clouds} ${styles.cloudsAnime}`} 
                alt = 'img' 
                src = {clouds}
                onLoad = {handleLoadImage}
            />
            <img 
                className = {styles.way} 
                alt = 'img' 
                src = {way}
                onLoad = {handleLoadImage}
            />
            <div className = { styles.mosqueTowersCont}>
                <img 
                    className = {!animation ? styles.moon : `${styles.moon} ${styles.moonAnime}`} 
                    alt = 'img' 
                    src = {moon} 
                    onLoad = {handleLoadImage}
                />
                <img 
                    className = {!animation ? styles.towers : `${styles.towers} ${styles.towersAnime}`} 
                    alt = 'img' 
                    src = {towers} 
                    onLoad = {handleLoadImage}
                />
                <img 
                    className = {!animation ? styles.mosque : `${styles.mosque} ${styles.mosqueAnime}`} 
                    alt = 'img' 
                    src = {mosque} 
                    onLoad = {handleLoadImage}
                />
            </div>       
            <img 
                className = {!animation ? styles.littleTowers : `${styles.littleTowers} ${styles.littleTowersAnime}`} 
                alt = 'img' 
                src = {littleTowers}
                onLoad = {handleLoadImage}
            />
        </div>
        </>
        
    )
}