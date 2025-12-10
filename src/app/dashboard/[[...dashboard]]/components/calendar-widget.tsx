import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function CalendarWidget() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Calendar</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">March</span>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
        <div>Sun 5</div>
        <div>Mon 6</div>
        <div>Tue 7</div>
        <div className="rounded-md bg-primary px-1 py-1 text-primary-foreground">Wed 8</div>
        <div>Thu 9</div>
        <div>Fri 10</div>
        <div>Sat 11</div>
      </div>

      <div className="mt-6 max-h-[150px] space-y-4 overflow-y-auto">
        <div className="rounded-lg border bg-card p-3 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-sm font-medium">Mesh Weekly Meeting</h4>
              <p className="text-xs text-muted-foreground">9.00 am - 10.00 am</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex -space-x-2">
              <Avatar className="h-6 w-6 border-2 border-background">
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6 border-2 border-background">
                <AvatarImage src="/avatars/02.png" />
                <AvatarFallback>KM</AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6 border-2 border-background">
                <AvatarImage src="/avatars/03.png" />
                <AvatarFallback>WK</AvatarFallback>
              </Avatar>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium">
                +7
              </div>
            </div>
            <Button variant="secondary" size="sm" className="h-6 text-xs">
              On Google Meet
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-3 shadow-sm">
          <h4 className="text-sm font-medium">Available Time</h4>
          <p className="text-xs text-muted-foreground">10.00 am - 10.40 am</p>
        </div>

        <div className="rounded-lg border bg-card p-3 shadow-sm">
          <h4 className="text-sm font-medium">Patreon Gamification Demo</h4>
          <p className="text-xs text-muted-foreground">10.45 am - 11.45 am</p>
        </div>
      </div>
    </div>
  )
}
