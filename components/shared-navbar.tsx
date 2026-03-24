import Link from "next/link"

export function SharedNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-center">
        <Link href="/" className="flex flex-col items-center gap-0.5 text-center">
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
          <span className="text-[10px] text-gray-500 tracking-wide font-medium">
            AI作業員派遣サービス
          </span>
        </Link>
      </div>
    </header>
  )
}
