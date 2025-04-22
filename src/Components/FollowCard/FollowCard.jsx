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
                            ? 'bg-black text-white border-1 border-neutral-800 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500 active:bg-red-500/40'
                            : 'bg-white text-black border-none hover:bg-gray-200 hover:text-neutral-800 active:bg-gray-300'
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