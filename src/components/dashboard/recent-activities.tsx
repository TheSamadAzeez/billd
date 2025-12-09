import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function RecentActivities() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Activities</h3>
        <Button variant="ghost" size="sm" className="gap-1">
          View all
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Placeholder space for table - to be implemented */}
      <div className="mt-4 h-40" />
    </div>
  )
}
