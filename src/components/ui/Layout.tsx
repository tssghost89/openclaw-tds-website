import { Outlet } from 'react-router-dom'
import { siteData } from '../../data/siteData'
import { MainFooter } from '../sections/MainFooter'
import { MainHeader } from '../sections/MainHeader'

export function Layout() {
  return (
    <div className="app-shell">
      <MainHeader navigation={siteData.navigation} />
      <main>
        <Outlet />
      </main>
      <MainFooter footer={siteData.footer} />
    </div>
  )
}
