"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()
  const isCartilha = pathname?.startsWith("/cartilha")

  return ( 
    <nav 
      className="text-white py-3 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#007FBA' }}
    >
      <ul className="flex items-center gap-2 text-sm font-medium">
        <li>
          <Link href="/" className="hover:underline opacity-90">
            Início
          </Link>
        </li>
        {isCartilha && (
          <>
            <li className="flex items-center opacity-70">
              <ChevronRight className="w-4 h-4" />
            </li>
            <li className="font-bold">
              Cartilha
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}