import { Input } from "@material-tailwind/react";
import {useThemeStore} from "../../store/theme";
import {useEffect, useState} from "react";


export default function ThemedTextField ({ colors, ...props}) {
    const { currentTheme } = useThemeStore()
    const [colorInput, setColorInput] = useState('')

    const setThemedColor = () => {
        const defaults = {
            light: 'black',
            dark: 'white',
        }
        if (colors) {
            setColorInput(colors[currentTheme])
            return
        }
        setColorInput(defaults[currentTheme])
    }

    useEffect(() => {
        setThemedColor()
    }, [currentTheme]);

    return (
        <Input
            color={colorInput.toString()}
            {...props}
        />
    )
}
