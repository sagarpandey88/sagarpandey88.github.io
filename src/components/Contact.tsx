import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import Reveal from './Reveal';

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {

  return (
    <section id="contact">
      <Reveal>
        <SectionHeader icon={<Mail size={20} />} title="Contact" isDark={isDark} />
        <div className={`${isDark ? 'bg-gradient-to-br from-slate-900 to-sky-900' : 'bg-gradient-to-br from-slate-100 to-sky-100'} rounded-2xl p-10 ${isDark ? 'text-white' : 'text-slate-900'} text-center shadow-xl`}>
          <h3 className="text-2xl font-bold mb-3">Let's Build Something Exceptional</h3>
          <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'} max-w-xl mx-auto mb-8 leading-relaxed`}>
            Available for senior architecture engagements, technical advisory, and enterprise transformation projects. Let's connect and discuss how I can help your organization modernize and scale.
          </p>
          {/* <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <ContactCard icon={<Mail size={18} />} label="Email" value={personal.email} isDark={isDark} />
            <ContactCard icon={<Phone size={18} />} label="Phone" value={personal.phone} isDark={isDark} />
            <ContactCard icon={<MapPin size={18} />} label="Location" value={personal.location} isDark={isDark} />
          </div> */}
          <div className="flex justify-center gap-4">
            <SocialLink icon={<Linkedin size={18} />} label="LinkedIn" isDark={isDark} />
            <SocialLink icon={<Github size={18} />} label="GitHub" isDark={isDark} />
            <SocialLink icon={<ExternalLink size={18} />} label="Blog" isDark={isDark} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ContactCard removed (unused) — kept SocialLink for visible actions

function SocialLink({ icon, label, isDark }: { icon: React.ReactNode; label: string; isDark: boolean }) {
  return (
    <button className={`flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors ${isDark ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white' : 'bg-slate-900/10 hover:bg-slate-900/20 border border-slate-900/20 text-slate-900'}`}>
      {icon} {label}
    </button>
  );
}
