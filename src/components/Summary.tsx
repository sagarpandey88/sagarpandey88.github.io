import { Users } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import Reveal from './Reveal';
import Stagger from './Stagger';
import { portfolioConfig } from '../config/portfolio';

interface SummaryProps {
  isDark: boolean;
}

export function Summary({ isDark }: SummaryProps) {
  const { personal } = portfolioConfig;

  return (
    <section id="summary">
      <Reveal>
        <SectionHeader icon={<Users size={20} />} title="Professional Summary" isDark={isDark} />
        <div className={`${isDark ? 'bg-slate-900' : 'bg-slate-200'} rounded-2xl border ${isDark ? 'border-slate-800' : 'border-slate-200'} p-8 shadow-sm`}>
          <Stagger>
            {personal.summary.map((para, i) => (
              <p key={i} className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-lg leading-relaxed ${i < personal.summary.length - 1 ? 'mb-6' : ''}`}>
                {para}
              </p>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </section>
  );
}
