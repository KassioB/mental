"use client"

import Logo from "../assets/logo.png"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isCartilha = pathname?.startsWith("/cartilha")

  return (
    <header
      className="text-white py-4 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#02629C' }}
    >
      <div className="flex items-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="-ml-2 p-2 hover:bg-white/10 rounded-md transition-colors" aria-label="Menu">
              <Menu className="w-8 h-8" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64 p-2 bg-white rounded-xl shadow-2xl border-none">
            <div className="p-2 mb-2 bg-sky-300 rounded-xl border-b border-gray-100">
              <p className="text-xs font-semibold text-sky-800 uppercase tracking-wider">Navegação</p>
            </div>
            <DropdownMenuItem asChild>
              <Link href="/cartilha" className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer font-medium">
                Ir para Cartilha
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#mapa" className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors cursor-pointer font-medium">
                Mapa da Saúde Mental
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src={Logo.src} alt="Logo" width={32} height={32} className="w-8 h-8" loading="eager" />
          </Link>
          <h1 className="text-xl ml-4 md:text-2xl font-bold text-balance uppercase">
            {isCartilha ? "CARTILHA MENTE ABERTA" : "MAPA DA SAÚDE MENTAL DE ALAGOAS"}
          </h1>
        </div>
      </div>
    </header>
  )
}