import './assets/css/App.css'
import FollowCard from './Components/FollowCard/FollowCard'

function App() {

    const users = [
        {
            name: 'Kylian Mbappé',
            username: 'KMbappe',
            isFollowing: false
        },
        {
            name: 'Bill Gates',
            username: 'BillGates',
            isFollowing: false
        },
        {
            name: 'Jeff Bezos',
            username: 'JeffBezos',
            isFollowing: false
        },
        {
            name: 'Cristiano Ronaldo',
            username: 'Cristiano',
            isFollowing: false
        }
    ]

    return (
        <div className='App grid place-content-center min-h-screen w-screen'>
            <section className="follow-sugestion flex flex-col gap-5 min-w-sm p-5 border-1 border-neutral-800 rounded-sm">
                <strong className='text-xl'>A quién seguir</strong>
                {users.map(user => <FollowCard key={user.username} name={user.name} username={user.username} isFollowing={user.isFollowing} />)}
            </section>
        </div>
    )
}

export default App
