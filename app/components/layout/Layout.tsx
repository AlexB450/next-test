import { Titillium_Web } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'
import style from './Layout.module.css'
import Header from './header/Header'
const titillium = Titillium_Web({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--titillium',
})

const Layout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<Meta title={title} description={description}>
			<div className={titillium.variable}>
				<div className={style.layout}>
					<Header />
					<section>{children}</section>
				</div>
			</div>
		</Meta>
	)
}

export default Layout
