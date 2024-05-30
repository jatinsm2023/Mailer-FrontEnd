import React, { useState } from "react";
import Papa from "papaparse";
import toast, { Toaster } from 'react-hot-toast';

function Sender() {
  const [file, setFile] = useState(null);
  const [emails, setEmails] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlesend = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target.result;
        const parsedData = Papa.parse(csvData, { header: false });
        const emailArray = parsedData.data.map((row) => row[0]);
        setEmails(emailArray);
        // console.log(emailArray); // This will print the array of emails to the console
      };
      reader.readAsText(file);
    } else {
      console.log("No file selected");
    }

    // take subject from id subject
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const emailpassword = document.getElementById("apppassword").value
    // take message from id message
    const message = document.getElementById("message").value;

    if (!subject || !email || !emailpassword || !message || emails.length === 0) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // now send file,subject, message in the backend use the fetch api https://mailer-backend-5bgy.onrender.com/api//product/getbill
    const response = await fetch("https://mailer-backend-5bgy.onrender.com/api//product/getbill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        emailpassword : emailpassword,
        usermail: emails,
        mailsubject: subject,
        mailbody: message,
      }),
    });

    if (response.status === 201) {
     toast.success("Mail Sent Successfully")
    } else {
      toast.error("Some Error Occured")
    }
  };

  return (
    <>
    <Toaster/>
      <div className="isolate bg-white px-6 py-6 sm:py-6 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem] extra"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mail Sender
          </h2>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-2 max-w-xl sm:mt-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Sender Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="apppassword"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Sender Email's App password
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="apppassword"
                  id="apppassword"
                  autoComplete="apppassword"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                className="block text-sm font-semibold leading-6 text-gray-900"
                htmlFor="file_input"
              >
                Upload CSV file Containing Receiver's Mails
              </label>
              <div className="mt-2.5">
                <input
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="file_input"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handlesend}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Sender;