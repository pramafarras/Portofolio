'use client'

import React, { useState, useEffect } from 'react';
import { Loader2, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';


export default function ThemeSwitch(){
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme} = useTheme()

    useEffect(() => {
        setMounted(true); // useEffect muncul kalo dipake client, setMounted buat mastiin

    }, [])

    const switchTheme = () => {
        return (
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        )
    }

    if (!mounted) {
        return (
            <div className="flex items-center justify-center">
                <Loader2 className="animate-spin" size={24} />
            </div>
        )
    }

    return (
        <div onClick={() => switchTheme()} className="right-4 bottom-8 shadow-lg sm:left-8 sm:bottom-8 fixed cursor-pointer bg-dark hover:bg-secondary dark:bg-primary dark:hover:bg-amber-400 p-3 rounded-full z-50">
        {resolvedTheme === 'dark'
        ? <Sun onClick={() => setTheme('light')} className='text-black'></Sun>
        : <Moon onClick={() => setTheme('dark')} className='text-white'></Moon>}
        </div>
    ) 
}