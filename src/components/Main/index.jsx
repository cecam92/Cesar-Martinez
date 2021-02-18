import React from 'react'
import AboutMe from '../AboutMe'
import Portfolio from '../Portfolio'
import projects from '../../data'
import Technologies from '../Technologies'
import Footer from '../Footer'

const Main = () => {
  return (
    <main>
      <AboutMe />
      <Portfolio projects={projects} />
      <Technologies />
      <Footer />
    </main>
  )
}

export default Main
