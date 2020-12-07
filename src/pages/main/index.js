import React, { useState, useRef, useCallback } from 'react'
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

    const [backgroundStyle, setBackgroundStyle] = useState({
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

    const handleAnimate = useCallback((
        transformMosque, 
        transformTowers, 
        transformLittleTowers,
        transformWay,
        transformBackground,
        transformClouds,
        transformMoon
    ) => {
        if (transformMosque) {
            const {xMosque = 0, yMosque = 0, scaleX = '', scaleY = ''} = transformMosque
            setMosqueStyle({
                transform: `${(scaleX || scaleY) ? `scale(${scaleX}, ${scaleY})` : ''} translate(-${xMosque}px, ${yMosque}px)`
            })
        }
        if (transformTowers) {
            const {xTowers = 0, yTowers = 0, scaleX = '', scaleY = ''} = transformTowers
            setTowersStyle({
                transform: `${(scaleX || scaleY) ? `scale(${scaleX}, ${scaleY})` : ''} translate(-${xTowers}px, ${yTowers}px)`
            })
        }
        if (transformLittleTowers) {
            const {xLittleTowers = 0, yLittleTowers = 0, scaleX = '', scaleY = ''} = transformLittleTowers
            setLittleTowersStyle({
                transform: `${(scaleX || scaleY) ? `scale(${scaleX}, ${scaleY})` : ''} translate(-${xLittleTowers}px, ${yLittleTowers}px)`
            })
        }
        if (transformWay) {
            const {xWay = 0, yWay = 0, scaleX = '', scaleY = ''} = transformWay
            setWayStyle({
                transform: `${(scaleX || scaleY) ? `scale(${scaleX}, ${scaleY})` : ''} translate(${xWay}px, ${yWay}px)`
            })
        }
        if (transformBackground) {
            const {scaleX = '', scaleY = ''} = transformBackground
            setBackgroundStyle({
                transform: `${(scaleX || scaleY) ? `scale(${scaleX}, ${scaleY})` : ''}`
            })
        }
        if (transformClouds) {
            const {scaleX, scaleY} = transformClouds
            setCloudsStyle({transform: `scale(${scaleX}, ${scaleY})`})
        }
        if (transformMoon) {
            const {xMoon, yMoon} = transformClouds
            setMoonStyle({transform: `translate(${xMoon}px, -${yMoon}px)`})
        }
        
    },[])

    const handleDetails = () => {
        const mosqueCenter = moveCenterMosque(mosqueElement)
        setToggleHeaderFooter(false)
        handleAnimate(
            {xMosque: mosqueCenter}, 
            {xTowers: mosqueCenter}, 
            {xLittleTowers: mosqueCenter}
        )
        // setMosqueStyle({transform: `translate(-${mosqueCenter}px, 0)`})
        // setTowersStyle({transform: `translate(-${mosqueCenter}px, 0)`})
        // setLittleTowersStyle({transform: `translate(-${mosqueCenter}px, 0)`})
        setTimeout(() => {
            setTimeout(() => {
                handleAnimate(false, {xTowers: mosqueCenter, yTowers: 120})
                // setTowersStyle({transform: `translate(-${mosqueCenter}px, 120px)`})
            }, 100)
            handleAnimate(
                false,
                false,
                {xLittleTowers: mosqueCenter, yLittleTowers: 100},
                {xWay: 0, yWay: 20, scaleX: 1.5, scaleY: 1.0},
                {scaleX: 1.4, scaleY: 1.4},
                {scaleX: 2.5, scaleY: 2.5}
            )
            // setWayStyle({transform: `scale(1.5, 1.0) translate(0px, 20px)`})
            // setBackgroundStyle({transform: 'scale(1.4)'})
            // setCloudsStyle({transform: 'scale(2.5)'})
            // setLittleTowersStyle({transform: `translate(-${mosqueCenter}px, 100px`})
        }, 1000)
        setTimeout(() => {
            console.time('funct')
            handleAnimate(
                {
                    xMosque: mosqueCenter * 1.4,
                    yMosque: 100,
                    scaleX: 0.7,
                    scaleY: 0.7
                },
                {
                    xTowers: mosqueCenter * 1.4,
                    yTowers: 200,
                    scaleX: 0.7,
                    scaleY: 0.7
                },
                {
                    xLittleTowers: mosqueCenter * 0.8,
                    yLittleTowers: 200,
                    scaleX: 0.7,
                    scaleY: 0.7
                }
            )
            console.timeEnd('funct')
            // console.time('no')
            // setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 100px`})
            // setTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 200px`})
            // setLittleTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 0.8}px, 200px`})
            // console.timeEnd('no')
        }, 2000)
        setTimeout(() => {
            handleAnimate({
                xMosque: mosqueCenter * 1.4,
                yMosque: -5,
                scaleX: 0.7,
                scaleY: 0.7
            })
            // setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, -5px`})
        }, 3000)
        setTimeout(() => {
            handleAnimate(
                {
                    xMosque: mosqueCenter * 1.4,
                    yMosque: 70,
                    scaleX: 0.7,
                    scaleY: 0.7
                },
                {
                    xTowers: mosqueCenter * 1.4,
                    yTowers: 280,
                    scaleX: 0.7,
                    scaleY: 0.7
                },
                false,
                {
                    xWay: 0,
                    yWay: 40,
                    scaleX: 2.0,
                    scaleY: 1.0
                },
                false,
                false,
                {
                    xMoon: 700,
                    yMoon: -700
                }
            )
            // setMosqueStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 70px`})
            // setTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 280px`})
            // setLittleTowersStyle({transform: `scale(0.7) translate(-${mosqueCenter * 1.4}px, 100px`})
            // setWayStyle({transform: `scale(2.0, 1.0) translate(0px, 40px)`})
            // setMoonStyle({transform: 'translate(700px, -700px)'})
        }, 4000)
        setTimeout(() => {
            handleAnimate(
                {
                    xMosque: mosqueCenter * 2,
                    yMosque: 200,
                    scaleX: 0.5,
                    scaleY: 0.5
                },
                {
                    xTowers: mosqueCenter * 2,
                    yTowers: 460,
                    scaleX: 0.5,
                    scaleY: 0.5
                },
                {
                    xLittleTowers: mosqueCenter * 2,
                    yLittleTowers: 300,
                    scaleX: 0.5,
                    scaleY: 0.5
                },
                {
                    xWay: 0,
                    yWay: 80,
                    scaleX: 3.0,
                    scaleY: 1.0
                },
                {
                    scaleX: 1.7,
                    scaleY: 1.7
                }
            )
            // setMosqueStyle({transform: `scale(0.5) translate(-${mosqueCenter * 2}px, 200px`})
            // setTowersStyle({transform: `scale(0.5) translate(-${mosqueCenter * 2}px, 460px`})
            // setLittleTowersStyle({transform: `scale(0.5) translate(-${mosqueCenter}px, 300px`})
            // setBackgroundStyle({transform: 'scale(1.7)'})
            // setWayStyle({transform: `scale(3.0, 1.0) translate(0px, 80px)`})
        }, 5000)
        setTimeout(() => {
            setDetailsTextToggle(true)
        }, 6000)
    }

    const handleDetailsToggle = () => {
        setDetailsTextToggle(false)
        reset()
    }

    const reset = () => {
        setMosqueStyle({transform: `scale(1.0) translate(0, 0)`})
        setBackgroundStyle({transform: 'scale(1.0)'})
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
                setBackgroundStyle({transform: 'scale(1.4)'})
                setCloudsStyle({transform: 'scale(2.5)'})
                setMosqueStyle({transform: `translate(${translateLetsGoSecondStep}px, ${translateLetsGoSecondStep}px)`})
                setTowersStyle({transform: `translate(${translateLetsGoSecondStep}px, ${translateLetsGoSecondStep}px)`})
                setLittleTowersStyle({transform: `translate(${translateLetsGoSecondStep + 100}px, ${translateLetsGoSecondStep}px)`})
                setMoonStyle({transform: `translate(${translateLetsGoSecondStep}px, ${translateLetsGo}px)`})
            }, 1000)
            setTimeout(() => {
                setAboutUsToggle(true)
            }, 2000)
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