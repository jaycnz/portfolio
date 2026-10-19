const LINKS = [
  { label: 'GitHub', href: 'https://github.com/jaycnz' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jay-chen-535201270/' },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/30 px-4 pt-12 pb-28 sm:px-8 md:pb-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="font-display text-3xl">Get in touch</h2>
          <p className="mt-2 text-white/80">Jay Chen · Designer &amp; Developer · Auckland, NZ</p>
        </div>

        <ul className="space-y-2">
          <li>
            <a href="mailto:jaycnz1023@gmail.com" className="underline-offset-4 hover:underline">
              jaycnz1023@gmail.com
            </a>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-3">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border border-white/50 bg-[#3b2f40] px-5 py-3 font-display text-sm transition hover:bg-[#4a3b50]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-10 w-full max-w-6xl text-sm text-white/60">
        © {new Date().getFullYear()} Jay Chen
      </p>
    </footer>
  )
}