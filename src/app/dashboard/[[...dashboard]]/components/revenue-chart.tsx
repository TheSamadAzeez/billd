'use client'

import { useId } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Button } from '@/components/ui/button'

const data = [
  { name: 'Jan', value: 28000 },
  { name: 'Feb', value: 25000 },
  { name: 'Mar', value: 10000 },
  { name: 'Apr', value: 15000 },
  { name: 'May', value: 21000 },
  { name: 'Jun', value: 33000 },
  { name: 'Jul', value: 30000 },
  { name: 'Aug', value: 35000 },
  { name: 'Sept', value: 28000 },
  { name: 'Oct', value: 38000 },
  { name: 'Nov', value: 35000 },
  { name: 'Dec', value: 25000 },
]

export function RevenueChart() {
  const gradientId = useId()

  return (
    <div className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Revenue</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold">$32.209</span>
            <span className="text-sm font-medium text-success">+22% vs last month</span>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-lg border bg-muted/50 p-1">
          {['1 D', '1 W', '1 M', '6 M', '1 Y', 'ALL'].map((range) => (
            <Button
              key={range}
              variant={range === '1 Y' ? 'secondary' : 'ghost'}
              size="sm"
              className="h-7 px-3 text-xs"
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-6 min-h-[300px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(262 83% 58%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(262 83% 58%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] text-muted-foreground uppercase">Jan 2025</span>
                          <span className="font-bold text-muted-foreground">${payload[0].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(262 83% 58%)"
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
