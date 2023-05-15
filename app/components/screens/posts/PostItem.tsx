import React, { FC } from 'react'
import Link from 'next/link'

interface IPostItem {
	title: string
	tags: string[]
	id: number
}

const PostItem: FC<IPostItem> = ({ title, tags, id }) => {
	return (
		<div
			style={{
				background: '#2c2c2c',
				color: '#fff',
				margin: '20px',
				padding: '20px',
			}}
		>
			<h3>{title}</h3>
			<div
				style={{
					margin: '10px',
				}}
			>
				{tags.map((tag, i) => (
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
			<Link href='/post/[...slug]' as={`/post/${id}`}>
				Show More
			</Link>
		</div>
	)
}

export default React.memo(PostItem)
