
// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { Home, User, Briefcase, Mail, Settings } from 'lucide-react'

// export function Sidebar() {
//   const pathname = usePathname()

//   const isActive = (href: string) => pathname === href

//   return (
//     <aside className="fixed bottom-0 lg:left-0 lg:top-0 w-full lg:w-40 xl:w-72 bg-black border-t lg:border-r border-gray-800 z-50">
//       <div className="h-full flex lg:flex-col justify-between p-4">
//         <nav className="w-full lg:mt-8">
//           <ul className="flex lg:flex-col justify-around lg:justify-start lg:space-y-4">
//             <li>
//               <Link href="/" className={`nav-link ${isActive('/') ? 'text-blue' : ''}`}>
//                 <Home className="nav-icon" />

//                 <span className="hidden lg:inline">Home</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className={`nav-link ${isActive('/about') ? 'text-blue' : ''}`}>
//                 <User className="nav-icon" />
//                 <span className="hidden lg:inline">About</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/projects" className={`nav-link ${isActive('/projects') ? 'text-blue' : ''}`}>
//                 <Briefcase className="nav-icon" />
//                 <span className="hidden lg:inline">Projects</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'text-blue' : ''}`}>
//                 <Mail className="nav-icon" />
//                 <span className="hidden lg:inline">Contact</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="hidden lg:block lg:mt-auto">
//           <Link href="/settings" className={`nav-link ${isActive('/settings') ? 'bg-gray-800' : ''}`}>
//             <Settings className="nav-icon" />
//             <span className="hidden lg:inline">Settings</span>
//           </Link>
//         </div>
//       </div>
//     </aside>
//   )
// }

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Mail, Settings } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <aside className="fixed bottom-0 lg:left-0 lg:top-0 w-full lg:w-40 xl:w-72 bg-black border-t lg:border-r border-gray-800 z-50">
      <div className="h-full flex lg:flex-col justify-between p-4">
        <nav className="w-full lg:mt-8">
          <ul className="flex lg:flex-col justify-around lg:justify-start lg:space-y-4">
            <li>
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                <Home className="sidebar-icon" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                <User className="sidebar-icon" />
                <span className="hidden lg:inline">About</span>
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
                <Briefcase className="sidebar-icon" />
                <span className="hidden lg:inline">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                <Mail className="sidebar-icon" />
                <span className="hidden lg:inline">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block lg:mt-auto">
          <Link href="/settings" className={`nav-link ${isActive('/settings') ? 'active' : ''}`}>
            <Settings className="sidebar-icon" />
            <span className="hidden lg:inline">Settings</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}

