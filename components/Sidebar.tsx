'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from './Icon'

interface SidebarItem {
  id: string
  href?: string
  label: string
  icon: string
  exact?: boolean
}

interface SidebarProps {
  items?: SidebarItem[]
  activeId?: string
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

const defaultItems: SidebarItem[] = [
  { id: 'home', href: '/', label: 'Home', icon: 'home', exact: true },
  { id: 'research', href: '/research', label: 'Research', icon: 'search' },
  { id: 'chatgpt', href: '/chatgpt', label: 'ChatGPT', icon: 'message-circle' },
  { id: 'sora', href: '/sora', label: 'Sora', icon: 'video' },
  { id: 'stories', href: '/stories', label: 'Stories', icon: 'book' },
  { id: 'company', href: '/company', label: 'Company', icon: 'building' },
  { id: 'news', href: '/news', label: 'News', icon: 'newspaper' },
]

export default function Sidebar({
  items = defaultItems,
  activeId,
  isOpen,
  onClose,
  onOpen
}: SidebarProps) {
  const router = useRouter()
  const [active, setActive] = useState(activeId || items[0]?.id)

  useEffect(() => {
    const current = items.find(item =>
      item.exact ? router.pathname === item.href : router.pathname.startsWith(item.href || '')
    )
    if (current) setActive(current.id)
  }, [router.pathname, items])

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-primary-accent text-white"
        onClick={onOpen}
        aria-label="Open sidebar"
      >
        <Icon name="menu" className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-sidebar-width p-6 bg-sidebar-bg border-r border-sidebar-border z-40 transform transition-transform duration-300 ease-out-cubic ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary-accent rounded-lg"></div>
          <span className="text-lg font-semibold">AstroDost</span>
        </div>

        {/* Nav */}
        <nav className="space-y-2">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href || '#'}
              className={`flex items-center gap-4 px-3 py-2 rounded-lg text-sm font-medium text-primary-text hover:translate-x-3 transition-transform duration-200 ${
                active === item.id
                  ? 'bg-[linear-gradient(90deg,#7c3aed,rgba(124,58,237,0.85))] shadow-md'
                  : 'hover:bg-primary-accent-muted'
              }`}
              onClick={onClose}
              aria-current={active === item.id ? 'page' : undefined}
            >
              <Icon name={item.icon} className="w-5 h-5" />
              <span className="uppercase tracking-widest">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-secondary rounded-full"></div>
            <div>
              <p className="text-sm font-medium">User</p>
              <p className="text-xs text-primary-secondary">user@example.com</p>
            </div>
          </div>
          <button className="p-2 rounded-md hover:bg-primary-accent-muted">
            <Icon name="settings" className="w-5 h-5" />
          </button>
        </div>
      </aside>
    </>
  )
}