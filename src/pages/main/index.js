import React, { useEffect, useState, useRef } from 'react'
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
import arrowLeft from '../../assets/icon/arrowLeft.ico'
import PulseLoader from "react-spinners/PulseLoader"
import { lang } from '../../languages'
// import { screenWidth } from './constants'
import { moveCenterMosque } from './animations-functions'
import { detailsText, detailsTextTitle } from './constants'
import { CustomScrollBar } from '../../components/custom-scroll-bar'
import '../../App.css'

export const Main = () => {

    const [animation, setAnimation] = useState(false)

    const [counterImg, setCounterImg] = useState(1)

    const [spinner, setSpinner] = useState(true)

    const [detailsTextToggle, setDetailsTextToggle] = useState(false)

    const [toggleHeaderFooter, setToggleHeaderFooter] = useState(false)

    const [aboutUsToggle, setAboutUsToggle] = useState(false)

    const [mosqueStyle, setMosqueStyle] = useState({
        transform: ''
    })

    const [towersStyle, setTowersStyle] = useState({
        transform: ''
    })

    const [littleTowersStyle, setLittleTowersStyle] = useState({
        transform: ''
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

    const mosqueElement = useRef(null)

    const towersElement = useRef(null)

    const littleTowersElement = useRef(null)

    const wayElement = useRef(null)

    const moonElement = useRef(null)

    const handleLoadImage = () => {
        setCounterImg(counterImg + 1)
        if (counterImg === 7) {
            setAnimation(true)
            setTimeout(() => {
                setSpinner(false)
                setTimeout(() => {
                    console.log(animation)
                    setToggleHeaderFooter(true)
                }, 5000)
            }, 50)
        }
    }

    const hanleAnimate = (transformMosque, transformTowers, transformLittleTowers) => {
        if (transformMosque) {
            const {xMosque = 0, yMosque = 0} = transformMosque
            setMosqueStyle({transform: `translate(-${xMosque}px, ${yMosque}px)`})
        }
        if (transformTowers) {
            const {xTowers = 0, yTowers = 0} = transformTowers
            setTowersStyle({transform: `translate(-${xTowers}px, ${yTowers}px)`})
        }
        if (transformLittleTowers) {
            const {xLittleTowers = 0, yLittleTowers = 0} = transformLittleTowers
            setLittleTowersStyle({transform: `translate(-${xLittleTowers}px, ${yLittleTowers})`})
        }
        
    }

    const handleDetails = () => {
        const mosqueCenter = moveCenterMosque(mosqueElement)
        setToggleHeaderFooter(false)
        hanleAnimate(
            {xMosque: mosqueCenter}, 
            {xTowers: mosqueCenter}, 
            {xLittleTowers: mosqueCenter}
        )
        // setMosqueStyle({transform: `translate(-${mosqueCenter}px, 0)`})
        // setTowersStyle({transform: `translate(-${mosqueCenter}px, 0)`})
        // setLittleTowersStyle({transform: `translate(-${mosqueCenter}px, 0)`})
        setTimeout(() => {
            setTimeout(() => {
                setTowersStyle({transform: `translate(-${mosqueCenter}px, 120px)`})
            }, 100);
            setWayStyle({transform: `scale(1.5, 1.0) translate(0px, 20px)`})
            setBackgoundStyle({transform: 'scale(1.4)'})
            setCloudsStyle({transform: 'scale(2.5)'})
            setLittleTowersStyle({transform: `translate(-${mosqueCenter}px, 100px`})
        }, 1000)
        setTimeout(() => {
            setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 100px`})
            setTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 200px`})
            setLittleTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 0.8}px, 200px`})
        }, 2000)
        setTimeout(() => {
            setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, -5px`})
        }, 3000)
        setTimeout(() => {
            setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 70px`})
            setTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 280px`})
            // setLittleTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 100px`})
            setWayStyle({transform: `scale(2.0, 1.0) translate(0px, 40px)`})
            setMoonStyle({transform: 'translate(700px, -700px)'})
        }, 4000)
        setTimeout(() => {
            setMosqueStyle({transform: `scale(0.5) translate(-${mosqueCenter * 2}px, 200px`})
            setTowersStyle({transform: `scale(0.5) translate(-${mosqueCenter * 2}px, 460px`})
            setLittleTowersStyle({transform: `scale(0.5) translate(-${mosqueCenter}px, 300px`})
            setBackgoundStyle({transform: 'scale(1.7)'})
            setWayStyle({transform: `scale(3.0, 1.0) translate(0px, 80px)`})
        }, 5000)
        setTimeout(() => {
            setDetailsTextToggle(true)
        }, 6000);
    }

    const handleDetailsToggle = () => {
        setDetailsTextToggle(false)
        reset()
    }

    const reset = () => {
        setMosqueStyle({transform: `scale(1.0) translate(0, 0)`})
        setBackgoundStyle({transform: 'scale(1.0)'})
        setCloudsStyle({transform: 'scale(1.0)'})
        setTowersStyle({transform: 'scale(1.0) translate(0, 0)'})
        setWayStyle({transform: `scale(1.0) translate(0, 0)`})
        setMoonStyle({transform: 'translate(0, 0)'})
        setLittleTowersStyle({transform: `scale(1.0) translate(0, 0)`})
        setToggleHeaderFooter(true)
    }

    const handleLetsGo = () => {
        if (!aboutUsToggle) {
            const translateLetsGo = 100
            const translateLetsGoSecondStep = 130
            setToggleHeaderFooter(false)
            setMosqueStyle({transform: `translate(${translateLetsGo}px, ${translateLetsGo}px)`})
            setTowersStyle({transform: `translate(${translateLetsGo}px, ${translateLetsGo}px)`})
            setLittleTowersStyle({transform: `translate(${translateLetsGo}px, ${translateLetsGo}px)`})
            setMoonStyle({transform: `translate(${translateLetsGo}px, ${translateLetsGo}px)`})
            setTimeout(() => {
                setWayStyle({transform: `translate(0px, 40px)`})
                setBackgoundStyle({transform: 'scale(1.4)'})
                setCloudsStyle({transform: 'scale(2.5)'})
                setMosqueStyle({transform: `translate(${translateLetsGoSecondStep}px, ${translateLetsGoSecondStep}px)`})
                setTowersStyle({transform: `translate(${translateLetsGoSecondStep}px, ${translateLetsGoSecondStep}px)`})
                setLittleTowersStyle({transform: `translate(${translateLetsGoSecondStep + 100}px, ${translateLetsGoSecondStep}px)`})
                setMoonStyle({transform: `translate(${translateLetsGoSecondStep}px, ${translateLetsGo}px)`})
            }, 1000)
            setTimeout(() => {
                setAboutUsToggle(true)
            }, 2000);
        } else {
            setAboutUsToggle(false)
            reset()
        }
    }

    return (
        <div className = {styles.mainCont}>
            <div className = {spinner ? styles.spinnerCont : `${styles.spinnerCont} ${styles.spinnerContAnime}`}>
                 <PulseLoader
                    size={20}
                    color={"#123abc"}
                    loading={spinner}
                /> 
            </div>
            <div className = {styles.cont}>
                <div className = {styles.headerCont}>
                    <div className = {!toggleHeaderFooter ? styles.headerButtonCont : `${styles.headerButtonCont} ${styles.headerButtonAnime}`}>
                        <div className = {styles.headerAboutUs}>{lang.main.aboutUs}</div>
                        <div onClick = {handleLetsGo} className = {styles.headerLetsgo}>{lang.main.letsgo}</div>
                    </div>
                </div>
                <div className = {!detailsTextToggle ? styles.detailsTextCont : `${styles.detailsTextCont} ${styles.opacity}`}>
                    <div>
                        <img 
                            onClick = {handleDetailsToggle} 
                            className = {!detailsTextToggle ? styles.detailsArrowLeft : `${styles.detailsArrowLeft} ${styles.opacity}`} 
                            src = {arrowLeft} 
                            alt = 'back'
                        />
                    </div>
                    <div className = {!detailsTextToggle ? styles.detailsText : `${styles.detailsText} ${styles.opacity}`}>
                        <div className = {styles.detailsTextTitle}>{detailsTextTitle}</div>
                        <div className = {styles.detailsTextContent}>{detailsText}</div>
                    </div>
                </div>
                <div className = {!aboutUsToggle ? styles.letsGoCont : `${styles.letsGoCont} ${styles.opacity}`}>
                    <div>
                        <img 
                            onClick = {handleLetsGo} 
                            className = {!aboutUsToggle ? styles.detailsArrowLeft : `${styles.detailsArrowLeft} ${styles.opacity}`} 
                            src = {arrowLeft} 
                            alt = 'back'
                        />
                    </div>
                    <div className = {styles.letsGoContent}>
                        <CustomScrollBar>
                            <div>{detailsText + detailsText + detailsText}</div>
                        </CustomScrollBar>
                    </div>
                </div>
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
                    style = {littleTowersStyle}
                    ref = {littleTowersElement}
                    onLoad = {handleLoadImage}
                />
                <div className = {!toggleHeaderFooter ? styles.footer : `${styles.footer} ${styles.footerAnime}`}>
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
            </div>
        </div>
        
    )
}