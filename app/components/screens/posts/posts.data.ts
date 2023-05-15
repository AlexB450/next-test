import { useState } from 'react'

export interface IPost {
	id: number
	title: string
	body: string
	userId: number
	tags: string[]
	reactions: number
}

let postsData: IPost[] = []
export const usePostsData = () => {
	const [posts, setPosts] = useState<IPost[]>(postsData)
	const addPost = (newPost: IPost): void => {
		setPosts(prev => {
			postsData = [newPost, ...prev]
			return [newPost, ...prev]
		})
	}
	const resetPosts = (posts: IPost[]) => {
		postsData = posts
		return setPosts(() => posts)
	}
	return { posts, resetPosts, addPost }
}
