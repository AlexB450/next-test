import Link from 'next/link'
import { FC } from 'react'
import { menu } from './menu/menu.data'
import style from './header.module.css'
import HeaderUser from './user/HeaderUser'
const Header: FC = () => {
	return (
		<header className={style.header}>
			{menu.map(item => (
				<Link className={style.link} href={item.link} key={item.name}>
					{item.name}
				</Link>
			))}
			<HeaderUser />
		</header>
	)
}

export default Header
