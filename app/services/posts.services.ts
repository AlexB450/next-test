import axios from 'axios'
import { IPost } from '../components/screens/posts/posts.data'

export const postsServices = {
	async getAllPosts() {
		const {
			data: { posts },
		} = await axios.get<{ posts: IPost[] }>(
			'https://dummyjson.com/posts?skip=141'
		)
		return posts
	},
	async getPostById(index?: number) {
		if (!index) {
			console.log('ggg')
			return
		}
		const { data: post } = await axios.get<IPost>(
			`https://dummyjson.com/posts/${index}`
		)
		return post
	},
	async createPost(newPost: IPost) {
		const { data: post } = await axios.post(
			'https://dummyjson.com/posts/add',
			newPost
		)
		return post
	},
}
