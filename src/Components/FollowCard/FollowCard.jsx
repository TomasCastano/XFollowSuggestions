import { useState } from "react"

const FollowCard = ({ user, onFollow, onUnfollow }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <>
        <article className='follow-card flex items-center justify-between w-full'>
            <header className='flex items-center text-sm gap-2'>
                <img
                    className='avatar rounded-full w-[40px] h-[40px]'
                    src={`https://unavatar.io/x/${user.username}`}
                    alt={user.username}
                />
                <div className="follow-info flex flex-col text-[15px]">
                    <strong>{user.name}</strong>
                    <span className='opacity-60'>@{user.username}</span>
                </div>
            </header>
            <aside>
                <button
                    className={`follow-button ml-[16px] text-sm font-semibold py-[6px] px-[16px] rounded-full hover:cursor-pointer transition-all duration-300 ease-in-out   
                        ${user.isFollowing
                            ? 'bg-white text-gray-950 border-1 border-neutral-200 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500 active:bg-red-500/40 dark:bg-black dark:text-white dark:border-1 dark:border-gray-500'
                            : 'bg-gray-950 text-white border-none hover:bg-stone-900 active:bg-stone-800 dark:bg-white dark:text-gray-950 border-1 dark:border-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-gray-950 dark:active:bg-neutral-300'
                        }`
                    }
                    onClick={user.isFollowing ? onUnfollow : onFollow}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {user.isFollowing ? isHovered ? 'Dejar de seguir' : 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
        </>
    )
}

export default FollowCard