
import Layout from "../components/layout"
import * as React from "react"
import { graphql } from "gatsby"

export default function Subject({ data }) {
  console.log(data)
  // const {student_id, first_name, last_name} = data.member
  const projects = data.directus.subject

  return (<Layout><h1>240-420</h1><table>

    <tr><td><center>ID</center></td><td><center>NAME</center></td><td><center>SECTION</center></td><td><center>INFOMATION</center></td></tr>
    {projects.map(project => (
      <tr>
        <td>
          <center>{project.subject_id} </center>
        </td>
        <td>
          <center>{project.subject_name}</center>
        </td>
        <td>
          <center>{project.section}</center>
        </td>
        <td>
          <center> CLICK</center>
        </td>
      </tr>

    ))}

  </table></Layout>
  )
}

export const query = graphql`
  {
    directus {
      subject {
        subject_id
        subject_name
        section
      }
    }
  }
`