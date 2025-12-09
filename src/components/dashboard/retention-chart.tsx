'use client'

import { MoreVertical } from 'lucide-react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { Button } from '@/components/ui/button'

const data = [
  { name: 'Jan', SMEs: 40, Startups: 24, Enterprises: 24 },
  { name: 'Feb', SMEs: 30, Startups: 13, Enterprises: 22 },
  { name: 'Mar', SMEs: 20, Startups: 58, Enterprises: 22 },
  { name: 'Apr', SMEs: 27, Startups: 39, Enterprises: 20 },
  { name: 'May', SMEs: 18, Startups: 48, Enterprises: 21 },
  { name: 'Jun', SMEs: 23, Startups: 38, Enterprises: 25 },
  { name: 'Jul', SMEs: 34, Startups: 43, Enterprises: 21 },
]

export function RetentionChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Retention Rate</h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold">95%</span>
            <span className="text-sm font-medium text-success">+12% vs last month</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-indigo-500" />
          <span>SMEs</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-violet-500" />
          <span>Startups</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-fuchsia-500" />
          <span>Enterprises</span>
        </div>
      </div>

      <div className="mt-6 h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] text-muted-foreground uppercase">Total</span>
                          <span className="font-bold text-muted-foreground">
                            {payload.reduce((acc, p) => acc + (p.value as number), 0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar dataKey="SMEs" stackId="a" fill="hsl(262 83% 58%)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="Startups" stackId="a" fill="hsl(262 83% 58% / 0.7)" />
            <Bar dataKey="Enterprises" stackId="a" fill="hsl(262 83% 58% / 0.4)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
