import { AuthContext, defaultUser } from '@/app/provider/AuthProvider'
import { FC, useContext } from 'react'

const HeaderUser: FC = () => {
	const { user, setUser } = useContext(AuthContext)
	return (
		<div
			style={{
				color: '#fff',
				display: 'flex',
			}}
		>
			{user.id !== 0 ? (
				<>
					<p>{user.name}</p>{' '}
					<button onClick={() => setUser(defaultUser)}>logout</button>{' '}
				</>
			) : (
				<button
					onClick={() =>
						setUser(() => ({
							id: 1,
							name: 'Alex',
						}))
					}
				>
					login
				</button>
			)}
		</div>
	)
}

export default HeaderUser
