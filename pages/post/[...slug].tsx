import FullPost from '@/app/components/screens/fullPost/FullPost'
import { postsServices } from '@/app/services/posts.services'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useRef } from 'react'

const PostPage: FC = () => {
	const {
		query: { slug },
	} = useRouter()
	const index = slug?.length && +slug[0]
	const ref = useRef<HTMLVideoElement | null>(null)

	const { data: post } = useQuery({
		queryKey: ['postById'],
		queryFn: () => postsServices.getPostById(index),
		enabled: !!index,
	})
	return (
		<div
			style={{
				textAlign: 'center',
			}}
		>
			{post ? (
				<>
					<FullPost post={post} />
					<video
						src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
						width='400px'
						ref={ref}
					></video>
					<button onClick={() => ref.current?.play()}>play</button>
					<button onClick={() => ref.current?.pause()}>stop</button>
				</>
			) : (
				<div>Loading ...</div>
			)}
		</div>
	)
}

export default PostPage
