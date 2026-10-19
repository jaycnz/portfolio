import { Desktop } from '../Desktop'
import { HomeHero } from '../HomeHero'
import { WorkSection } from '../WorkSection'
import { WindowProvider } from '../WindowProvider'
import { AboutSection } from '../AboutSection'

export function Main() {
  return (
    <WindowProvider>
      <div>
        <HomeHero />
        <WorkSection />
        <AboutSection />
        <Desktop />
      </div>
    </WindowProvider>
  )
}