import { useRouterState } from '@tanstack/react-router'
import { SidebarLink } from './sidebar-link'

export function Sidebar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const typographyActive = pathname === '/tipografia'
  const colorsActive = pathname === '/cores'
  const buttonActive = pathname === '/componentes/botao'

  return (
    <aside className="border-b border-xg-neutral-200 px-6 py-8 sm:px-10 xl:fixed xl:top-32 xl:left-6 xl:z-20 xl:w-60 xl:border-b-0 xl:p-0 2xl:left-10">
      <nav aria-label="Design system" className="bg-xg-white xl:max-h-[calc(100vh-10rem)] xl:overflow-y-auto">
        <p className="xg-caption mb-3 px-2.5 text-xg-neutral-500">Estilos</p>
        <div className="flex flex-col gap-1">
          <SidebarLink to="/tipografia" active={typographyActive} inSection={typographyActive}>
            <span aria-hidden="true" className="w-3.5 text-center text-xg-neutral-500">Aa</span>
            Tipografia
          </SidebarLink>
          <SidebarLink to="/cores" active={colorsActive} inSection={colorsActive}>
            <span aria-hidden="true" className="grid size-3.5 grid-cols-2 gap-px">
              <span className="rounded-[1px] bg-xg-green-500" />
              <span className="rounded-[1px] bg-xg-blue-500" />
              <span className="rounded-[1px] bg-xg-orange-500" />
              <span className="rounded-[1px] bg-xg-purple-500" />
            </span>
            Cores
          </SidebarLink>
        </div>

        <p className="xg-caption mt-8 mb-3 px-2.5 text-xg-neutral-500">Componentes</p>
        <div className="flex flex-col gap-1">
          <SidebarLink to="/componentes/botao" active={buttonActive} inSection={buttonActive}>
            <span aria-hidden="true" className="flex size-3.5 items-center justify-center rounded-[3px] border border-xg-green-600 bg-xg-green-50" />
            Botão
          </SidebarLink>
        </div>
      </nav>
    </aside>
  )
}
