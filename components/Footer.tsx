export default function Footer() {
  return (
    <footer className="bg-sidebar-bg border-t border-sidebar-border py-12">
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-primary-text font-semibold mb-4">Our Research</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Kundali</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Safety</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Preparedness Framework</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Technical Papers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-text font-semibold mb-4">ChatGPT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">For Everyone</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">For Teams</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">For Enterprises</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-text font-semibold mb-4">For Business</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Overview</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Solutions</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Industries</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Customer Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-text font-semibold mb-4">Terms & Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Brand Guidelines</a></li>
              <li><a href="#" className="text-primary-secondary hover:text-primary-text transition-colors">Other Policies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-sidebar-border text-center">
          <p className="text-primary-secondary text-sm">
            © 2025 AstroDost, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}