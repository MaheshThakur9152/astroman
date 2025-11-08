import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SectionCard from '../components/SectionCard'

export default function Home() {
  return (
    <Layout>
      <Hero
        title="What can I help with?"
        subtitle="Ask anything. Get instant answers."
        primaryCta={{ label: 'Get started', href: '#' }}
        secondaryCta={{ label: 'Learn more', href: '#' }}
        visual={<img src="/placeholder.svg" alt="Placeholder" className="w-64 h-64" />}
      />
      <div className="max-w-container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SectionCard
            title="Research"
            description="Explore the latest advancements in AI."
            icon="search"
            tags={['AI', 'Research']}
          />
          <SectionCard
            title="ChatGPT"
            description="Conversational AI for everyone."
            icon="message-circle"
            tags={['Chat', 'AI']}
          />
          <SectionCard
            title="Sora"
            description="AI-powered video generation."
            icon="video"
            tags={['Video', 'AI']}
          />
        </div>
      </div>
    </Layout>
  )
}