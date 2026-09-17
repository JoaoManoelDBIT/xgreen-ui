import { Link } from '@tanstack/react-router'
import xgreenLogo from '../../assets/xgreen-logo.svg'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 h-20 border-b border-xg-neutral-200 bg-xg-white">
      <div className="flex h-full items-center justify-between gap-4 px-6 sm:px-10 xl:px-6 2xl:px-10">
        <Link
          to="/tipografia"
          className="flex shrink-0 flex-col items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-xg-green-700"
          aria-label="Xgreen Design System, início"
        >
          <img src={xgreenLogo} alt="Xgreen" width={1343} height={263} className="h-auto w-24 sm:w-32" />
          <span className="xg-caption mt-0.5 tracking-wide text-xg-primary">Design System</span>
        </Link>
        <span className="xg-caption text-right text-xg-neutral-500">0.1</span>
      </div>
    </header>
  )
}
