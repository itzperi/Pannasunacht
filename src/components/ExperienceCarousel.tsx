import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const STAGES = [
  {
    title: "Hopeful at the Start",
    content: "When members join Panasuna, they feel a sense of purpose — finally a plan that works for real people, not just the wealthy.",
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    bg: '#F4845F',
    quote: "Hopeful & Relieved"
  },
  {
    title: "Safe & Secure",
    content: "With full transparency and a trusted Board of Directors, members say they sleep better knowing their savings are in trusted hands.",
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    bg: '#6BBF7A',
    quote: "Safe & Confident"
  },
  {
    title: "Confident Mid-Way",
    content: "As months pass and every installment is tracked, our members feel in control of their financial future — no surprises, no hidden costs.",
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    bg: '#E882B4',
    quote: "Disciplined & In Control"
  },
  {
    title: "Excited at the Bid",
    content: "The bidding process brings a rush — knowing that any month, it could be your turn to receive the fund and fulfill a dream.",
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    bg: '#6EB5FF',
    quote: "Excited & Empowered"
  },
  {
    title: "Proud at the End",
    content: "When the final payout arrives, members feel proud — not just of the money saved, but of the discipline they built along the way.",
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    bg: '#85AB8B',
    quote: "Proud & Grateful"
  }
];

export default function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    // Preload images
    STAGES.forEach(stage => {
      const img = new Image();
      img.src = stage.src;
    });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % STAGES.length);
    } else {
      setActiveIndex((prev) => (prev + STAGES.length - 1) % STAGES.length);
    }
    setTimeout(() => setIsAnimating(false), 650);
  };

  const getRole = (index: number) => {
    const total = STAGES.length;
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 1) % total) return 'right';
    if (index === (activeIndex + total - 1) % total) return 'left';
    return 'back';
  };

  return (
    <section 
      id="experience"
      className="relative w-full h-[90vh] sm:h-screen overflow-hidden transition-colors duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ backgroundColor: STAGES[activeIndex].bg, fontFamily: 'Inter, sans-serif' }}
    >
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-40 z-10" />

      {/* Ghost Text */}
      <div className="absolute inset-x-0 top-[18%] flex items-center justify-center pointer-events-none select-none z-2">
        <h2 className="font-anton text-[clamp(60px,20vw,300px)] font-black text-white opacity-20 leading-none uppercase tracking-tighter whitespace-nowrap">
          EXPERIENCE
        </h2>
      </div>

      <div className="absolute top-6 left-4 sm:left-8 z-50">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white opacity-90">
          The Panasuna Journey
        </span>
      </div>

      {/* Carousel Items */}
      <div className="absolute inset-0 z-10">
        {STAGES.map((stage, i) => {
          const role = getRole(i);
          let style: React.CSSProperties = {
            position: 'absolute',
            bottom: isMobile ? '22%' : '0',
            left: '50%',
            height: isMobile ? '60%' : '85%',
            aspectRatio: '0.6 / 1',
            transform: 'translateX(-50%) scale(1)',
            transition: 'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms, opacity 650ms, left 650ms, bottom 650ms',
            opacity: 0,
            filter: 'blur(10px)',
            zIndex: 5,
            willChange: 'transform, filter, opacity'
          };

          if (role === 'center') {
            style = { ...style, transform: `translateX(-50%) scale(${isMobile ? 1.15 : 1.45})`, opacity: 1, filter: 'blur(0px)', zIndex: 30 };
          } else if (role === 'left') {
            style = { ...style, left: isMobile ? '15%' : '25%', height: isMobile ? '45%' : '65%', bottom: isMobile ? '28%' : '8%', opacity: 0.6, filter: 'blur(4px)', zIndex: 20 };
          } else if (role === 'right') {
            style = { ...style, left: isMobile ? '85%' : '75%', height: isMobile ? '45%' : '65%', bottom: isMobile ? '28%' : '8%', opacity: 0.6, filter: 'blur(4px)', zIndex: 20 };
          } else {
            // back items
            style = { ...style, height: isMobile ? '35%' : '55%', bottom: isMobile ? '32%' : '12%', opacity: 0, filter: 'blur(10px)', zIndex: 5 };
          }

          return (
            <div key={i} style={style}>
              <img 
                src={stage.src} 
                alt={stage.title}
                className="w-full h-full object-contain object-bottom select-none pointer-events-none"
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation & Content */}
      <div className="absolute bottom-6 left-4 sm:bottom-16 sm:left-16 md:bottom-20 md:left-24 z-50 max-w-[320px] sm:max-w-[450px]">
        <div className="mb-4 sm:mb-8 transition-opacity duration-300">
           <h3 className="text-white font-bold uppercase tracking-wider text-lg sm:text-2xl mb-1">
            {STAGES[activeIndex].title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed hidden sm:block">
            {STAGES[activeIndex].content}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('prev')}
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/10 transition-all active:scale-95"
            aria-label="Previous stage"
          >
            <ArrowLeft strokeWidth={2.5} size={isMobile ? 20 : 26} />
          </button>
          <button 
            onClick={() => navigate('next')}
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/10 transition-all active:scale-95"
            aria-label="Next stage"
          >
            <ArrowRight strokeWidth={2.5} size={isMobile ? 20 : 26} />
          </button>
        </div>
      </div>

      {/* Quote */}
      <div className="absolute bottom-6 right-4 sm:bottom-16 sm:right-10 md:bottom-20 md:right-12 z-50 text-right">
        <div className="flex flex-col items-end">
          <span className="font-anton text-2xl sm:text-4xl md:text-5xl text-white opacity-95 leading-none uppercase tracking-tighter">
            {STAGES[activeIndex].quote}
          </span>
          <a href="#contact" className="mt-4 flex items-center gap-2 text-white group">
            <span className="text-sm font-semibold uppercase tracking-widest group-hover:mr-2 transition-all">START YOUR STORY</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
