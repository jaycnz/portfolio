import { Desktop } from '../Desktop'
import { HomeHero } from '../HomeHero'
import { WorkSection } from '../WorkSection'
import { WindowProvider } from '../WindowProvider'

export function Main() {
  return (
    <WindowProvider>
      <div>
        <HomeHero />
        <WorkSection />
        <Desktop />
      </div>
    </WindowProvider>
  )
}