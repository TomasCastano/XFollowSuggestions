import { useState } from 'react'
import './assets/css/App.css'
import FollowCard from './Components/FollowCard/FollowCard'
import UnfollowModal from './Components/UnfollowModal/UnfollowModal'

function App() {

    const users = [
        {name: 'Kylian Mbappé', username: 'KMbappe', isFollowing: false},
        {name: 'Bill Gates', username: 'BillGates', isFollowing: false},
        {name: 'Elon Musk', username: 'elonmusk', isFollowing: false},
        {name: 'Cristiano Ronaldo', username: 'Cristiano', isFollowing: false},
    ]

    const [openModal, setOpenModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

    const handleShowModal = (user) => {
        if (openModal) return
        setSelectedUser(user)
        setOpenModal(true)
    }

    return (
        <div className='App grid place-content-center min-h-screen w-screen'>
            <section className="follow-sugestion flex flex-col gap-5 min-w-sm p-5 border-1 border-neutral-800 rounded-2xl">
                <strong className='text-xl'>A quién seguir</strong>
                {users.map(user => (
                    <FollowCard
                        key={user.username}
                        name={user.name}
                        username={user.username}
                        isFollowing={user.isFollowing}
                        onClickUnfollow={handleShowModal}
                    />
                ))}
            </section>
            <UnfollowModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                selectedUser={selectedUser}
            >

            </UnfollowModal>
        </div>
    )
}

export default App
