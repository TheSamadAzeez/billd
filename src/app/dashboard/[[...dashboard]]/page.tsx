import { CalendarWidget } from '@/app/dashboard/[[...dashboard]]/components/calendar-widget'
import { RecentActivities } from '@/app/dashboard/[[...dashboard]]/components/recent-activities'
// import { LeadsManagement } from '@/components/dashboard/leads-management'
import { RetentionChart } from '@/app/dashboard/[[...dashboard]]/components/retention-chart'
import { RevenueChart } from '@/app/dashboard/[[...dashboard]]/components/revenue-chart'
import { StatsCards } from '@/app/dashboard/[[...dashboard]]/components/stats-cards'

interface DashboardPageProps {
  params: Promise<{
    dashboard?: string[]
  }>
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { dashboard } = await params
  if (dashboard && dashboard.length > 0) {
    // console.log('url ID:', dashboard)
    // console.log('url ID:', dashboard.join('/'))
    console.log('url ID:', dashboard[0])
  }
  return (
    <div className="min-h-screen flex-1 flex-col overflow-hidden">
      <main className="space-y-4 p-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex min-h-[600px] flex-col gap-4 md:col-span-8">
            <StatsCards />
            <div className="flex-1">
              <RevenueChart />
            </div>
          </div>
          <div className="col-span-12 flex min-h-[600px] flex-col gap-4 md:col-span-4">
            <CalendarWidget />
            <RetentionChart />
            {/* <LeadsManagement /> */}
          </div>
        </div>
        <RecentActivities />
      </main>
    </div>
  )
}
