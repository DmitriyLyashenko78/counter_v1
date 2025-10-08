import {Button} from "./Button.tsx";


type CounterPropsType = {
    maxValue: number
    startValue:number
    counterValue: number
    incrementCounter: () => void
    resetCounter: () => void
}

export const Counter = ( {maxValue, startValue, counterValue, incrementCounter, resetCounter}:CounterPropsType ) => {

    console.log(maxValue, startValue, counterValue)

    return (

            <div className={"counterBlock"}>
                <div className={"counterDisplay"}><span className={counterValue === maxValue ? "red" : ""}>{counterValue}</span></div>
                <div className={"counterButtons"}>
                    <Button name={"inc"} disable={ counterValue > startValue && counterValue === maxValue} onClick={incrementCounter} />
                    <Button name={"reset"} disable={ counterValue <= startValue} onClick={resetCounter} />
                </div>
            </div>

    );
};

