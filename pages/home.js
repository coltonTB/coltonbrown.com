import Router from 'next/router'
import BlockContent from '@sanity/block-content-to-react'
import { get } from 'dotty'
import classnames from 'classnames'

import Background from '../components/background.js'
import Nav from '../components/nav.js'
import { globalQuery } from '../lib/queries'
import Layout from '../components/layout'
import sanity from '../lib/sanity'

import "../styles/styles.scss"

const projects = [
  {
    title: '9 Million Reasons',
    role: 'development',
    link: 'http://9millionreasons.nyc',
    year: 2020,
    color: 'red'
  }, {
    title: 'Volley Studio',
    role: 'design + development',
    link: 'https://new.volleystudio.us',
    year: 2019,
    color: 'blue'
  }, {
    title: 'Blueland',
    role: 'development',
    collaborator: {
      name: 'The Couch',
      url: 'https://thecouch.nyc'
    },
    link: 'https://www.blueland.com',
    year: 2019,
    color: 'red'
  }, {
    title: 'Fey Arts',
    role: 'design + development',
    year: 2019,
    link: "https://fey-arts.com/"
  }, {
    title: 'OOO',
    role: 'development',
    year: 2018,
    collaborator: {
      name: 'For Good Measure',
      url: 'http://forgoodmeasure.us'
    }
  }
]

export default class Home extends React.Component {

  static async getInitialProps({ req }) {
    return {}
  }

  render() {
    return (
      <Layout
        activeSlug={ null }
        globals={ {} }
      >
        <div className="home">
          <div className="header">
            <div>
              <a href="https://colton.website">👨🏻‍💻</a>
              &nbsp;
              Colton Brown
            </div>
            <div>
              <i>Freelance Web Developer</i>
            </div>
          </div>
          {
            projects.map( project => (
              <div className={`project ${ 'red' }`}>
                <div className="project__title">{ project.title }</div>
                <div className="project__details italic">
                  <div className="project__role">{ project.role }</div>
                  {
                    project.collaborator ? (
                      <div className="project__collaborator">
                        <span>with </span>
                        <a href={ project.collaborator.url } target="_blank">
                          { project.collaborator.name }
                        </a>
                      </div>
                    ) : ''
                  }
                </div>
                <div className="project__year">
                  { project.year }
                </div>
                <div className="project__link">
                  <a href={ project.link } target="_blank ">
                    🌎
                  </a>
                </div>
              </div>
            ))
          }

        </div>
      </Layout>
    )
  }
}
