import React, { Fragment } from 'react'

import JS from '../../assets/js.png'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import ReactIcon from '../../assets/react.png'
import Graph from '../../assets/graphql.png'
import Bootstrap from '../../assets/bootstrap.png'
import Github from '../../assets/github.png'
import Sass from '../../assets/sass.png'
import Redux from '../../assets/redux.png'
import Rest from '../../assets/rest.png'
import Swift from '../../assets/swift.png'
import Typescript from '../../assets/typescript.png'
import StyledComponents from '../../assets/styledComponents.png'
import Nodejs from '../../assets/nodejs.svg'
import Mongo from '../../assets/mongo.png'
const Technologies = () => {
  const techs = [
    { name: 'html 5', icon: HTML },
    { name: 'CSS 3', icon: CSS },
    { name: 'JavaScript', icon: JS },
    { name: 'React & Native', icon: ReactIcon },
    { name: 'Redux', icon: Redux },
    { name: 'GraphQL API', icon: Graph },
    { name: 'RESTful API', icon: Rest },
    { name: 'Bootstrap', icon: Bootstrap },
    { name: 'GitHub', icon: Github },
    { name: 'Sass', icon: Sass },
    { name: 'Swift', icon: Swift },
    { name: 'TypeScript', icon: Typescript },
    { name: 'Styled Components', icon: StyledComponents },
    { name: 'MongoDb', icon: Mongo },
    { name: 'Node JS', icon: Nodejs }
  ]
  return (
    <Fragment>
      <section id='tech' className='dark'>
        <h2 className='section-title'>Technologies</h2>
        <div className='tech-container  '>
          {techs.map((tech, index) => {
            return (
              <i className='tech-icon dark' key={index}>
                <img className='icon' src={tech.icon} alt='html icon' />
                <div className='tech-caption'>
                  <p>{tech.name}</p>
                </div>
              </i>
            )
          })}
        </div>
      </section>
    </Fragment>
  )
}

export default Technologies
