import { NextResponse } from 'next/server';

// javascript
const api_key = process.env.SEND_GRID_KEY;
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(api_key)

// Send Mail the host about Schedule confirm message
export const POST = async(request)=>  {
    if (request.method === "POST") {
      const body =await request.json();
      const {name,email,phone,lawyerName,serviceInfo,lawyerContactInfo} = body || {};

  // Email massage==================
      const msg = {
        to: 'legalcoa668@gmail.com', // Change to your recipient
        from: 'meetplanr@gmail.com', // Change to your verified sender
        subject: `${name} Request for a Appointment to our lawyer ${lawyerName}`,
        text: 'Confirmation mail for a Appointment',
        html: `<div style="max-width: 500px; width: 96%; border: 1px solid #777; padding: 20px; background: rgba(0, 0, 255, 0.1); font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; border-radius: 10px;">
        <h2 style=" margin: 0; text-align: center">Applicant Information.</h2>
        <h4 style="margin-bottom: 5px;">Applicant Name:</h4>
        <p style=" margin: 0;">${name}</p>
        <h4 style="margin-bottom: 5px;">Applicant Email:</h4>
        <p style=" margin: 0;">${email}</p>
        <h4 style="margin-bottom: 5px;">Applicant Phone:</h4>
        <p style=" margin: 0;">${phone}</p>
        <h4 style="margin-bottom: 5px;">Service Description:</h4>
        <p>${serviceInfo}</p>

        <h2 style=" margin: 0; text-align: center">Lawyer Information.</h2>
        <h4 style="margin-bottom: 5px;">Lawyer Name:</h4>
        <p style=" margin: 0;">${lawyerName}</p>
        <h4 style="margin-bottom: 5px;">Lawyer Email:</h4>
        <p style=" margin: 0;">${lawyerContactInfo?.email}</p>
        <h4 style="margin-bottom: 5px;">Lawyer Phone:</h4>
        <p style=" margin: 0;">${lawyerContactInfo?.phone}</p>
    </div>`,
      }
      try {
        sgMail.send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
        return NextResponse.json({result: "send mail", success: true});
      } catch (error) {
        // NextResponse.json({ error: "Failed to insert data" });
        console.log(error);
      }
    } else {
      console.log({ message: "Method not allowed" });
    }
  }