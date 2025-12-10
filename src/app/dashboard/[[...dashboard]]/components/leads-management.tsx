import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export function LeadsManagement() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Leads Management</h3>
      </div>

      <div className="mt-4 flex rounded-lg bg-muted/50 p-1">
        <Button variant="secondary" size="sm" className="flex-1 text-xs shadow-sm">
          Status
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-xs">
          Sources
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-xs">
          Qualification
        </Button>
      </div>

      <div className="mt-6 space-y-6">
        <LeadItem label="Open" count={114} percentage={44} color="bg-indigo-500" />
        <LeadItem label="In Progress" count={62} percentage={24} color="bg-violet-500" />
        <LeadItem label="Lost" count={47} percentage={18} color="bg-rose-500" />
        <LeadItem label="Won" count={38} percentage={14} color="bg-emerald-500" />
      </div>
    </div>
  )
}

function LeadItem({
  label,
  count,
  percentage,
  color,
}: {
  label: string
  count: number
  percentage: number
  color: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${color}`} />
          <span className="text-muted-foreground">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{count} leads</span>
          <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
            {percentage}%
          </span>
        </div>
      </div>
      <Progress value={percentage} className="h-2" indicatorClassName={color} />
    </div>
  )
}
