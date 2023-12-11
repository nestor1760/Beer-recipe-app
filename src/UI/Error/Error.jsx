import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="page_404">
			<div className="container">
				<div className="errorAnimation">
					<h1>404</h1>
				</div>
				<div className="contant_box_404">
					<h3>
						Look like you're lost
					</h3>
					<p>the page you are looking for not avaible!</p>
					<Link to='/' className="btn_404">Go to Home</Link>
				</div>
			</div>
		</div>
  )
}

export default Error