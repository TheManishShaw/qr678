import { Separator } from '@/components/ui/separator'
import { Building, Users, Globe2 } from 'lucide-react'

export function Stats() {
  return (
    <>

    <div className="mt-16 grid  grid-cols-1 gap-8 md:grid-cols-3">

      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <Building className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-primary">1000+ Partner Clinics</h3>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-primary">150000+ happy users</h3>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <Globe2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-primary">Presence in 10+ countries</h3>
      </div>
    </div>
    <Separator className="my-14 md:w-[900px] mx-auto" />
    </>
  )
}
