'use client'

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map as MapIcon,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react'
import type * as React from 'react'

import { NavMain } from '@/components/custom/sidebar/nav-main'
import { NavUser } from '@/components/custom/sidebar/nav-user'
import { TeamSwitcher } from '@/components/custom/sidebar/team-switcher'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'John Doe',
    email: 'john@billd.com',
    avatar: '/avatars/user.jpg',
  },
  teams: [
    {
      name: 'Billd',
      logo: GalleryVerticalEnd,
      plan: 'Professional',
    },
    {
      name: 'Billd Agency',
      logo: AudioWaveform,
      plan: 'Enterprise',
    },
    {
      name: 'Freelance',
      logo: Command,
      plan: 'Starter',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: SquareTerminal,
    },
    {
      title: 'Clients',
      url: '/clients',
      icon: Bot,
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: Frame,
    },
    {
      title: 'Invoices',
      url: '/invoices',
      icon: BookOpen,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: MapIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
