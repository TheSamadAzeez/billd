'use client'

import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const pathname = usePathname()
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <SidebarGroup>
      <SidebarMenu className={isCollapsed ? 'flex flex-col gap-1.5' : 'flex flex-col gap-1.5 px-2'}>
        {items.map((item) => {
          const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={
                  isActive
                    ? isCollapsed
                      ? 'group relative overflow-hidden rounded-lg border-b-2 border-b-primary bg-gradient-to-r from-primary/10 to-transparent shadow-sm transition-all duration-200 hover:shadow-md'
                      : 'group relative overflow-hidden rounded-lg border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-transparent shadow-sm transition-all duration-200 hover:shadow-md'
                    : 'rounded-lg transition-all duration-200 hover:scale-[1.02] hover:bg-accent/50'
                }
              >
                <Link href={item.url}>
                  {item.icon && <item.icon className="size-5" />}
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
