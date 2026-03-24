"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SharedNavbar() {
  const pathname = usePathname()
  const isAX = pathname?.startsWith("/ax")

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex flex-col leading-tight">
          <span
            className="text-xl font-black tracking-widest"
            style={{
              background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Colega
          </span>
          <span className="text-[10px] text-gray-400 tracking-wide">by 池田 航平</span>
        </div>

        {/* Service Switcher */}
        <nav className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
          <Link
            href="/"
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
              !isAX
                ? "text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
            style={
              !isAX
                ? { background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)" }
                : {}
            }
          >
            AI作業員派遣
          </Link>
          <Link
            href="/ax"
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
              isAX
                ? "text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
            style={
              isAX
                ? { background: "linear-gradient(90deg, #f59e0b 0%, #f97316 100%)" }
                : {}
            }
          >
            AX導入サポート
          </Link>
        </nav>
      </div>
    </header>
  )
}
