'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto text-center px-6">
        <h1 className="text-4xl font-light tracking-tight text-zinc-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="rounded-full px-8 py-4 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full px-8 py-4 text-sm font-medium border border-zinc-300 hover:bg-zinc-50 transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  )
}

