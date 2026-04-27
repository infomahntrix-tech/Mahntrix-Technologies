"use client";

import Image from "next/image";

export default function HeroPerfect() {
  return ( 
    <section className="bg-[#F8FAFC] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20">
        
        <div>
          <p className="text-[11px] tracking-[2px] text-[#1DA1F2] font-bold uppercase mb-3">
            SALES CRM
          </p>

          <h1 className="text-[34px] md:text-[52px] font-bold leading-[1.15] text-[#0F172A]">
            A new way to run <br />
            <span className="text-[#0B3C8C]">high velocity sales</span>
          </h1>

          <p className="mt-4 text-gray-500 text-[14px] max-w-md leading-relaxed">
            Get high velocity sales at your real scale with ease,
            digital sales and seamless automation.
          </p>

          <button className="btn-primary mt-6">
            Get a demo
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          
          <div className="relative w-[320px] h-[300px] bg-gradient-to-b from-[#0B3C8C] to-[#1DA1F2] rounded-[22px] shadow-2xl shadow-blue-900/20"></div>

          <div className="absolute left-[140px] top-1/2 -translate-y-1/2 z-10">
            <div className="w-[110px] h-[110px] rounded-[16px] overflow-hidden border-[5px] border-white shadow-xl">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={110}
                height={110}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[320px] bg-white rounded-[18px] shadow-[0_20px_50px_rgba(11,60,140,0.12)] p-5 border border-blue-50">
            
            <h3 className="text-[15px] font-bold text-[#0F172A] flex items-center">
              <span className="text-[#1DA1F2] mr-1 text-lg">•</span>
              practo
            </h3>

            <p className="text-[12.5px] text-gray-500 mt-2 leading-[1.6]">
              "The automation has helped us deliver 30% more process.
              We're able to manage everything much better."
            </p>

            <p className="mt-3 text-[12px] font-bold text-[#0B3C8C]">
              AMIT SHARMA
            </p>
            <p className="text-[10.5px] text-gray-400 font-medium">
              Co-founder
            </p>

            <div className="flex items-center justify-between mt-4">
              
              <span className="text-[#0B3C8C] text-[12px] font-bold">
                G2 4.8
              </span>

              <div className="flex items-center gap-2">
                <div className="w-[34px] h-[34px] rounded-full border-[2.5px] border-[#1DA1F2] flex items-center justify-center text-[10px] font-bold text-[#0B3C8C]">
                  90%
                </div>
                <span className="text-[10px] text-gray-400 font-medium">
                  ROI Increase
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}