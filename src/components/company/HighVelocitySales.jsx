export default function HighVelocitySales() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Main container */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Left content section */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                A new way to run<br />
                high velocity sales
              </h1>
              
              {/* Get a demo link */}
              <div className="mb-12">
                <a 
                  href="#" 
                  className="text-lg text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition-colors"
                >
                  Get a demo
                </a>
              </div>
              
              {/* Quote section */}
              <div className="max-w-md">
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  "The automation has helped us double our sales process. We are able to measure everything much better."
                </p>
                <p className="text-gray-400 font-medium">- PRACTO®</p>
              </div>
            </div>
            
            {/* Right content section - Exact replica from screenshot */}
            <div className="flex-1 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center relative">
              
              {/* Profile avatar circle - top right style */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Main illustration card */}
              <div className="relative w-full max-w-sm mt-8">
                {/* Background blur elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
                
                {/* Main card with chart */}
                <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  
                  {/* Top row with stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">$24,892</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bar chart */}
                  <div className="mb-6">
                    <div className="flex items-end justify-between gap-1">
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full h-20 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-md"></div>
                        <span className="text-xs text-gray-500 mt-2">Mon</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full h-28 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-md"></div>
                        <span className="text-xs text-gray-500 mt-2">Tue</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full h-16 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-md"></div>
                        <span className="text-xs text-gray-500 mt-2">Wed</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full h-32 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-md"></div>
                        <span className="text-xs text-gray-500 mt-2">Thu</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full h-24 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-md"></div>
                        <span className="text-xs text-gray-500 mt-2">Fri</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Conversion</p>
                      <p className="text-lg font-semibold text-gray-900">3.24%</p>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div>
                      <p className="text-xs text-gray-500">Customers</p>
                      <p className="text-lg font-semibold text-gray-900">1,482</p>
                    </div>
                  </div>
                </div>

                {/* Secondary floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 w-36">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Growth</p>
                      <p className="text-sm font-bold text-gray-900">+28%</p>
                    </div>
                  </div>
                </div>

                {/* Third floating element - small circle with icon */}
                <div className="absolute top-8 -right-3 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shadow-md border-2 border-white">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Button group at the bottom */}
              <div className="flex gap-3 mt-16 w-full max-w-sm">
                <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm">
                  GET STARTED
                </button>
                <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-6 rounded-lg border border-gray-200 transition-colors text-sm">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}