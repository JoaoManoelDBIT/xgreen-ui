import { HeadContent, Outlet } from '@tanstack/react-router'
import { Footer } from './footer'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { SkipLink } from './skip-link'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-xg-white pt-20">
      <HeadContent />
      <SkipLink />
      <Header />
      <Sidebar />
      <main
        id="conteudo"
        tabIndex={-1}
        className="min-w-0 scroll-mt-32 px-6 py-8 sm:px-10 xl:ml-[18.5rem] xl:mr-10 xl:px-0 xl:py-12 2xl:ml-80 2xl:mr-12"
      >
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}
