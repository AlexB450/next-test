import { Dispatch, SetStateAction } from 'react'

export interface IUser {
	id: number
	name: string
}
export interface IAuthUser {
	user: IUser
	setUser: Dispatch<SetStateAction<IUser>>
}
