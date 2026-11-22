interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ index, eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-[#0F766E] dark:text-[#2DD4BF]">
        <span>{index}</span>
        <span className="h-px w-6 bg-[#0F766E]/40 dark:bg-[#2DD4BF]/40" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-2.5 text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2.5 max-w-2xl text-sm sm:text-base leading-relaxed text-[#475569] dark:text-[#94A3B8]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
