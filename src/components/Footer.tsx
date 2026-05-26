import { portfolioConfig } from '../config/portfolio';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const { personal } = portfolioConfig;

  return (
    <footer className={`border-t ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-200'} mt-8 py-8 text-center ${isDark ? 'text-slate-500' : 'text-slate-600'} text-sm`}>
      <p>© 2026 {personal.fullName} · {personal.title}</p>
      <p className={`mt-1 text-xs ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>Azure · Microsoft 365 · Node.js · AI/ML</p>
    </footer>
  );
}
