'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/jaycnz', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jay-chen-535201270/', Icon: FaLinkedin },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/30 px-4 pt-12 pb-28 sm:px-8 md:pb-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="font-display text-3xl">Get in touch! :)</h2>
          <p className="mt-2 text-white/80">Jay Chen · Designer &amp; Developer · Auckland, NZ</p>
        </div>

        <ul className="space-y-2">
          <li>
            <a href="mailto:jaycnz1023@gmail.com" className="underline-offset-4 hover:underline">
              jaycnz1023@gmail.com
            </a>
          </li>
        </ul>

        <ul className="flex gap-3">
          {LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex size-14 items-center justify-center rounded-lg border border-white/50 bg-[#3b2f40] text-3xl transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
              >
                <Icon aria-hidden />
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