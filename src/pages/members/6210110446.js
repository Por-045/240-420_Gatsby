import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

export default function Howl({ data }) {
  console.log(data.directus.member[0].enroll[0].subject_id)

  const {student_id, first_name, last_name, gender, age} = data.directus.member[0]
  const subjects = data.directus.member[0].enroll

  return(
    <Layout>
      <div style={{textAlign: `center`}}>
        <h2>{"Student ID: " +  student_id}</h2>
        <h2>{'Name: ' + first_name + ' ' + last_name}</h2>
        <h2>{'Gender: ' + gender}</h2>
        <h2>{'Age: ' + age}</h2>
      </div>
      <div>
        <h1 style={{textAlign: `center`}}>Enrollment</h1>
      </div>
      <div>
        <table>
          <tr><td><center>ID</center></td><td><center>NAME</center></td><td><center>INFOMATION</center></td></tr>
          {subjects.map(subject => (
            <tr>
              <td>
                <center>{subject.subject_id.subject_id} </center>
              </td>
              <td>
                <center>{subject.subject_id.subject_name}</center>
              </td>
              <td>
                <center><Link to={'/subject/' + subject.subject_id.subject_id}>CLICK</Link></center>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  )

}

export const query = graphql`
    {
      directus {
        member(filter: {student_id: {_eq: "6210110446"}}) {
          student_id
          first_name
          last_name
          gender
          age
          enroll {
            subject_id(sort: "subject_id") {
              subject_id
              subject_name
              section
            }
          }
        }
      }
    }
`