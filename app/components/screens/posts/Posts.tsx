import { PostsContext } from '@/app/provider/PostsProvider'
import { FC, useContext, useMemo, useState } from 'react'
import Layout from '../../layout/Layout'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
const Posts: FC = () => {
	const [value, setValue] = useState<string>('')
	const { posts, setPosts } = useContext(PostsContext)
	const filteredPosts = useMemo(
		() =>
			posts.filter(item =>
				item.title.toLowerCase().includes(value.toLowerCase())
			),
		[value, posts]
	)

	return (
		<Layout title='posts' description='all post'>
			{posts.length ? (
				<div>
					<h1>Posts</h1>
					<CreatePost setPosts={setPosts} />
					<input
						style={{
							margin: '20px',
						}}
						type='text'
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder='search post'
					/>
					{filteredPosts.map(post => (
						<PostItem
							key={post.id}
							tags={post.tags}
							title={post.title}
							id={post.id}
						/>
					))}
				</div>
			) : (
				<div style={{ textAlign: 'center', fontSize: '20px' }}>Loading ...</div>
			)}
		</Layout>
	)
}

export default Posts
