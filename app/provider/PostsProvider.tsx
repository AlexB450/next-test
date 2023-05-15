import { useQuery } from '@tanstack/react-query'
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState,
} from 'react'
import { postsServices } from '../services/posts.services'

export interface IPost {
	id: number
	title: string
	body: string
	userId: number
	tags: string[]
	reactions: number
}
interface IPostsContext {
	posts: IPost[] | []
	setPosts: Dispatch<SetStateAction<IPost[]>>
}
const defaultState: IPostsContext = {
	posts: [],
	setPosts: () => {},
}
export const PostsContext = createContext<IPostsContext>(defaultState)

export const PostsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [posts, setPosts] = useState<IPost[]>([])
	const {} = useQuery({
		queryKey: ['posts'],
		queryFn: postsServices.getAllPosts,
		onSuccess: data => setPosts(data),
	})
	return (
		<PostsContext.Provider value={{ posts, setPosts }}>
			{children}
		</PostsContext.Provider>
	)
}
