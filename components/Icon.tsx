import {
  Home,
  Search,
  MessageCircle,
  Video,
  Book,
  Building,
  Newspaper,
  Menu,
  Settings,
} from 'lucide-react'

const icons = {
  home: Home,
  search: Search,
  'message-circle': MessageCircle,
  video: Video,
  book: Book,
  building: Building,
  newspaper: Newspaper,
  menu: Menu,
  settings: Settings,
}

interface IconProps {
  name: string
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  const IconComponent = icons[name as keyof typeof icons]
  return IconComponent ? <IconComponent className={className} /> : null
}