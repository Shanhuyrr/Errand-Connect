export default function Footer() {
  return (
    <footer className="glass border-t border-gray-200 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <div className="mb-4 md:mb-0">
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            Errand<span className="text-blue-600">Connect</span>
          </span>
          <p className="text-sm mt-2 font-medium">Simplifying campus life, one task at a time.</p>
        </div>
        <div className="flex space-x-6 font-semibold">
          <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
          <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-gray-200 pt-4 text-gray-500 font-medium">
        &copy; {new Date().getFullYear()} ErrandConnect. All rights reserved.
      </div>
    </footer>
  );
}
