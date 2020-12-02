import Router from 'next/router'
import BlockContent from '@sanity/block-content-to-react'
import { get } from 'dotty'
import classnames from 'classnames'

import { projectsQuery } from '../lib/queries'
import Layout from '../components/layout.js'
import sanity from '../lib/sanity'

import "../styles/styles.scss"

const globals = {
  page_title: 'colton brown',
  page_description: 'Freelance Web Developer',
  page_url: 'https://coltonbrown.com',
  gid: 'UA-93943838-1'
}

export default class Home extends React.Component {

  static async getInitialProps({ req, query }) {
    const page = parseInt(query.p || 0);
    const projects = await sanity.fetch(projectsQuery({ page }));
    return {
      projects,
      page
    }
  }

  render() {
    return (
      <Layout
        activeSlug={ null }
        globals={ globals }
      >
        <div className="home">
          <div className="header">
            <div>
              <a href="https://colton.website">
                <img src="/male-technologist.png" />
              </a>
              &nbsp;
              <a href="https://colton.website">Colton Brown</a>
            </div>
            <div>
              <i>Freelance Projects</i>
            </div>
          </div>
          <div className="scroll-hider">
            <div className="projects">
              {
                this.props.projects.map( project => (
                  <div className="project" key={ project._id }>
                    <a href={ project.link }>
                      <div className="project__title">{ project.title }</div>
                    </a>
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
                      { project.date ? project.date.replace(/-\d\d-\d\d$/, '') : '' }
                    </div>
                    {
                      project.link ? (
                        <div className="project__link">
                          <a href={ project.link } target="_blank ">
                            <img src="/globe-americas.png" />
                          </a>
                        </div>
                      ) : ''
                    }
                    {
                      project.slug ? (
                        <div className="project__link">
                          <a href={ project.slug.current }>
                            <img src="/notepad.png" />
                          </a>
                        </div>
                      ) : ''
                    }
                  </div>
                ))
              }
            </div>
          </div>
          <div className="nav">
            {
              (this.props.page && this.props.page > 0) ? (
                <div className="prev">
                  <a href={ `?p=${ this.props.page - 1 }` }><i>Previous</i></a>
                </div>
              ) : ''
            }
            {
              (1) ? (
                <div className="next">
                  <a href={ `?p=${ this.props.page + 1 }` }><i>Next</i></a>
                </div>
              ) : ''
            }
          </div>
        </div>
      </Layout>
    )
  }
}
