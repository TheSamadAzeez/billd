'use client'

import { Bell, Check, Search, Share2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function DashboardHeader() {
  return (
    <header className="flex h-16 w-full items-center justify-between gap-4 border-b">
      <SidebarTrigger className="mr-2" />
      <div className="flex items-center gap-2">
        <LayoutDashboardIcon className="h-5 w-5" />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
          <Check className="h-4 w-4 text-success" />
          <span className="font-medium text-success">Last updated now</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 bg-linear-to-tr from-violet-500 to-orange-400 text-white hover:text-white"
          >
            <Sparkles className="h-4 w-4" />
            <span className="sr-only">AI Actions</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function LayoutDashboardIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Dashboard Icon</title>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}
