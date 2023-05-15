import { FC } from 'react'
import Layout from '../../layout/Layout'

import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../../layout/footer/Footer'), {
	ssr: false,
})

const Home: FC = () => {
	return (
		<Layout title='main' description='main info'>
			<h1>main page</h1>
			<DynamicFooter />
		</Layout>
	)
}

export default Home
