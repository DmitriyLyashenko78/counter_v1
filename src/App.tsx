import './App.css'
import {Counter} from "./components/Counter.tsx";
import {useEffect, useState} from "react";
import {SettingsCounter} from "./components/SettingsCounter.tsx";


function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [counterValue, setcounterValue] = useState<number>(startValue)

    useEffect(() => {
        let counterValueAsString = localStorage.getItem('counterValue')
        if(counterValueAsString) {
            let newCounterValue = JSON.parse(counterValueAsString)
            setcounterValue(newCounterValue)
        }
    }, []);

    useEffect( ()=> {
            localStorage.setItem( 'counterValue', JSON.stringify(counterValue) )
    }, [counterValue]  )

    const incrementCounter = () => {
        const newCounterValue = +counterValue + 1
        setcounterValue(newCounterValue)
    }
    const resetCounter  = () => {
        setcounterValue(startValue)
    }

    const setMaxSettings = (max: number) => {
        setMaxValue(max)
    }
    const setStartSettings = (start: number) => {
        setStartValue(start)
    }

    return (
        <div className={"container"}>
            <SettingsCounter
                maxValue = {maxValue}
                startValue = {startValue}
                setStartSettings = {setStartSettings}
                setMaxSettings = {setMaxSettings}
                saveSettings = {resetCounter}
            />
            <Counter
                maxValue = {maxValue}
                startValue = {startValue}
                counterValue = {counterValue}
                incrementCounter = {incrementCounter}
                resetCounter = {resetCounter}
            />
        </div>
    )
}

export default App
