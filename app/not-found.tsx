"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { PageLayout } from "@/components/page-layout"

function NotFoundContent() {
  const searchParams = useSearchParams()
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="text-blue-500 hover:text-blue-700">Return to Home</a>
    </div>
  )
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLayout>
        <NotFoundContent />
      </PageLayout>
    </Suspense>
  )
}
