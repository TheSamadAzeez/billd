import { Briefcase, DollarSign, TrendingDown, TrendingUp, Users } from 'lucide-react'

// Dummy data
const DUMMY_DATA = {
  totalRevenue: 45750.0, // Sum of all PAID invoices
  outstanding: 12500.0, // Sum of all PENDING invoices
  activeProjects: 8, // Count of ACTIVE projects
  totalClients: 24, // Count of total clients
}

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card
        title="Total Revenue"
        value={`$${DUMMY_DATA.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
        subtext="+15% vs last month"
        trendDirection="up"
        icon={DollarSign}
      />
      <Card
        title="Outstanding"
        value={`$${DUMMY_DATA.outstanding.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
        subtext="Pending invoices"
        trendDirection="down"
        icon={TrendingDown}
      />
      <Card
        title="Active Projects"
        value={DUMMY_DATA.activeProjects.toString()}
        subtext="+2 this month"
        trendDirection="up"
        icon={Briefcase}
      />
      <Card
        title="Total Clients"
        value={DUMMY_DATA.totalClients.toString()}
        subtext="+5 vs last month"
        trendDirection="up"
        icon={Users}
      />
    </div>
  )
}

function Card({
  title,
  value,
  subtext,
  trendDirection,
  icon: Icon,
}: {
  title: string
  value: string
  subtext: string
  trendDirection?: 'up' | 'down'
  icon: any
}) {
  const TrendIcon = trendDirection === 'up' ? TrendingUp : TrendingDown

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-muted/50">
          <Icon className="h-4 w-4 text-foreground" />
        </div>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{subtext}</span>
        {TrendIcon && (
          <div
            className={`inline-flex items-center justify-center rounded-md p-1 ${
              trendDirection === 'up' ? 'bg-success-muted text-success' : 'bg-destructive-muted text-destructive'
            }`}
          >
            <TrendIcon className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  )
}
