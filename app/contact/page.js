import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="min-h-screen p-4 mb-28" >
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
                <div className="mb-4">
                    <p><strong>Name:</strong> Naman Bhatia </p>
                    <p><strong>Email:</strong> namanbhatia2006@outlook.com</p>
                    <p><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/naman-bhatia-nb" className="text-blue-500">linkedin.com/in/naman-bhatia-nb</Link></p>
                    <p><strong>GitHub:</strong> <Link href="https://github.com/NamanBhatia-NB" className="text-blue-500">github.com/NamanBhatia-NB</Link></p>
                </div>
                <h2 className="text-xl font-bold mb-2">Your Information</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1">Name</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input type="email" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Message</label>
                        <textarea className="w-full p-2 border rounded" rows="4"></textarea>
                    </div>
                    <div>
                        <span className="text-sm text-gray-500 font-medium">*Currently not accepting responses. Thankyou for patience.</span>
                        <button type="submit" disabled className="w-full p-2 bg-blue-300 text-white rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;