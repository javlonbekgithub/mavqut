import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './index.module.sass'

export const CustomScrollBar = ({children}) => {
    return (
        <Scrollbars
            // autoHide
            renderTrackVertical={props => <div {...props} className = {styles.track}/>}
            renderThumbVertical={props => <div {...props} className = {styles.thumb}/>}
            renderView={props => <div {...props} className = {styles.scrollContent}/>}
        >
            {children}
        </Scrollbars>
      )
}
