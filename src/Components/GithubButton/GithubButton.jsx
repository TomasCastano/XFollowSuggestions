import GitHubIcon from '@mui/icons-material/GitHub';

const GithubButton = () => {
    return (
        <a  
            href='https://github.com/TomasCastano/XFollowSuggestions'
            target='_blank'
            rel='noopener noreferrer'
            title='Repositorio en GitHub'
            className='absolute top-5 left-5 flex items-center justify-center gap-2 border-1 border-neutral-300 p-3 text-neutral-700 rounded-sm outline-none
                hover:bg-neutral-100 hover:text-neutral-800 hover:cursor-pointer transition-all duration-300 ease-in-out
                dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-white'
        >
            <GitHubIcon />
        </a>
    )
}

export default GithubButton