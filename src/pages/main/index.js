import React, { useEffect, useState, useRef } from 'react'
// import { useReadyStateEffect } from "react-ready-state-effect"
import styles from './index.module.sass'
import background from '../../assets/img/background.png'
import clouds from '../../assets/img/clouds.png'
import way from '../../assets/img/way.png'
import moon from '../../assets/img/moon.png'
import mosque from '../../assets/img/mosque.png'
import towers from '../../assets/img/towers.png'
import littleTowers from '../../assets/img/little-towers.png'
import download from '../../assets/icon/download.ico'
import phone from '../../assets/icon/phone.ico'
import email from '../../assets/icon/email.ico'
import question from '../../assets/icon/question.ico'
import PulseLoader from "react-spinners/PulseLoader"
import { lang } from '../../languages'
// import { screenWidth } from './constants'
import { moveCenterMosque } from './animations-functions'


export const Main = () => {

    const [animation, setAnimation] = useState(false)

    const [counterImg, setCounterImg] = useState(1)

    const [spinner, setSpinner] = useState(true)

    const mosqueElement = useRef(null)

    const towersElement = useRef(null)

    const wayElement = useRef(null)

    const moonElement = useRef(null)

    const [mosqueStyle, setMosqueStyle] = useState({
        transform: ''
        // right: null
        // transition: 'ease-in',
        // transitionDuration: '1s'
    })

    const [towersStyle, setTowersStyle] = useState({
        transform: ''
        // right: null
        // transition: 'ease-in',
        // transitionDuration: '1s'
    })

    const [backgroundStyle, setBackgoundStyle] = useState({
        transform: ''
    })

    const [cloudsStyle, setCloudsStyle] = useState({
        transform: ''
    })

    const [wayStyle, setWayStyle] = useState({
        transform: ''
    })

    const [moonStyle, setMoonStyle] = useState({
        transform: ''
    })

    useEffect (() => {
        setTimeout(() => {
            setSpinner(false)
        }, 1000)
    },[])



    // useReadyStateEffect(() => setSpinner(false),[])

    const handleLoadImage = () => {
        setCounterImg(counterImg + 1)
        counterImg === 7 && setAnimation(true)
    }

    const handleDetails = () => {
        const mosqueCenter = moveCenterMosque(mosqueElement)
        setMosqueStyle({transform: `translate(-${mosqueCenter}px, 0`})
        setTowersStyle({transform: `translate(-${mosqueCenter}px, 0`})
        setTimeout(() => {
            setWayStyle({transform: `scale(1.5, 1.0) translate(0px, 20px)`})
            setBackgoundStyle({transform: 'scale(1.4)'})
            setCloudsStyle({transform: 'scale(2.5)'})
            setTowersStyle({transform: `translate(-${mosqueCenter}px, 100px)`})
        }, 1000)
        setTimeout(() => {
            setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.3}px, 100px`})
            setTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.3}px, 200px`})
        }, 2000)
        setTimeout(() => {
            setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.3}px, -5px`})
        }, 3000)
        setTimeout(() => {
            setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.3}px, 70px`})
            setTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.3}px, 280px`})
            setWayStyle({transform: `scale(2.0, 1.0) translate(0px, 40px)`})
            setMoonStyle({transform: 'translate(700px, -700px)'})
        }, 4000);
    }

    const reset = () => {
        setMosqueStyle({transform: `translate(-${0}px, 0`})
        setTowersStyle({transform: `translate(-${0}px, 0`})
        setBackgoundStyle({transform: 'scale(1.0)'})
        setCloudsStyle({transform: 'scale(1.0)'})
        setTowersStyle({transform: 'scale(1.0) translate(0, 0)'})
        setWayStyle({transform: `scale(1.0) translate(0px, 0px)`})
        setMoonStyle({transform: 'translate(0px, 0px)'})
    }

    return (
        <div className = {styles.mainCont}>
            {spinner ? <div className = {styles.spinnerCont}>
                 <PulseLoader
                    size={15}
                    color={"#123abc"}
                    loading={spinner}
                /> 
                loading
            </div>
            :<div className = {styles.cont}>
                <div className = {styles.headerCont}>
                    <div className = {styles.headerButtonCont}>
                        <div className = {styles.headerAboutUs}>{lang.main.aboutUs}</div>
                        <div className = {styles.headerLetsgo}>{lang.main.letsgo}</div>
                    </div>
                </div>
                <button style = {{position: 'absolute', top: 0, left: 0, zIndex: 3}} onClick = {reset}>reset</button>
                <img 
                    className = {!animation ? styles.backgroundImg : `${styles.backgroundImg} ${styles.backgroundImgAnime}`} 
                    alt = 'img' 
                    src = {background}
                    style = {backgroundStyle}
                    onLoad = {handleLoadImage}
                />
                <img 
                    className = {!animation ? styles.clouds : `${styles.clouds} ${styles.cloudsAnime}`} 
                    alt = 'img' 
                    src = {clouds}
                    style = {cloudsStyle}
                    onLoad = {handleLoadImage}
                />
                <img 
                    className = {styles.way} 
                    alt = 'img' 
                    src = {way}
                    style = {wayStyle}
                    ref = {wayElement}
                    onLoad = {handleLoadImage}
                />
                <div className = { styles.mosqueTowersCont}>
                    <img 
                        className = {!animation ? styles.moon : `${styles.moon} ${styles.moonAnime}`} 
                        alt = 'img' 
                        src = {moon} 
                        style = {moonStyle}
                        ref = {moonElement}
                        onLoad = {handleLoadImage}
                    />
                    <img 
                        className = {!animation ? styles.towers : `${styles.towers} ${styles.towersAnime}`} 
                        alt = 'img' 
                        src = {towers} 
                        onLoad = {handleLoadImage}
                        ref = {towersElement}
                        style = {towersStyle}

                    />
                    <img 
                        className = {!animation ? styles.mosque : `${styles.mosque} ${styles.mosqueAnime}`} 
                        alt = 'img' 
                        src = {mosque} 
                        style = {mosqueStyle}
                        onLoad = {handleLoadImage}
                        ref = {mosqueElement}
                    />
                </div>       
                <img 
                    className = {!animation ? styles.littleTowers : `${styles.littleTowers} ${styles.littleTowersAnime}`} 
                    alt = 'img' 
                    src = {littleTowers}
                    onLoad = {handleLoadImage}
                />
                <div className = {styles.footer}>
                    <div onClick = {handleDetails} className = {styles.details}>{lang.main.details}</div>
                    <div className = {styles.footerLeft}>
                        <div className = {styles.contactCont}>
                            <div className = {styles.iconsCont}>
                                <img className = {styles.icons} src = {phone} alt = 'phone'/>
                                <a href = ''/>
                            </div>
                            <div className = {styles.iconsCont}>
                                <img className = {styles.icons} src = {email} alt = 'email'/>
                                <a href = ''/>
                            </div>
                            <div className = {styles.iconsCont}>
                                <img className = {styles.icons} src = {question} alt = 'question'/>
                                <a href = ''/>
                            </div>
                        </div>
                        <div className = {styles.downloadCont}>
                            <div>{lang.main.download}</div>
                            <a href = ''/>
                            <img className = {styles.icons} src = {download} alt = 'download'/>
                        </div>
                    </div>
                    <div className = {styles.langCont}>
                        <div>ru</div>
                        <div>uz</div>
                        <div>en</div>
                    </div>
                </div>
            </div>}
        </div>
        
    )
}