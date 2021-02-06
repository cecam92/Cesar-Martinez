import React, { Fragment } from 'react'
import { useSpring, animated as a } from 'react-spring'

import './styles.scss'

const Header = (props) => {
  const { data } = props
  const headerProps = useSpring({
    from: {
      transform: 'scale(1)',
      opacity: 1
    },
    opacity: 1 - window.scrollY / 100,
    transform: `scale(${data})`
  })
  return (
    <Fragment>
      <header id='home'>
        <a.div style={headerProps}>
          <h1 className='scroll-sizing'>Cesar Martinez</h1>
          <h2 className='scroll-sizing' id='profession'>
            Frontend Developer | Network Engineer
          </h2>
        </a.div>
      </header>
    </Fragment>
  )
}

export default Header
