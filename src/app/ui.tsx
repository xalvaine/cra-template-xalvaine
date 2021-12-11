import { AnimatePresence } from 'framer-motion'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import * as pages from 'pages'
import { Layout } from 'widgets/layout/ui'

export const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route key={location.pathname} element={<Layout />} path='/'>
          <Route key={location.pathname} index element={<pages.Home />} />
          <Route key={location.pathname} element={<pages.Info />} path='info' />
          <Route
            key={location.pathname}
            element={<Navigate replace to='/' />}
            path='*'
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
