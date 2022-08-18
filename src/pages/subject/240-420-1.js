import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

export default function Web({ data }) {
  console.log(data.directus.subject[0].enroll_member)

  const subject_detail = data.directus.subject[0]
  const times = data.directus.subject[0].study_time
  const enrolls =  data.directus.subject[0].enroll_member

  return(
    <Layout>
      <div style={{textAlign: `center`}}>
        <h2>{"Subject ID: " +  subject_detail.subject_id}</h2>
        <h2>{'Subject Name: ' + subject_detail.subject_name}</h2>
        <h2>{'Section: ' + '0' + subject_detail.section}</h2>
        <h2>{'Teacher: ' + subject_detail.teacher}</h2><br/>
      </div>
      <div>
        <h1 style={{textAlign: `center`}}>Study Time</h1>
        <table>
          <tr><td><center>DAY</center></td><td><center>START</center></td><td><center>END</center></td></tr>
          {times.map(time => (
            <tr>
              <td>
                <center>{time.time_id.day} </center>
              </td>
              <td>
                <center>{time.time_id.start}</center>
              </td>
              <td>
                <center>{time.time_id.end}</center>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <h1 style={{textAlign: `center`}}>Enrollment Member</h1>
        <table>
          <tr><td><center>ID</center></td><td><center>FIRST NAME</center></td><td><center>LAST NAME</center></td></tr>
          {enrolls.map(enroll => (
            <tr>
              <td>
                <center>{enroll.member_student_id.student_id} </center>
              </td>
              <td>
                <center>{enroll.member_student_id.first_name}</center>
              </td>
              <td>
                <center>{enroll.member_student_id.last_name}</center>
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
            subject(filter: {subject_id: {_eq: "240-420"}}) {
                subject_id
                subject_name
                section
                teacher
                study_time {
                    time_id {
                        day
                        start
                        end
                    }
                }
                enroll_member {
                    member_student_id {
                        student_id
                        first_name
                        last_name
                    }
                }
            }
        }
    }
`