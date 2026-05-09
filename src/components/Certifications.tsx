import { Award, Layers, Shield } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { portfolioConfig } from '../config/portfolio';
import Reveal from './Reveal';
import Stagger from './Stagger';

interface CertificationsProps {
  isDark: boolean;
}

export function Certifications({ isDark }: CertificationsProps) {
  const { certifications, education, continuousLearning } = portfolioConfig;

  return (
    <section id="certifications">
      <Reveal>
        <SectionHeader icon={<Award size={20} />} title="Certifications & Education" isDark={isDark} />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications card */}
          <div className={`${isDark ? 'bg-slate-900' : 'bg-slate-200'} rounded-2xl border ${isDark ? 'border-slate-800' : 'border-slate-200'} p-7 shadow-sm`}>
            <Stagger>
              <h3 className={`font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'} mb-5 flex items-center gap-2`}>
                <Award size={16} className="text-emerald-400" /> Professional Certifications
              </h3>

              <ul className="space-y-4">
                <Stagger>
                  {certifications.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-100'} flex items-center justify-center shrink-0 mt-0.5 border`}>
                        <Shield size={14} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{c.name}</p>
                        <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mt-0.5`}>
                          {c.issuer} · {c.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </Stagger>
              </ul>
            </Stagger>
          </div>

          {/* Education card */}
          <div className={`${isDark ? 'bg-slate-900' : 'bg-slate-200'} rounded-2xl border ${isDark ? 'border-slate-800' : 'border-slate-200'} p-7 shadow-sm`}>
            <Stagger>
              <h3 className={`font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'} mb-5 flex items-center gap-2`}>
                <Layers size={16} className="text-emerald-400" /> Education
              </h3>

              <div className="space-y-6">
                <Stagger>
                  {education.map((e, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-100'} flex items-center justify-center shrink-0 mt-0.5 border`}>
                        <Award size={14} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{e.degree}</p>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{e.school}</p>
                        <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mt-0.5`}>{e.details}</p>
                      </div>
                    </div>
                  ))}
                </Stagger>

                <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <p className={`text-xs font-semibold ${isDark ? 'text-slate-500' : 'text-slate-500'} uppercase tracking-wide mb-3`}>
                    Continuous Learning
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Stagger>
                      {continuousLearning.map((item) => (
                        <span key={item} className={`text-xs font-medium px-2.5 py-1 rounded-full ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                          {item}
                        </span>
                      ))}
                    </Stagger>
                  </div>
                </div>
              </div>
            </Stagger>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
