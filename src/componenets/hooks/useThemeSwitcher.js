import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const [mode, setMode] = useState(null);

    useEffect(() => {
        const prefersDarkQuery = '(prefers-color-scheme: dark)';
        const mediaQuery = window.matchMedia(prefersDarkQuery);
        const userPref = window.localStorage.getItem('theme');
        const systemPref = mediaQuery.matches ? 'dark' : 'light';
        const initialMode = userPref || systemPref;

        setMode(initialMode);

        const handleChange = () => {
            const currentPref = window.localStorage.getItem('theme');
            let check = currentPref || (mediaQuery.matches ? 'dark' : 'light');

            setMode(check);

            if (check === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        handleChange();
        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    useEffect(() => {
        if (mode) {
            if (mode === 'dark') {
                document.documentElement.classList.add('dark');
                window.localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                window.localStorage.setItem('theme', 'light');
            }
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitcher