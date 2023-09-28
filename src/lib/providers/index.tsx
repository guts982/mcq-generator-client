// app/providers.tsx
'use client'

import { Provider as ReduxProvider } from "react-redux";
import {NextUIProvider} from '@nextui-org/react'
import { store } from "../redux/store";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ReduxProvider>
  )
}