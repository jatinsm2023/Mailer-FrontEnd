# Mail Sender Tool

## Overview

The Mail Sender Tool is a web application designed to facilitate the sending of emails to multiple recipients with a single click. It allows users to specify the sender's details, upload a CSV file containing recipient email addresses, and compose the email's subject, body, and attachments. The tool ensures that each email is sent separately at intervals to avoid being flagged as spam.

## Features

- **User-friendly Interface:** Built with ReactJS and Tailwind CSS for a modern and responsive design.
- **Bulk Email Sending:** Send emails to hundreds of recipients with one click.
- **CSV Upload:** Easily upload recipient email addresses via a CSV file.
- **Email Customization:** Specify the email subject, body, and attachments.
- **Anti-Spam Measures:** Emails are sent at 10-second intervals to minimize the risk of being marked as spam.
- **Real-time Notifications:** Toaster notifications for success and error messages.

## Technology Stack

- **Frontend:** ReactJS, Tailwind CSS
- **Backend:** Node.js, Express, Nodemailer
- **Notifications:** Toaster

## Backend Repository

- Find Backend code repository for this tool here - https://github.com/jatinsm2023/Mailer-Backend

## Usage

1. **Open the Application**
- Open your web browser and navigate to https://mailer-rv8x.onrender.com/.

2. **Fill in Sender's Details**
- Name of the Sender: Enter your name.
- Email of the Sender: Enter your email address.
- App Password of the Sender's Email: Enter the app password for your email account.
- Upload CSV File
- The CSV file should contain recipient email addresses in the first column.

3. **CSV Format**
- The CSV file should contain this Format
    example1@gmail.com
    example2@gmail.com
    example3@gmail.com
    example4@gmail.com
    example5@gmail.com

    
4. **Compose Email**
- Subject: Enter the email subject.
- Email Body: Enter the content of the email.
- Attachments: Attach any files you wish to send.

5. **Send Emails**
- Click the "Send" button to start sending emails. Each email will be sent separately at 10-second intervals.