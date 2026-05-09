import { Database, Brain, Layers, Server, Cpu, Github, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { portfolioConfig } from '../config/portfolio';
import Reveal from './Reveal';
import Stagger from './Stagger';

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const { projects } = portfolioConfig;

  const iconMap: Record<string, React.ComponentType<any>> = {
    Brain,
    Layers,
    Server,
    Cpu,
  };

  return (
    <section id="projects">
      <Reveal>
        <SectionHeader icon={<Database size={20} />} title="Featured Projects" isDark={isDark} />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
          const IconComponent = iconMap[p.icon as keyof typeof iconMap];
          return (
            <div key={i} className={`${isDark ? 'bg-slate-900' : 'bg-slate-200'} rounded-2xl border ${isDark ? 'border-slate-800' : 'border-slate-200'} p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col`}>
              <Stagger>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-100'} flex items-center justify-center border`}>
                    <IconComponent size={20} className="text-emerald-400" />
                  </div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{p.title}</h3>
                </div>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm leading-relaxed mb-5`}>{p.description}</p>
                <div className="mb-5 flex-1">
                  <p className={`text-xs font-semibold ${isDark ? 'text-slate-500' : 'text-slate-500'} uppercase tracking-wide mb-2`}>
                    Key Outcomes
                  </p>
                  <Stagger>
                    {p.impact.map((item, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </Stagger>
                </div>
                <div className={`flex flex-wrap gap-2 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <Stagger>
                    {p.stack.map((s) => (
                      <span key={s} className={`text-xs font-medium px-2.5 py-1 rounded-full ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                        {s}
                      </span>
                    ))}
                  </Stagger>
                </div>
                <div className="pt-4 flex gap-3">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border ${isDark ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-white text-slate-700 border-slate-200'}`}
                    >
                      <Github size={16} />
                      Repo
                    </a>
                  )}
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border ${isDark ? 'bg-emerald-600 text-slate-900 border-emerald-600' : 'bg-emerald-50 text-emerald-700 border-emerald-50'}`}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </Stagger>
            </div>
          );
          })}
        </div>
      </Reveal>
    </section>
  );
}
