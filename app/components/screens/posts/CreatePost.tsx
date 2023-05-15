import { PostsContext } from '@/app/provider/PostsProvider'
import { Dispatch, FC, SetStateAction, useContext } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { IPost } from './posts.data'

type INewPost = { [key: string]: string }
const cleanData: INewPost = {
	title: '',
	tags: '',
	body: '',
}
const resolver: Resolver<INewPost> = async values => {
	return {
		values: values.title ? values : {},
		errors: !values.title
			? {
					title: {
						type: 'required',
						message: 'Title is required.',
					},
			  }
			: {},
	}
}

const CreatePost: FC<{
	setPosts: Dispatch<SetStateAction<IPost[]>>
}> = ({ setPosts }) => {
	const { posts } = useContext(PostsContext)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver,
		mode: 'onChange',
	})
	const createNewPost = (data: INewPost) => {
		setPosts(prev => [
			{
				title: data.title,
				body: data.body,
				tags: data.tags.split(','),
				id: posts.length + 1,
				userId: 223,
				reactions: 0,
			},
			...prev,
		])
		reset()
	}
	return (
		<div>
			<h2>Create Post</h2>
			<form onSubmit={handleSubmit(createNewPost)}>
				<input {...register('title')} />
				{errors && errors?.title && <p>{errors.title.message}</p>}
				<input {...register('body')} />
				<input {...register('tags')} />
				<button>create post</button>
			</form>
		</div>
	)
}

// const CustomInput: FC<{
// 	value: string
// 	data: INewPost
// 	onChange: Dispatch<SetStateAction<INewPost>>
// }> = ({ value, data, onChange }) => (
// 	<input
// 		type='text'
// 		placeholder={value}
// 		value={data[value as keyof INewPost]}
// 		onChange={e => onChange(prev => ({ ...prev, [value]: e.target.value }))}
// 	/>
// )
export default CreatePost
