'use client'; // Top of the file if using Next.js App Router

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, CheckCircle } from "lucide-react"

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (!isOpen) return null; // ← Key line: if not open, don't render anything

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Subscribe for Updates</h2>
        
        <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
          >
            Subscribe
          </button>
        </form>

        {status === 'success' && <p className="text-green-500 mt-4 text-center">Thanks for subscribing!</p>}
        {status === 'error' && <p className="text-red-500 mt-4 text-center">Something went wrong. Please try again.</p>}
      </div>
    </div>
  );
}








// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { X, Send, CheckCircle } from "lucide-react"

// interface SubscribeModalProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const SubscribeModal = ({ isOpen, onClose }: SubscribeModalProps) => {
//   const [email, setEmail] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose()
//       }
//     }

//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//       window.addEventListener("keydown", handleEscape)
//     }

//     return () => {
//       document.body.style.overflow = "auto"
//       window.removeEventListener("keydown", handleEscape)
//     }
//   }, [isOpen, onClose])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setError("")

//     // Simulate API call
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500))
//       setIsSuccess(true)
//       setEmail("")
//     } catch (err) {
//       setError("Something went wrong. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

//       {/* Modal */}
//       <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden animate-in zoom-in-95 duration-200">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//           aria-label="Close"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         <div className="p-6 md:p-8">
//           {isSuccess ? (
//             <div className="text-center py-8">
//               <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
//               <p className="text-text-secondary mb-6">
//                 You've successfully subscribed to our newsletter. Check your inbox for a confirmation email.
//               </p>
//               <Button onClick={onClose} className="bg-electric-blue hover:bg-electric-blue/90 text-white">
//                 Close
//               </Button>
//             </div>
//           ) : (
//             <>
//               <div className="text-center mb-6">
//                 <h3 className="text-2xl font-bold text-charcoal mb-2">Join Our Newsletter</h3>
//                 <p className="text-text-secondary">
//                   Get the latest AI tools, tips, and strategies delivered straight to your inbox.
//                 </p>
//               </div>

//               <div id="omnisend-embedded-v2-680d7faae4cd0ff79afc4fe2">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="you@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="bg-white border-gray-200"
//                   />
//                 </div>

//                 {error && <p className="text-red-500 text-sm">{error}</p>}

//                 <Button
//                   type="submit"
//                   className="w-full bg-highlight-yellow hover:bg-highlight-yellow/90 text-charcoal font-medium"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     "Subscribing..."
//                   ) : (
//                     <>
//                       Subscribe <Send className="ml-2 h-4 w-4" />
//                     </>
//                   )}
//                 </Button>

//                 <p className="text-xs text-center text-muted-gray">We respect your privacy. Unsubscribe at any time.</p>

//               </div>

//               {/* <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="you@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="bg-white border-gray-200"
//                   />
//                 </div>

//                 {error && <p className="text-red-500 text-sm">{error}</p>}

//                 <Button
//                   type="submit"
//                   className="w-full bg-highlight-yellow hover:bg-highlight-yellow/90 text-charcoal font-medium"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     "Subscribing..."
//                   ) : (
//                     <>
//                       Subscribe <Send className="ml-2 h-4 w-4" />
//                     </>
//                   )}
//                 </Button>

//                 <p className="text-xs text-center text-muted-gray">We respect your privacy. Unsubscribe at any time.</p>
//               </form> */}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SubscribeModal
