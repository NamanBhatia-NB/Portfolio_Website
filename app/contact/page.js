"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus("Sending...");
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        if (res.ok) {
            setStatus("Message sent!");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send.");
        }
    }

    return (
        <div className="min-h-screen p-4 mb-28" >
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
                <div className="mb-4">
                    <p><strong>Name:</strong> Naman Bhatia </p>
                    <p><strong>Email:</strong> namanbhatia2006@outlook.com</p>
                    <p><strong>LinkedIn:</strong> <Link target='_blank' href="https://linkedin.com/in/naman-bhatia-nb" className="text-blue-500">linkedin.com/in/naman-bhatia-nb</Link></p>
                    <p><strong>GitHub:</strong> <Link target='_blank' href="https://github.com/NamanBhatia-NB" className="text-blue-500">github.com/NamanBhatia-NB</Link></p>
                </div>
                <h2 className="text-xl font-bold mb-2">Your Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Name</label>
                        <input name="name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Message</label>
                        <textarea name="message" rows="4" value={form.message} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
                    <p className="text-sm text-gray-500">{status}</p>
                </form>
            </div>
        </div>
    );
}
export default Contact;