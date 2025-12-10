import { AppSidebar } from '@/components/app-sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { DashboardHeader } from '../dashboard/header'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex h-screen flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="w-full bg-background px-6">
            <DashboardHeader />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 overflow-hidden bg-background p-4 pt-0">
          <ScrollArea className="h-full w-full">
            <div className="pr-4">{children}</div>
          </ScrollArea>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
