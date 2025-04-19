import { useState } from "react"

const FollowCard = ({ name, username, isFollowing }) => {

    const [isFollowingUser, setIsFollowing] = useState(isFollowing)
    const [isHovered, setIsHovered] = useState(false)

    const handleFollow = () => {
        setIsFollowing(!isFollowingUser)
    }

    return (
        <>
        <article className='follow-card flex items-center justify-between w-full'>
            <header className='flex items-center text-sm gap-2'>
                <img
                    className='avatar rounded-full w-[48px] h-[48px]'
                    src={`https://unavatar.io/${username}`}
                    alt={username}
                />
                <div className="follow-info flex flex-col">
                    <strong>{name}</strong>
                    <span className='opacity-60'>@{username}</span>
                </div>
            </header>
            <aside>
                <button
                    className={`follow-button ml-[16px] text-sm font-bold py-[6px] px-[16px] rounded-full hover:cursor-pointer transition-all duration-300 ease ${isFollowingUser ? 'bg-black text-white border-1 border-neutral-800 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500 active:bg-red-500/40' : 'bg-white text-black border-none hover:bg-gray-200 hover:text-neutral-800 active:bg-gray-300'}`}
                    onClick={handleFollow}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isFollowingUser ? isHovered ? 'Dejar de seguir' : 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
        </>
    )
}

export default FollowCard