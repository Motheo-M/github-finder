function Home() {
  return (
    <div>
        <h1 className="text-6xl mb-4"> Github Finder</h1>
        <p className="mb-4 text-2xl font-light">
					A React app to search Github profiles and see profile details. 
					This project is part of the 
					<a href='https://www.udemy.com/course/modern-react-fron-to-back/'>
						{' '}
						React Front To Back
					</a>{' '}
					Udemy course by
					<strong>
						<a href='https://traversymedia.com'>Brad Traversy</a>
					</strong>
					.
				</p>

				<p className="text-lg text-gray-400">
					Version <span className="text-white">1.0.0</span>
				</p>

				<p className="text-lg text-gray-400">
					Layout by:
					<a href="https://twitter.com/hassibmoddasser" className="text-white">
						Hassib Moddasser
					</a>
				</p>
    </div>
  )
}

export default Home