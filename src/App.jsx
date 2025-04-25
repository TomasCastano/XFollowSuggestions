import { useState } from 'react'
import './assets/css/App.css'
import FollowCard from './Components/FollowCard/FollowCard'
import UnfollowModal from './Components/UnfollowModal/UnfollowModal'
import userList from './data/userList'
import ThemeSwitcher from './Components/ThemeSwitcher/ThemeSwitcher'
import GithubButton from './Components/GithubButton/GithubButton'

function App() {

    const [users, setUsers] = useState(userList)
    const [openModal, setOpenModal] = useState(false)
    const [userToUnfollow, setUserToUnfollow] = useState(null)
    
    const handleFollowToggle = (username) => {
        setUsers((prev) =>
            prev.map((user) => 
                user.username === username ? {...user, isFollowing: !user.isFollowing} : user
            )
        )
    }

    const handleUnfollowClick = (user) => {
        setUserToUnfollow(user)
        setOpenModal(true)
    }

    const confirmUnfollow = () => {
        if (userToUnfollow) {
            handleFollowToggle(userToUnfollow.username)
            setUserToUnfollow(null)
            setOpenModal(false)
        }
    }

    const cancelUnfollow = () => {
        setUserToUnfollow(null)
        setOpenModal(false)
    }
    
    return (
        <div className='App relative grid place-content-center h-dvh h-[100vh] w-screen
            dark:bg-black dark:text-white'>
            <GithubButton />
            <ThemeSwitcher />
            <section
                className="follow-sugestion flex flex-col gap-5 min-w-[320px] sm:min-w-sm p-5 border-1 border-neutral-200 rounded-2xl
                    dark:border-neutral-800">
                <strong className='text-xl'>A quién seguir</strong>
                {users.map(user => (
                    <FollowCard
                        key={user.username}
                        user={user}
                        onFollow={() => handleFollowToggle(user.username)}
                        onUnfollow={() => handleUnfollowClick(user)}
                    />
                ))}
            </section>
            <UnfollowModal
                open={openModal}
                user={userToUnfollow}
                onClose={() => setOpenModal(false)}
                onConfirm={confirmUnfollow}
                onCancel={cancelUnfollow}
            />
            <footer className="absolute block bottom-5 text-xs opacity-50 text-center w-full">
                Desarrollado por <a
                    href="https://www.linkedin.com/in/tomascastanochica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='decoration-none hover:underline transition-all duration-300 ease-in-out'
                >
                    Tomás Castaño
                </a>
            </footer>
        </div>
    )
}

export default App
