

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
      const response = await fetch('https://champion-backend-elf5.onrender.com/api/contact', {
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
    <section id="contact" className="my-8 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-[100] mb-6 text-center text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-[50%] bg-blue-900 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-50"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {status === 'success' && (
          <p className="text-green-500 text-center">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center">Error sending message. Please try again.</p>
        )}
      </form>
    </section>
  )
}

