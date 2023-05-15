import { IPost } from '@/app/provider/PostsProvider'
import { FC } from 'react'
import Layout from '../../layout/Layout'

const FullPost: FC<{ post: IPost }> = ({ post }) => {
	const { title, body, tags } = post
	return (
		<Layout title='post' description='selected post'>
			<div
				style={{
					textAlign: 'center',
					margin: '50px',
				}}
			>
				<h2>Full Post</h2>
				<h4>{title}</h4>
				<div>{body}</div>
				{tags?.map((tag, i) => (
					<span
						key={i}
						style={{
							background: '#AE7777',
							padding: '3px',
							margin: '10px',
						}}
					>
						{tag}
					</span>
				))}
			</div>
		</Layout>
	)
}

export default FullPost
