import { Code2, Cloud, Brain, Layers } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { portfolioConfig } from '../config/portfolio';
import Reveal from './Reveal';
import Stagger from './Stagger';

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const { skills } = portfolioConfig;
  const skillCards = [
    { icon: <Cloud size={18} className="text-emerald-400" />, title: 'Cloud Platforms', skills: skills.cloud, accent: 'sky' },
    { icon: <Code2 size={18} className="text-green-600" />, title: 'Development', skills: skills.development, accent: 'green' },
    { icon: <Brain size={18} className="text-amber-600" />, title: 'AI / ML', skills: skills.aiml, accent: 'amber' },
    { icon: <Layers size={18} className="text-slate-400" />, title: 'Microsoft Technologies', skills: skills.microsoft, accent: 'blue' },
  ];

  return (
    <section id="skills">
      <Reveal>
        <SectionHeader icon={<Code2 size={20} />} title="Core Technical Skills" isDark={isDark} />
        <div className="grid md:grid-cols-2 gap-6">
          {skillCards.map((card) => (
            <SkillCard key={card.title} {...card} isDark={isDark} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function SkillCard({
  icon,
  title,
  skills,
  accent,
  isDark,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  accent: string;
  isDark: boolean;
}) {
  const accentMap: Record<string, string> = {
    sky: 'bg-emerald-500',
    green: 'bg-green-600',
    amber: 'bg-amber-400',
    blue: 'bg-slate-600',
  };

  return (
    <div className={`${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-200 border-slate-200'} rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow`}>
      <Stagger>
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h3 className={`font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${isDark ? 'text-slate-300 bg-slate-800 border-slate-700 hover:border-slate-600' : 'text-slate-700 bg-slate-200 border-slate-200 hover:border-slate-400'} border transition-colors`}
            >
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${accentMap[accent]} mr-1.5 align-middle`} />
              {s}
            </span>
          ))}
        </div>
      </Stagger>
    </div>
  );
}
