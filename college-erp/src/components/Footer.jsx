export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* College Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">IET College ERP</h3>
          <p className="text-sm text-gray-300">Empowering students, faculty, and management with seamless digital tools.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/helpdesk" className="hover:underline">Help Desk</a></li>
            <li><a href="/feedback" className="hover:underline">Feedback</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              📧 <a href="mailto:support@abccollege.edu" className="hover:underline">support@abccollege.edu</a>
            </li>
            <li className="flex items-center gap-2">
              📞 <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              📚 <a href="/library" className="hover:underline">Library Portal</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} IET College ERP. All rights reserved.
      </div>
    </footer>
  )
}