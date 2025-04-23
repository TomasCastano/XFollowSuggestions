import { useTheme } from '../../context/ThemeContext'

const ThemeSwitcher = () => {
    
    const { theme, changeTheme } = useTheme()

    return (
        <div className='flex flex-col gap-4'>
            <p>Tema Actual: {theme}</p>
            <button
                onClick={() => changeTheme('light')}
                className='p-6 py-2 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-black'
            >
                Claro
            </button>
            <button
                onClick={() => changeTheme('dark')}
                className='p-6 py-2 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-black'
            >
                Oscuro
            </button>
            <button
                onClick={() => changeTheme('system')}
                className='p-6 py-2 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-black'
            >
                Sistema
            </button>
        </div>
    )
}

export default ThemeSwitcher