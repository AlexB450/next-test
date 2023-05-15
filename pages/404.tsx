import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'

const NotFound: FC = () => {
	return (
		<div>
			<Head>
				<title>not found</title>
			</Head>
			<h2>Page not found</h2>
			<div
				style={{
					maxWidth: '300px',
					height: '200px',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				<Image src='/404.png' alt='404' fill />
			</div>
		</div>
	)
}

export default NotFound
