import * as React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  // const {student_id, first_name, last_name} = data.member
  const projects = data.directus.member

  return (
    <div>
      <h1>Test</h1>
      <div>
        {projects.map(project => (
          <h3>{project.student_id + ' ' + project.first_name + ' ' + project.last_name}</h3>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  {
    directus {
      member {
        student_id
        first_name
        last_name
      }
    }
  }
`
