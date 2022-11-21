import { useState } from "react"


export const useAdd = (value = 0, maxCount, minCounter = 0) => {

    const [counter, setCounter] = useState(value)

    const increment = (value) => {
        let newValue = Math.max(counter + value, minCounter)

        if (maxCount) {
            newValue = Math.min(newValue, maxCount)
        }

        setCounter(newValue)

    }
    const reset = () => {
        setCounter(value = minCounter)
    }
    return {
        counter,
        maxCount:maxCount,

        increment,
        reset
    }
} 