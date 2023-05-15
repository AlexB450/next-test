import { FC, PropsWithChildren, createContext, useState } from 'react'
import { IAuthUser, IUser } from './auth.interface'

export const defaultUser = {
	id: 0,
	name: '',
}
const defaultState: IAuthUser = {
	user: defaultUser,
	setUser: () => {},
}
export const AuthContext = createContext<IAuthUser>(defaultState)
const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<IUser>(defaultUser)
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
