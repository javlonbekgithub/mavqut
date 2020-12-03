import { screenWidth } from "./constants"

export const moveCenterMosque = ({ current: {offsetLeft, clientWidth} }) => {
    return ((((screenWidth - clientWidth) / 2) - 160) - offsetLeft) 
}
