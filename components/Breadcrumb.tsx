"use client"

export function Breadcrumb() {
  return ( 
    <nav 
      className="text-white py-3 px-4 md:px-8 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#007FBA' }}
    >
      <ul className="flex items-center gap-2 text-sm ">
        <li>
          <a href="https://kassiob.github.io/mental/" className="hover:underline" rel="noopener noreferrer">
            Início
          </a>
        </li>
      </ul>
    </nav>
  )
}