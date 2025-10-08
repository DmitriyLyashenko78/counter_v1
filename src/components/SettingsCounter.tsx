import {Button} from "./Button.tsx";
import {type ChangeEvent, useState} from "react";

type SettingsCounterPropsType = {
    maxValue: number
    startValue: number
    setStartSettings: (start: number) => void
    setMaxSettings: (max:number) => void
    saveSettings: () => void
}

export const SettingsCounter = ( {setStartSettings, setMaxSettings, saveSettings, startValue, maxValue}:SettingsCounterPropsType ) => {
    const[startSetting, setStartSetting] = useState<number>(startValue)
    const[maxtSetting, maxStartSetting] = useState<number>(maxValue)

    const chengeMaxSetting = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue: number = +e.currentTarget.value
        maxStartSetting(newMaxValue)
        setMaxSettings(newMaxValue)
    }
    const chengeStartSetting = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue: number = +e.currentTarget.value
        setStartSetting(newStartValue)
        setStartSettings(newStartValue)
    }
    return (

        <div className={"counterBlock"}>
            <div className={"counterDisplaySet"}>
                <div className={"settingInputWrapper"}>
                    <div>
                        <span className={"settingSpan"}>max value:</span>
                    </div>
                    <div>
                        <input
                            value={maxtSetting}
                            onChange={chengeMaxSetting}
                            type={"number"}
                            className={"input"}/>
                    </div>

                </div>
                <div className={"settingInputWrapper"}>
                    <div>
                        <span className={"settingSpan"}>start value:</span>
                    </div>
                    <div>
                        <input
                            value={startSetting}
                            onChange={chengeStartSetting}
                            type={"number"}
                            className={"input"}
                        />
                    </div>
                </div>
            </div>
            <div className={"counterButtons"}>
                <Button name={"set"} disable={false} onClick={saveSettings}/>

            </div>
        </div>

    );
};
