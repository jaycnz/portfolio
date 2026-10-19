import Image from 'next/image'
import { Section } from '../Section'

export function HomeHero() {
  return (
    <Section id="home" className="items-center justify-center">
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-12">
        {/* Text */}
        <div className="w-full md:max-w-xl lg:max-w-2xl">
          <p className="font-semibold">Hi, I&apos;m Jay</p>
          <h1 className="mt-1 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Designer & Developer
          </h1>
          <p className="mt-3 max-w-md text-base text-white/90 sm:text-lg">
            UX/UI, graphic design and front-end development. BDes/BSc graduate,
            University of Auckland.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-lg bg-white px-5 py-3 font-display text-sm text-black transition hover:bg-white/85"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/50 bg-[#3b2f40] px-5 py-3 font-display text-sm text-white transition hover:bg-[#4a3b50]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* SWAP PHOTO LATER!! ) */}
        <Image
          src="/images/profile2.jpg"
          alt="Photo of Jay"
          width={400}
          height={400}
          priority
          className="size-44 shrink-0 rounded-[28%] object-cover md:size-56 lg:size-64"
        />
      </div>

      <p className="absolute inset-x-0 bottom-24 text-center text-sm italic text-white/80 md:bottom-8">
        Scroll down for more
      </p>
    </Section>
  )
}