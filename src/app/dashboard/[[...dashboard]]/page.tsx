import { CalendarWidget } from '@/components/dashboard/calendar-widget'
import { RecentActivities } from '@/components/dashboard/recent-activities'
// import { LeadsManagement } from '@/components/dashboard/leads-management'
import { RetentionChart } from '@/components/dashboard/retention-chart'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { StatsCards } from '@/components/dashboard/stats-cards'

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
          <div className="col-span-12 flex min-h-[600px] flex-col gap-4 md:col-span-9">
            <StatsCards />
            <div className="flex-1">
              <RevenueChart />
            </div>
          </div>
          <div className="col-span-12 flex min-h-[600px] flex-col gap-4 md:col-span-3">
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
