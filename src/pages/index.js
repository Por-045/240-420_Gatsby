
import Layout from "../components/layout"
import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import { Link } from 'gatsby'


export default function Home({ data }) {
  console.log(data)
  // const {student_id, first_name, last_name} = data.member
  const projects = data.directus.member

  return (<Layout><h1 style={{ textAlign: `center` }}>Members</h1><table>

    <tr><td><center>ID</center></td><td><center>NAME</center></td><td><center>INFOMATION</center></td></tr>
    {projects.map(project => (
      <tr>
        <td>
          <center>{project.student_id} </center>
        </td>
        <td>
          <center>{project.first_name + ' ' + project.last_name}</center>
        </td>
        <td>
          <nav>
            <div className='links'>
              <Link to='/students'><center> CLICK</center></Link>

            </div>

          </nav>
        </td>
      </tr>

    ))}
    <Navbar />
  </table></Layout>

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