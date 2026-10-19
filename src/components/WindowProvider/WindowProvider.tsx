'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { useWindowManager } from '../useWindowManager/useWindowManager'
import { WindowFactory } from '../WindowFactory/WindowFactory'
import { ImageDialog } from '../ImageDialog/ImageDialog'

interface WindowContextValue {
  windows: string[]
  openWindow: (windowName: string) => void
  closeWindow: (windowName: string) => void
  inspectImage: (src: string | null) => void
}

const WindowContext = createContext<WindowContextValue | null>(null)

// Any component can call: const { openWindow } = useWindows()
export function useWindows() {
  const ctx = useContext(WindowContext)
  if (!ctx) throw new Error('useWindows must be used inside <WindowProvider>')
  return ctx
}

export function WindowProvider({ children }: { children: ReactNode }) {
  const { windows, openWindow, closeWindow } = useWindowManager()
  const [inspectedImage, setInspectedImage] = useState<string | null>(null)

  return (
    <WindowContext.Provider
      value={{ windows, openWindow, closeWindow, inspectImage: setInspectedImage }}
    >
      {children}

      {/* Rendered once here, so every section can open windows */}
      <ImageDialog image={inspectedImage} onClose={() => setInspectedImage(null)} />
      <WindowFactory
        windows={windows}
        onClose={closeWindow}
        openWindow={openWindow}
        setInspectedImage={setInspectedImage}
      />
    </WindowContext.Provider>
  )
}