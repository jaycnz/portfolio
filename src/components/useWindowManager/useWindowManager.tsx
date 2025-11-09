import { useState } from 'react';

export function useWindowManager() {
  const [windows, setWindows] = useState<string[]>([]);

  function openWindow(windowName: string) {
    setWindows(current => {
      if (current.includes(windowName)) {
        const target = current.indexOf(windowName);
        return [windowName, ...current.slice(0, target), ...current.slice(target + 1)];
      } else {
        return [windowName, ...current];
      }
    });
  }

  return { windows, openWindow };
}
