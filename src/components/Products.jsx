import React from 'react';
import Logo from './Logo';
import { Briefcase, ShieldCheck, UserCheck, Headset, ShoppingCart, ChevronLeft, ChevronRight, Bot, Cpu, Wifi, Settings, Monitor, FileText, MapPin, Truck, Star } from 'lucide-react';

const productsData = [
  { title: 'Robotics Starter Kit', rating: '4.8', reviews: '320', price: '2,999', icon: Bot },
  { title: 'AI Learning Kit', rating: '4.7', reviews: '285', price: '4,499', icon: Cpu },
  { title: 'IoT Kit', rating: '4.6', reviews: '210', price: '3,499', icon: Wifi },
  { title: '7-in-1 Robot Kit', rating: '4.8', reviews: '190', price: '5,999', icon: Settings },
  { title: 'Lab Setup Kit', rating: '4.7', reviews: '160', price: '8,999', icon: Monitor },
];

const ProductCard = ({ product }) => (
  <div className="relative flex flex-col items-center w-[15vw] h-[22vw] mt-[2vw] group z-20">
    
    {/* CSS Drone holding the screen */}
    <div className="absolute -top-[2vw] flex flex-col items-center justify-center w-full pointer-events-none z-30">
      <div className="relative flex items-center justify-center">
        {/* Drone Body */}
        <div className="w-[3.5vw] h-[0.8vw] bg-[#000814] border border-brand-cyan rounded-full shadow-[0_0_15px_#00d4ff] flex justify-center items-center z-10">
          <div className="w-[1vw] h-[2px] bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></div>
        </div>
        {/* Left Propeller */}
        <div className="absolute -left-[1.8vw] w-[2.2vw] h-[0.6vw] border-2 border-brand-cyan/80 rounded-[50%] animate-[spin_0.5s_linear_infinite] shadow-[0_0_8px_#00d4ff]"></div>
        {/* Right Propeller */}
        <div className="absolute -right-[1.8vw] w-[2.2vw] h-[0.6vw] border-2 border-brand-cyan/80 rounded-[50%] animate-[spin_0.5s_linear_infinite] shadow-[0_0_8px_#00d4ff]"></div>
        {/* Claws connecting to screen */}
        <div className="absolute top-[0.6vw] left-[0.6vw] w-[2px] h-[1.8vw] bg-brand-cyan shadow-[0_0_5px_#00d4ff]"></div>
        <div className="absolute top-[0.6vw] right-[0.6vw] w-[2px] h-[1.8vw] bg-brand-cyan shadow-[0_0_5px_#00d4ff]"></div>
      </div>
    </div>

    {/* Glowing Glass Screen */}
    <div className="relative w-full h-full border border-brand-cyan/60 rounded-xl bg-gradient-to-b from-brand-cyan/10 to-[#001133]/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.15)] flex flex-col transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] group-hover:border-brand-cyan group-hover:-translate-y-3 overflow-hidden">
      
      {/* Decorative corner cutouts */}
      <div className="absolute top-0 left-0 w-[1vw] h-[1vw] border-t-2 border-l-2 border-white/90 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-[1vw] h-[1vw] border-t-2 border-r-2 border-white/90 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-[1vw] h-[1vw] border-b-2 border-l-2 border-white/90 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-[1vw] h-[1vw] border-b-2 border-r-2 border-white/90 rounded-br-lg"></div>

      {/* Product Image Placeholder (Icon) */}
      <div className="flex-1 flex items-center justify-center w-full relative mt-[2vw]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.2)_0%,_transparent_60%)]"></div>
        <product.icon className="w-[5vw] h-[5vw] text-brand-cyan/90 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:scale-110 group-hover:text-white transition-all duration-500" strokeWidth={1} />
      </div>

      {/* Product Details - Increased padding to prevent overlap */}
      <div className="w-full flex flex-col justify-end p-[6%] pb-[10%] bg-gradient-to-t from-[#000814]/90 to-transparent">
        <h3 className="text-[0.9vw] font-sans font-bold text-white tracking-wide mb-1 leading-tight drop-shadow-md">
          {product.title}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center text-yellow-400 gap-0.5 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-[0.8vw] h-[0.8vw] fill-current" />
            ))}
          </div>
          <span className="text-white/70 text-[0.65vw] font-jura">{product.rating} ({product.reviews})</span>
        </div>
        <p className="text-[1.2vw] font-michroma text-white mb-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
          {'\u20B9'}{product.price}
        </p>

        {/* Buttons */}
        <div className="flex justify-between gap-[0.5vw] w-full">
          <button className="flex-1 flex items-center justify-center gap-1 py-[0.6vw] border border-brand-cyan/40 rounded-md bg-brand-cyan/5 hover:bg-brand-cyan/20 transition-colors cursor-pointer text-white text-[0.6vw] font-jura font-bold tracking-widest">
            <ShoppingCart className="w-[0.8vw] h-[0.8vw]" />
            Add to Cart
          </button>
          <button className="flex-1 py-[0.6vw] rounded-md bg-gradient-to-r from-brand-cyan to-blue-500 hover:brightness-125 transition-all shadow-[0_0_15px_rgba(0,212,255,0.4)] cursor-pointer text-white text-[0.6vw] font-sans font-bold uppercase tracking-wider">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="w-full h-full relative z-0 overflow-hidden bg-[#001a4d]">
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        style={{
          backgroundImage: 'url(/products_clean_bg.jpg)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Cinematic Blue Tint overlay for better contrast */}
      <div className="absolute inset-0 bg-[#001533]/40 pointer-events-none z-0"></div>

      {/* --- TOP LEFT: TITLES & BADGE --- */}
      <div className="absolute top-[12%] left-[4%] flex flex-col items-start z-20 max-w-[35%]">
        <Logo hideSubtitle={true} textSize="w-[12vw]" className="mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
        <h1 className="text-[3vw] font-sans font-bold text-white drop-shadow-[0_2px_15px_rgba(0,212,255,0.4)] leading-tight mb-2 tracking-wide">
          Products
        </h1>
        <p className="text-[0.9vw] font-jura text-white/90 mb-6 drop-shadow-md tracking-widest">
          Innovative products for Robotics, AI and Automation learning.
        </p>
        
        {/* Curated Badge */}
        <div className="flex items-center gap-3 px-5 py-2 rounded-[4px] border border-brand-cyan/60 bg-brand-cyan/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,212,255,0.2)]">
          <Briefcase className="w-[1.2vw] h-[1.2vw] text-brand-cyan" />
          <span className="text-[0.8vw] font-jura text-white tracking-widest">
            Curated for Learners, Built for the Future.
          </span>
        </div>
      </div>

      {/* --- TOP RIGHT: FEATURE BADGES --- */}
      <div className="absolute top-[15%] right-[5%] flex items-center gap-6 z-20">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-[1.5vw] h-[1.5vw] text-brand-cyan drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
          <span className="text-[0.8vw] font-jura text-white/90 tracking-widest">Quality<br/>Assured</span>
        </div>
        <div className="flex items-center gap-2">
          <UserCheck className="w-[1.5vw] h-[1.5vw] text-brand-cyan drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
          <span className="text-[0.8vw] font-jura text-white/90 tracking-widest">Learner<br/>Friendly</span>
        </div>
        <div className="flex items-center gap-2">
          <Headset className="w-[1.5vw] h-[1.5vw] text-brand-cyan drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
          <span className="text-[0.8vw] font-jura text-white/90 tracking-widest">Tech<br/>Support</span>
        </div>
      </div>

      {/* --- CENTER CAROUSEL: PRODUCTS --- */}
      <div className="absolute top-[28%] left-0 w-full h-[60%] flex items-center justify-center gap-[1.5vw] z-20 px-[4%]">
        
        {/* Left Arrow */}
        <button className="w-[3vw] h-[3vw] rounded-full border border-brand-cyan/50 bg-[#001a4d]/60 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-brand-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all mr-[1vw]">
          <ChevronLeft className="w-[2vw] h-[2vw]" />
        </button>

        {/* Product Cards */}
        {productsData.map((prod, idx) => (
          <ProductCard key={idx} product={prod} />
        ))}

        {/* Right Arrow */}
        <button className="w-[3vw] h-[3vw] rounded-full border border-brand-cyan/50 bg-[#001a4d]/60 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-brand-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all ml-[1vw]">
          <ChevronRight className="w-[2vw] h-[2vw]" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-[10%] w-full flex items-center justify-center gap-4 z-20">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_#00d4ff]"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
        <div className="flex items-center gap-2 text-white/60 text-[0.8vw] font-jura tracking-widest">
          <ChevronLeft className="w-[1vw] h-[1vw]" /> Scroll for more products
        </div>
      </div>

      {/* --- BOTTOM FOOTER BAR --- */}
      <div className="absolute bottom-[3%] left-[10%] w-[80%] h-[6%] border border-brand-cyan/40 bg-[#001a4d]/80 backdrop-blur-md flex items-center justify-between px-[5%] z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        
        {/* Angled cutouts on ends */}
        <div className="absolute top-0 -left-[1.5vh] w-[3vh] h-full bg-brand-cyan/40 skew-x-[-30deg]"></div>
        <div className="absolute top-0 -right-[1.5vh] w-[3vh] h-full bg-brand-cyan/40 skew-x-[30deg]"></div>

        <div className="flex items-center gap-3 text-white/90 font-jura text-[0.85vw] tracking-widest border-r border-white/20 pr-[5%]">
          <FileText className="w-[1.2vw] h-[1.2vw] text-brand-cyan" />
          GSTIN: Available on Invoice
        </div>
        
        <div className="flex items-center gap-3 text-white/90 font-jura text-[0.85vw] tracking-widest border-r border-white/20 pr-[5%]">
          <MapPin className="w-[1.2vw] h-[1.2vw] text-brand-cyan" />
          Source Location: Jodhpur, Rajasthan
        </div>
        
        <div className="flex items-center gap-3 text-white/90 font-jura text-[0.85vw] tracking-widest">
          <Truck className="w-[1.2vw] h-[1.2vw] text-brand-cyan" />
          Expected Delivery: 5-10 Days
        </div>
      </div>

    </div>
  );
};

export default Products;
