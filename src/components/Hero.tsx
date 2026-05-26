import { ChevronRight, MapPin, Linkedin, Shield } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';
import Reveal from './Reveal';
import Stagger from './Stagger';

interface HeroProps {
  isDark: boolean;
  onNavigate: (section: string) => void;
}

export function Hero({ isDark, onNavigate }: HeroProps) {
  const { personal, stats } = portfolioConfig;

  return (
    <section className={`pt-32 pb-20 min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900' : 'bg-gradient-to-br from-slate-100 via-slate-100 to-slate-200'} ${isDark ? 'text-white' : 'text-slate-900'} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="shrink-0">
              <div className={`w-32 h-32 rounded-2xl ${isDark ? 'bg-gradient-to-br from-emerald-400 to-teal-600' : 'bg-gradient-to-br from-emerald-300 to-teal-400'} flex items-center justify-center shadow-2xl ring-4 ${isDark ? 'ring-white/20' : 'ring-white/40'}`}>
                <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{personal.initials}</span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <Stagger>
                <div className={`inline-flex items-center gap-2 ${isDark ? 'bg-amber-400/20 border-amber-300/30 text-amber-300' : 'bg-amber-100 border-amber-200 text-amber-700'} border text-xs font-semibold px-3 py-1.5 rounded-full mb-4`}>
                  <Shield size={12} /> Available for Architecture Engagements
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">{personal.fullName}</h1>
                <p className="text-lg text-amber-300 font-semibold mb-2">Solution Architect — Cloud, M365, AI</p>
                <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'} text-base max-w-2xl leading-relaxed`}>
                  I design scalable, secure cloud platforms and AI-enabled solutions that reduce costs and accelerate delivery. Available for advisory and architecture engagements.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-6">
                  <button
                    onClick={() => onNavigate('projects')}
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    View Projects <ChevronRight size={16} />
                  </button>

                  {/* <a
                    href={portfolioConfig.personal.resumeUrl}
                    download
                    className={`inline-flex items-center gap-2 ${isDark ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white' : 'bg-slate-900/10 hover:bg-slate-900/20 border-slate-900/20 text-slate-900'} border text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors`}
                  >
                    <Download size={14} /> Resume
                  </a> */}
                </div>
              </Stagger>

              <div className={`flex flex-wrap justify-center md:justify-start gap-4 mt-6 ${isDark ? 'text-slate-400' : 'text-slate-500'} text-sm`}>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {personal.location}
                </span>
                {/* <span className="flex items-center gap-1.5">
                  <Mail size={13} /> {personal.email}
                </span> */}
                <a href={personal.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                  <Linkedin size={13} /> {personal.linkedIn}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, isDark }: { value: string; label: string; isDark: boolean }) {
  return (
    <div className={`${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-900/5 border-slate-900/10 hover:bg-slate-900/10'} border rounded-xl p-5 text-center transition-colors`}>
      <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</div>
      <div className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-xs mt-1`}>{label}</div>
    </div>
  );
}
