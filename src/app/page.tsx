// import { Profile } from '@/components/Profile'
// import { Timeline } from '@/components/Timeline'
// import { Header } from '@/components/Header'
// import { Sidebar } from '@/components/Sidebar'

// export default function Home() {
//   return (
//     <div className="max-w-2xl mx-auto">
//      <Sidebar  />
//       <Header />
//       <Profile />
//       <Timeline />
//     </div>
//   )
// }

import { Profile } from '@/components/Profile'
import { Timeline } from '@/components/Timeline'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Header />
      <Profile />
      <Timeline />
    </div>
  )
}
