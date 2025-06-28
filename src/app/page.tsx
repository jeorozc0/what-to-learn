
"use client"

import { Badge } from "@/components/ui/badge"
import { GlobeIcon } from "lucide-react"

export default function LanguagesCard() {
  const languages = [
    { name: "English", percentage: 42.8 },
    { name: "Spanish", percentage: 28.3 },
    { name: "French", percentage: 15.7 },
    { name: "Mandarin", percentage: 8.9 },
    { name: "Arabic", percentage: 4.3 },
  ]

  return (
    <div className="flex flex-col h-dvh bg-black overflow-hidden">

      <div className="flex flex-col flex-grow w-full lg:w-md xl:w-md mx-auto px-6 py-8 md:py-12">

        <header className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <GlobeIcon className="text-white" />
          </div>
          <Badge className="text-white text-sm font-medium">Yonkers, NY</Badge>
        </header>

        {/* Language list */}
        <section className="flex flex-col h-full justify-center space-y-8 md:space-y-12">
          {languages.map((language, index) => (
            <div key={language.name} className="space-y-1">
              <div className="flex items-baseline justify-between">

                <span
                  className={`font-bold tracking-tight text-white ${index === 0
                    ? "text-6xl"
                    : index === 1
                      ? "text-5xl"
                      : "text-4xl"
                    }`}
                >
                  {language.name}
                </span>

                <span
                  className={`font-bold tracking-tight text-white ${index === 0
                    ? "text-3xl md:text-4xl"
                    : index === 1
                      ? "text-2xl md:text-3xl"
                      : "text-xl md:text-2xl"
                    }`}
                >
                  {language.percentage}%
                </span>
              </div>
            </div>
          ))}
        </section>

        <div className="flex-grow" />
      </div>

      <footer className="border-t border-gray-800 py-8">
        <div className="text-center space-y-2">
          <div className="text-sm text-gray-400 font-medium tracking-wide">
            TOTAL SPEAKERS
          </div>
          <div className="text-2xl font-bold text-white">2.4M</div>
        </div>
      </footer>
    </div>
  )
}

