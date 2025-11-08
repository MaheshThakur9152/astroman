import Icon from './Icon'

interface SectionCardProps {
  title: string
  description: string
  icon: string
  tags?: string[]
}

export default function SectionCard({ title, description, icon, tags }: SectionCardProps) {
  return (
    <div className="bg-card-bg border border-sidebar-border rounded-2xl p-6 backdrop-blur-sm hover:bg-primary-accent-muted transition-colors duration-200">
      <div className="flex items-start gap-4">
        <Icon name={icon} className="w-8 h-8 text-primary-accent flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-heading-3 font-semibold text-primary-text mb-2">
            {title}
          </h3>
          <p className="text-body text-primary-secondary mb-4">
            {description}
          </p>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary-accent-muted text-primary-accent text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}