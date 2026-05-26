import { Moon, Sun } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ isDark, setIsDark, activeSection, onNavigate }: HeaderProps) {
  const navBgClass = isDark ? 'bg-slate-900/90' : 'bg-slate-200/90';
  const navTextClass = isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${navBgClass} backdrop-blur border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className={`font-bold ${isDark ? 'text-slate-50' : 'text-slate-900'} tracking-tight text-lg`}>
          {portfolioConfig.personal.fullName.split(' ')[0]} <span className="text-amber-400">{portfolioConfig.personal.fullName.split(' ')[1]}</span>
        </span>
        <nav className="hidden md:flex items-center gap-1">
          {portfolioConfig.navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavigate(l.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === l.id ? 'bg-amber-400 text-slate-900' : navTextClass
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2`}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 text-amber-400' : 'bg-slate-100 text-slate-600'} hover:opacity-80 transition-opacity`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {/* Hire Me button removed per request */}
        </div>
      </div>
    </header>
  );
}
