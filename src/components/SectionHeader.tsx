interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  isDark: boolean;
}

export function SectionHeader({ icon, title, isDark }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className={`w-9 h-9 rounded-xl ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-100'} flex items-center justify-center text-amber-400 border`}>
        {icon}
      </div>
      <h2 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{title}</h2>
      <div className={`flex-1 h-px ${isDark ? 'bg-slate-800' : 'bg-slate-200'} ml-2`} />
    </div>
  );
}
