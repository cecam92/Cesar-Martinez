import React, { Fragment, useState, useEffect } from 'react'
import Header from '../../components/Header'
import Nav from '../../components/Navigation'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import { useSpring, animated as a } from 'react-spring'

const Home = () => {
  const [data, setData] = useState(1)
  const [stick, setStick] = useState(false)

  const fadeProps = useSpring({
    opacity: stick ? 1 : 0,
    backgroundColor: stick ? '#22262b' : '#22262b'
  })

  function cutNumber(num) {
    const MIN = 1
    const MAX = 96
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
  }
  function scrolling() {
    setData(cutNumber(window.scrollY))
  }
  function getStick() {
    if (data >= 96) {
      setStick(true)
    } else {
      setStick(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrolling)
    getStick()

    return () => {
      window.removeEventListener('scroll', scrolling)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <Fragment>
      <Header data={data} />

      {stick && (
        <>
          <Nav />
        </>
      )}

      <a.div style={fadeProps}>
        <>
          <Main />
          <Footer className='fixed-bottom' />
        </>
      </a.div>
    </Fragment>
  )
}

export default Home
