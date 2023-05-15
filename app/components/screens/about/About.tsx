import { FC } from 'react'
import Layout from '../../layout/Layout'
import style from './about.module.css'
const About: FC = () => {
	return (
		<Layout title='about' description='about my site'>
			<div className={style.about}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
				accusantium velit cum est debitis libero neque temporibus, nihil error
				officia optio ratione. Veniam placeat vitae dolore est? Voluptates,
				temporibus quo. Nulla optio cum adipisci. Ea, ex earum magni dolorum
				cupiditate sint eaque quaerat iusto architecto repudiandae incidunt
				illo. Tempore, magnam! Cum, quo totam praesentium molestiae nisi quos
				quibusdam hic eveniet.
			</div>
		</Layout>
	)
}

export default About
