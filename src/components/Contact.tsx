// export function Contact() {
//     return (
//       <section id="contact" className="my-8 ">
//         <h2 className="text-3xl font-bold mb-4 " style={{textAlign: "center"}}>Contact Me</h2>
//         <form className="lg:w-[60%] w-[90%] mx-auto">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
//             <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
//             <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
//             <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
//           </div>
//           <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
//             Send Message
//           </button>
//         </form>
//       </section>
//     )
//   }
  
  

'use client'

import { useState } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="my-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="lg:w-[60%] w-[90%] mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white border-gray-700"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white border-gray-700"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white border-gray-700"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="text-green-500 mt-2">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-2">Error sending message. Please try again.</p>
        )}
      </form>
    </section>
  )
}

