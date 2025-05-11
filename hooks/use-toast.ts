"use client"

// Simplified version of the toast hook
import { useState } from "react"

type ToastVariant = "default" | "destructive"

interface ToastProps {
  title: string
  description: string
  variant?: ToastVariant
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = ({ title, description, variant = "default" }: ToastProps) => {
    // In a real implementation, this would show a toast notification
    // For simplicity, we're just logging to console
    console.log(`Toast: ${variant} - ${title} - ${description}`)

    // Add toast to state
    const newToast = { title, description, variant }
    setToasts((prev) => [...prev, newToast])

    // Remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t !== newToast))
    }, 5000)

    // Alert for demo purposes
    alert(`${title}\n${description}`)
  }

  return { toast, toasts }
}
