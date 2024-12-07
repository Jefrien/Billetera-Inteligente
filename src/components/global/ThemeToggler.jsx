'use client';
import { Button } from '../../components/material'
import { useEffect, useState } from 'react';
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";
import {useThemeStore} from "../../store/theme";

export default function ThemeToggler() {

    const [ isDark, setIsDark ] = useState(false)
    const { setTheme } = useThemeStore()

    const handleClickToggler = (e) => {
        e.preventDefault()

        localStorage.setItem('theme', isDark ? 'light' : 'dark')
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark', !isDark)
        setTheme(isDark ? 'light' : 'dark')
    }

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )

        // get the current theme
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        localStorage.setItem('theme', currentTheme)
        setIsDark(currentTheme === 'dark')
        setTheme(currentTheme)


    }, [])

    return (
            <Button onClick={handleClickToggler} variant='text' className='rounded-full h-12 w-12 p-0 text-lg text-black dark:text-white flex items-center justify-center fill-white' >
               { !isDark ? <SunIcon /> : <MoonIcon /> }
            </Button>
    )
}
