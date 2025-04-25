import { useState } from 'react'
import './assets/css/App.css'
import FollowCard from './Components/FollowCard/FollowCard'
import UnfollowModal from './Components/UnfollowModal/UnfollowModal'
import userList from './data/userList'
import ThemeSwitcher from './Components/ThemeSwitcher/ThemeSwitcher'

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
        <div className='App relative grid place-content-center min-h-screen w-screen
            dark:bg-black dark:text-white'>
            <ThemeSwitcher />
            <section
                className="follow-sugestion flex flex-col gap-5 min-w-sm p-5 border-1 border-neutral-200 rounded-2xl
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
        </div>
    )
}

export default App
