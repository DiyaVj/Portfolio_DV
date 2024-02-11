/* eslint-disable react/react-in-jsx-scope */
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST () {
  try {
    const data = await resend.emails.send({
      from: 'Judy <diyavijay2371@gmail.com>',
      to: ['diyavijay2371@gmail.com'],
      subject: 'Hello world',
      react: (
      <>
      <p>Email Body</p>
      </>)
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
