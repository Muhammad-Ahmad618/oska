import { useState } from "react"

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "John Smith",
      role: "UI & UX Designer",
      avatar: "👨‍💼",
    },
     {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "John Smith",
      role: "UI & UX Designer",
      avatar: "👨‍💼",
    },
     {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "John Smith",
      role: "UI & UX Designer",
      avatar: "👨‍💼",
    },
     {
      quote:
        "I like Portfolio Page more and more each day because it makes my life a lot easier. It fits our needs perfectly. Keep up the excellent work.",
      author: "John Smith",
      role: "UI & UX Designer",
      avatar: "👨‍💼",
    },
  ]

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center space-y-8">
        <blockquote className="text-3xl sm:text-4xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
          "{current.quote}"
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
          >
            ←
          </button>

          <div className="flex items-center gap-3">
            <div className="text-3xl">{current.avatar}</div>
            <div className="text-left">
              <p className="font-semibold text-foreground">{current.author}</p>
              <p className="text-sm text-muted-foreground">{current.role}</p>
            </div>
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
