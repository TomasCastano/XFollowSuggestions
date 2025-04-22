const MainButton = ({ className, onClick, theme, children }) => {
    return (
        <button
            onClick={onClick}
            className={`main-button ${theme} ${className}
                text-black py-[6px] px-[16px] rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out 
                ${theme === 'primary' && 'bg-white hover:bg-gray-200 active:bg-gray-300 hover:text-neutral-800'}  
                ${theme === 'secondary' && 'text-white bg-black hover:bg-white/10 border-1 border-neutral-700 active:bg-white/20'}
            `}
        >
            {children}
        </button>
    )
}

export default MainButton