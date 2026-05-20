import { useState, useEffect } from 'react';
import { LogIn, UserPlus, Play, Sparkles, Menu, X, ArrowRight, ShieldCheck, Clock, Layers, Users, Zap, Mail, Phone, MapPin, MessageSquare, Star } from 'lucide-react';
import BoomerangVideoBg from './components/BoomerangVideoBg';
import ExperienceCarousel from './components/ExperienceCarousel';

const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('company');

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#why', label: 'Why Us' },
    { href: '#plans', label: 'Plans' },
    { href: '#experience', label: 'Experience' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#336443] selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 lg:py-6 transition-all duration-300">
        <div className="flex items-center gap-2 text-[#2d3a2a]">
          <span className="text-xl sm:text-2xl font-display font-bold tracking-tight">
            Panasuna<span className="text-[#336443]">Chits</span><sup className="text-[10px] font-medium">TM</sup>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium px-4 py-2 text-[#4b5b47] hover:text-[#1f2a1d] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors active:scale-95">
            Join Now
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-[#2d3a2a]">
          <a href="#login" className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity">
            <LogIn size={18} />
            Member Login
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-[#1f2a1d]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[90] lg:hidden transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-[#1f2a1d]/95 backdrop-blur-xl flex flex-col pt-24 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-white py-4 border-b border-white/10 hover:translate-x-2 transition-transform"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-12 flex flex-col gap-6">
             <button className="w-full bg-white text-[#1f2a1d] font-bold py-4 rounded-xl">Join Now</button>
             <button className="w-full border border-white text-white font-bold py-4 rounded-xl">Member Login</button>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-display leading-[0.9] text-[#1f2a1d] text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter">
            Spend What Is Left <br/>
            <span className="text-[#336443] italic drop-shadow-sm">After Saving.</span>
          </h1>
          <p className="text-[#4b5b47] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            The art is not in making money — but in keeping it. Join Panasuna Chits and turn your savings into your biggest dreams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1f2a1d] hover:bg-[#336443] text-white text-lg font-bold px-10 py-5 rounded-full transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-2">
              Start Your Saving Journey Today <ArrowRight size={20} />
            </button>
            <button className="bg-white/80 backdrop-blur-md text-[#1f2a1d] text-lg font-semibold px-10 py-5 rounded-full border border-white shadow-sm hover:bg-white transition-all">
              View Plans
            </button>
          </div>
        </div>

        {/* Floating Stat */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 bg-white/90 backdrop-blur p-4 rounded-2xl border border-white/50 shadow-lg flex items-center gap-4 animate-bounce">
           <div className="w-12 h-12 bg-[#336443] rounded-full flex items-center justify-center text-white">
              <Zap size={24} />
           </div>
           <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-[#4b5b47] font-bold">Trusted by</p>
              <p className="text-xl font-bold text-[#1f2a1d]">10,000+ Members</p>
           </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <span className="text-[#336443] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Legacy</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-[#1f2a1d] mb-8 leading-tight">
              A Pioneer in <br/> Financial Stability.
            </h2>
            
            <div className="flex gap-4 mb-10 border-b border-gray-100">
               {['company', 'vision', 'mission'].map((tab) => (
                 <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'text-[#336443] border-b-2 border-[#336443]' : 'text-[#4b5b47] opacity-50'}`}
                 >
                   {tab}
                 </button>
               ))}
            </div>

            <div className="min-h-[200px]">
              {activeTab === 'company' && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                  <p className="text-[#4b5b47] text-lg leading-relaxed mb-6">
                    Panasuna Chits (P) Ltd. has been a trusted pioneer in the chit fund industry for decades. Managed by an experienced Board of Directors, we have built a legacy of financial discipline, transparency, and stability.
                  </p>
                  <p className="text-[#4b5b47] text-lg leading-relaxed">
                    When you invest with Panasuna, you are not just saving money — you are joining a community that has helped thousands of ordinary Indians achieve extraordinary goals.
                  </p>
                </div>
              )}
              {activeTab === 'vision' && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                  <p className="text-[#4b5b47] text-lg leading-relaxed italic">
                    "To become one of India's most trusted and accessible chit fund companies — reaching every corner of the country and empowering the common person to build a stronger financial future."
                  </p>
                </div>
              )}
              {activeTab === 'mission' && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                  <p className="text-[#4b5b47] text-lg leading-relaxed">
                    To make financial planning simple, safe, and convenient for ordinary Indians. We exist to make life easier — one saving at a time.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#f0f4f0] rounded-3xl p-8 flex flex-col justify-between h-[280px]">
               <ShieldCheck size={40} className="text-[#336443]" />
               <div>
                  <h4 className="text-2xl font-bold text-[#1f2a1d] mb-2">Transparency</h4>
                  <p className="text-sm text-[#4b5b47]">Complete openness in every transaction and bid.</p>
               </div>
            </div>
            <div className="bg-[#1f2a1d] text-white rounded-3xl p-8 flex flex-col justify-between h-[280px] mt-8">
               <Clock size={40} />
               <div>
                  <h4 className="text-2xl font-bold mb-2">Speed</h4>
                  <p className="text-sm text-white/70">Fast disbursements and quick response times.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="why" className="py-24 bg-[#1f2a1d] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl sm:text-5xl font-display mb-6">Thousands of families trust us.</h2>
             <p className="text-white/60 text-lg">Here is why Panasuna stands out from the rest.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { icon: <ShieldCheck />, title: "Registered & Regulated", desc: "Fully registered under the Chit Funds Act, giving you complete legal protection." },
               { icon: <Clock />, title: "Decades of Trust", desc: "Years of experience and thousands of successfully completed groups." },
               { icon: <Layers />, title: "100% Transparency", desc: "Every transaction, bid, and payout is clearly communicated. No hidden fees." },
               { icon: <Users />, title: "Flexible Plans", desc: "Whether ₹500 or ₹50,000 month, we have plans for every goal." },
               { icon: <Zap />, title: "Prompt Payouts", desc: "Quick disbursement without unnecessary delays or paperwork." },
               { icon: <MessageSquare />, title: "Personal Service", desc: "We treat every member as family. Guided savings at every step." }
             ].map((item, i) => (
               <div key={i} className="p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

       {/* ABOUT CHIT FUNDS */}
       <section className="py-24 px-6 bg-[#f7faf7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 leading-relaxed">
            <div className="lg:w-2/5">
              <h2 className="text-4xl font-display text-[#1f2a1d] mb-6">Wait, what is a <span className="text-[#336443]">Chit Fund?</span></h2>
              <p className="text-[#4b5b47] text-lg mb-8">
                A traditional Indian savings and credit instrument that avoids the complexity of banks while offering better returns.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic font-medium text-[#1f2a1d]">
                  "No collateral required, flexible access to money, and better returns than a traditional savings account."
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 space-y-8">
               <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#336443] text-white flex-shrink-0 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1f2a1d] mb-2">Forming the Group</h4>
                    <p className="text-[#4b5b47]">A group (e.g. 20 people) contributes a fixed amount every month into a pool.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#336443] text-white flex-shrink-0 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1f2a1d] mb-2">Monthly Bidding</h4>
                    <p className="text-[#4b5b47]">The total pool is put up for bid. The member who bids lowest wins the fund that month.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#336443] text-white flex-shrink-0 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1f2a1d] mb-2">Dividends Shared</h4>
                    <p className="text-[#4b5b47]">The bid amount difference is shared equally as a dividend, reducing everyone's monthly contribution.</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#336443] text-white flex-shrink-0 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1f2a1d] mb-2">Cyclic Returns</h4>
                    <p className="text-[#4b5b47]">This continues until every member has received the fund once. Everyone wins.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHIT PLANS */}
      <section id="plans" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display text-[#1f2a1d] mb-4">A Plan for Every Dream</h2>
            <p className="text-[#4b5b47] text-lg">Choose the one that fits your pocket and your timeline.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Starter Plan", month: "500", duration: "20", total: "10,000", for: "First-time savers, students" },
              { name: "Growth Plan", month: "2,000", duration: "25", total: "50,000", for: "Young professionals", popular: true },
              { name: "Family Plan", month: "5,000", duration: "30", total: "1,50,000", for: "Education or weddings" },
              { name: "Premium Plan", month: "10,000", duration: "40", total: "4,00,000", for: "Business owners, large buys" }
            ].map((plan, i) => (
              <div key={i} className={`relative p-8 rounded-[40px] border ${plan.popular ? 'bg-[#1f2a1d] text-white border-transparent' : 'bg-white border-gray-100'} shadow-xl hover:-translate-y-2 transition-transform duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#336443] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
                <div className="mb-8">
                  <p className="text-sm opacity-60 mb-1">Monthly Contribution</p>
                  <p className="text-4xl font-display font-bold">₹{plan.month}</p>
                </div>
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between text-sm">
                      <span className="opacity-60">Duration</span>
                      <span className="font-bold">{plan.duration} Mos</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="opacity-60">Total Value</span>
                      <span className="font-bold">₹{plan.total}</span>
                   </div>
                </div>
                <p className={`text-xs mb-8 p-3 rounded-xl ${plan.popular ? 'bg-white/10' : 'bg-gray-50'} text-center font-medium`}>
                  Ideal for: {plan.for}
                </p>
                <button className={`w-full py-4 rounded-2xl font-bold transition-colors ${plan.popular ? 'bg-[#336443] hover:bg-[#457e55] text-white' : 'bg-[#1f2a1d] hover:bg-[#336443] text-white'}`}>
                  Pick This Plan
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <p className="text-[#4b5b47] mb-4">Not sure which plan suits you?</p>
             <button className="text-[#336443] font-bold underline hover:no-underline">Talk to our experts →</button>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-display text-[#1f2a1d] mb-16">The Experts Behind Your Savings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {[
               { name: "Mr. Ravi Kumar", role: "Managing Director", bio: "With over 25 years in financial services, Ravi leads Panasuna with a vision of accessible wealth." },
               { name: "Mrs. Shanthi Reddy", role: "Operations Head", bio: "Ensures that every disbursement is on time and every group is managed with precision." },
               { name: "Mr. Arjun Rao", role: "Finance Director", bio: "Our regulatory expert who ensures we always stay within the highest standards of compliance." }
             ].map((member, i) => (
                <div key={i} className="group">
                   <div className="aspect-[4/5] bg-gray-200 rounded-3xl mb-6 overflow-hidden relative">
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform">
                         <p className="text-sm italic">"{member.bio}"</p>
                      </div>
                      {/* Placeholder for photo */}
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                         <Users size={64} />
                      </div>
                   </div>
                   <h4 className="text-xl font-bold text-[#1f2a1d]">{member.name}</h4>
                   <p className="text-[#336443] font-medium text-sm">{member.role}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-display text-[#1f2a1d] mb-2">Real People. Real Stories.</h2>
            <p className="text-[#4b5b47]">Hear directly from our community members.</p>
          </div>
          
          <div className="flex flex-wrap gap-8">
             {[
               { name: "Venkatesh", city: "Hyderabad", story: "I saved for my daughter's wedding without taking a single loan. Panasuna made it possible with small monthly bits." },
               { name: "Priya Lakshmi", city: "Vizag", story: "The bidding process is so fair. I used my funds to start my own boutique. Extremely grateful!" },
               { name: "Mohammad Ali", city: "Warangal", story: "Total transparency. I've been with Panasuna for 3 groups now and I wouldn't go anywhere else." }
             ].map((t, i) => (
               <div key={i} className="flex-1 min-w-[300px] p-8 bg-[#f7faf7] rounded-[32px] border border-gray-100">
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-[#1f2a1d] text-lg mb-8 leading-relaxed">"{t.story}"</p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#336443]/10 text-[#336443] flex items-center justify-center font-bold">
                        {t.name[0]}
                     </div>
                     <div>
                        <p className="font-bold text-[#1f2a1d]">{t.name}</p>
                        <p className="text-xs text-[#4b5b47]">{t.city}</p>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE CAROUSEL (HOW OUR MEMBERS FEEL) */}
      <ExperienceCarousel />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-[#1f2a1d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
               <h2 className="text-4xl font-display mb-6">We Are Here to <br/><span className="text-[#85AB8B]">Help You.</span></h2>
               <p className="text-white/60 text-lg mb-12">Have a question? Want to join a chit group? Reach out — our team responds quickly and warmly.</p>
               
               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#85AB8B]"><MapPin /></div>
                    <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-white/40">Visit Us</p>
                       <p className="font-medium">123, Financial District, Jubilee Hills, Hyderabad</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#85AB8B]"><Phone /></div>
                    <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-white/40">Call Us</p>
                       <p className="font-medium">+91 99887 76655 (9 AM - 6 PM)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#85AB8B]"><Mail /></div>
                    <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-white/40">Email Us</p>
                       <p className="font-medium">hello@panasunachits.com</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 sm:p-12 text-[#1f2a1d]">
               <h3 className="text-2xl font-bold mb-8">Send My Query</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#4b5b47]">Full Name</label>
                        <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#336443] transition-all" placeholder="Ramesh Kumar" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#4b5b47]">Mobile Number</label>
                        <input type="tel" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#336443] transition-all" placeholder="+91 00000 00000" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-[#4b5b47]">Email Address</label>
                     <input type="email" className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#336443] transition-all" placeholder="ramesh@example.com" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-[#4b5b47]">How can we help?</label>
                     <textarea className="w-full bg-gray-50 border-none rounded-xl p-4 h-32 focus:ring-2 focus:ring-[#336443] transition-all" placeholder="I'm interested in the Family Plan..."></textarea>
                  </div>
                  <button className="w-full bg-[#1f2a1d] text-white font-bold py-5 rounded-2xl hover:bg-[#336443] transition-colors shadow-lg active:scale-[0.98]">
                    Start My Journey Today
                  </button>
               </form>
               <p className="text-center text-xs text-[#4b5b47] mt-6">We typically respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-[#1f2a1d] text-white/40 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <span className="text-lg font-display font-bold tracking-tight text-white/90">
                Panasuna<span className="text-[#85AB8B]">Chits</span>
              </span>
           </div>
           <p>© 2026 Panasuna Chits (P) Ltd. All Rights Reserved. Regd. under Chit Funds Act.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

