import { useTheme } from '../../context/ThemeContext'
import { Listbox } from '@headlessui/react'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'

const themes = [
    { value: 'light', label: 'Claro', icon: <LightModeRoundedIcon /> },
    { value: 'dark', label: 'Oscuro', icon: <NightlightRoundIcon /> },
    { value: 'system', label: 'Sistema', icon: <DesktopWindowsRoundedIcon /> },
]

export default function ThemeSwitcher() {
    const { theme, changeTheme } = useTheme()

    const currentTheme = themes.find(t => t.value === theme)

    return (
        <div className="absolute top-5 right-5">
            <Listbox value={theme} onChange={changeTheme}>
                <Listbox.Button
                    title='Cambiar tema'
                    className="flex items-center justify-center gap-2 border-1 border-neutral-300 p-3 w-full text-left text-neutral-700 rounded-sm outline-none hover:bg-neutral-100 hover:text-yellow-500 transition-all duration-300 ease-in-out
                        dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-white"
                >
                    {currentTheme?.icon}
                </Listbox.Button>
                <Listbox.Options
                    className="mt-1 shadow-lg rounded-sm outline-none"
                >
                {themes.map(t => (
                    <Listbox.Option
                        key={t.value}
                        value={t.value}
                        title={t.label}
                        className="bg-white p-3 hover:bg-slate-100 flex items-center gap-2 text-neutral-700 border-1 border-neutral-300 hover:text-neutral-800 transition-all duration-300 ease-in-out
                            first:rounded-t-sm first:border-b-0 last:rounded-b-sm last:border-t-0
                            dark:bg-black dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-white"
                    >
                        {t.icon}
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}