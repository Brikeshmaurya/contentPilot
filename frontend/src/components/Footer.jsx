export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0c0c0c] text-white py-16 px-8 md:px-20 rounded-t-3xl">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto">
        
        {/* Logo + Title */}
        <div className="mb-12">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/10">
              <span className="text-2xl font-bold">Ai</span>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold">Content Pilot</h2>
              <p className="text-gray-300 text-sm mt-1">
                Create, Optimize, Publish.
              </p>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-10 mb-14
        ">
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="text-gray-300 space-y-3">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="text-gray-300 space-y-3">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Join Newsletter</h3>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  w-full px-4 py-3 rounded-md 
                  bg-white text-black placeholder-gray-500
                  focus:outline-none
                "
              />

              <button
                type="submit"
                className="
                  px-5 py-2 rounded-md 
                  text-white font-medium
                  bg-gradient-to-r from-indigo-400 to-pink-400
                "
              >
                Subscribe
              </button>

              {/* social icons */}
              <div className="flex gap-3 mt-2">
                <a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:bg-white/10" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:bg-white/10" href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:bg-white/10" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-white/10 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>© 2025 Content Pilot. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
