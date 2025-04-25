const MainButton = ({ className, onClick, theme, children }) => {
    return (
        <button
            onClick={onClick}
            className={`main-button ${theme} ${className}
                py-[6px] px-[16px] rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out 
                ${theme === 'primary' && 'bg-black text-white hover:bg-gray-900 active:bg-gray-800 hover:text-neutral-100 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:active:bg-gray-300 dark:hover:text-neutral-800'}  
                ${theme === 'secondary' && 'text-black hover:bg-gray-200 active:bg-gray-300 border-1 border-neutral-300 dark:text-white dark:bg-black dark:hover:bg-white/10 dark:border-1 dark:border-neutral-700 dark:active:bg-white/20 '}
            `}
        >
            {children}
        </button>
    )
}

export default MainButton