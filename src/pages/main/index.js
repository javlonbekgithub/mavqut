import React, { useEffect, useState } from 'react'
import { useReadyStateEffect } from "react-ready-state-effect"
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

// let counterImg = 0

export const Main = () => {

    const [animation, setAnimation] = useState(false)

    const [counterImg, setCounterImg] = useState(1)

    const [spinner, setSpinner] = useState(true)

    useEffect (() => {
        setTimeout(() => {
            setSpinner(false)
        }, 1000);
    },[])



    // useReadyStateEffect(() => setSpinner(false),[])

    const handleLoadImage = () => {
        setCounterImg(counterImg + 1)
        counterImg === 7 && setAnimation(true)
    }

    const handleDetails = () => {
        
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