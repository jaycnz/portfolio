import { Desktop } from '../Desktop'
import { HomeHero } from '../HomeHero'
import { WorkSection } from '../WorkSection'
import { WindowProvider } from '../WindowProvider'
import { AboutSection } from '../AboutSection'
import { Footer } from '../Footer'

export function Main() {
  return (
    <WindowProvider>
      <div>
        <HomeHero />
        <WorkSection />
        {/* WIP: COMPLETE ABOUT SECTION LATER */}
        {/* <AboutSection />  */}
        <Footer />
      </div>
    </WindowProvider>
  )
}