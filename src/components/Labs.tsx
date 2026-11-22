import { FlaskConical, Server } from 'lucide-react';
import { profile, type LabProject } from '../data/profile';
import { isBackendConfigured } from '../lib/api';
import { SectionHeader } from './SectionHeader';

const STATUS_STYLE: Record<LabProject['status'], string> = {
  Planned:
    'border-[#D97706]/30 bg-[#D97706]/10 text-[#B45309] dark:border-[#F59E0B]/30 dark:bg-[#F59E0B]/10 dark:text-[#F59E0B]',
  Concept:
    'border-[#E2E8F0] bg-[#FAFBF9] text-[#475569] dark:border-[#1E293B] dark:bg-[#0B1117] dark:text-[#94A3B8]',
  'Ready for FastAPI':
    'border-[#0F766E]/30 bg-[#0F766E]/10 text-[#0F766E] dark:border-[#2DD4BF]/30 dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]',
};

export function Labs() {
  return (
    <section
      id="labs"
      className="border-t border-[#E2E8F0] py-16 sm:py-20 dark:border-[#1E293B]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          index="02"
          eyebrow="Labs & Side Projects"
          title="FastAPI & Claude Agent Workshop"
          subtitle="A growing playground for interactive AI agents, LLM utilities, and endurance tools — designed to run static on GitHub Pages today and plug into FastAPI on a home server or AWS."
        />

        <div className="mb-8 inline-flex items-center gap-2 self-start rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-xs text-[#475569] sm:mb-10 dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#94A3B8]">
          <Server className="h-3.5 w-3.5 text-[#0F766E] dark:text-[#2DD4BF]" />
          <span>{isBackendConfigured ? 'FastAPI Connected' : 'Static Pages Preview'}</span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {profile.labs.map((lab) => (
          <article
            key={lab.id}
            className="group flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-[#0F766E]/40 dark:border-[#1E293B] dark:bg-[#111922] dark:hover:border-[#2DD4BF]/40"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]">
                  <FlaskConical className="h-4 w-4" />
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${STATUS_STYLE[lab.status]}`}
                >
                  {lab.status}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                {lab.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                {lab.summary}
              </p>
            </div>

            <div className="mt-6 border-t border-[#E2E8F0] pt-4 dark:border-[#1E293B]">
              <div className="mb-3 font-mono text-[11px] text-[#475569] dark:text-[#94A3B8]">
                endpoint: <span className="text-[#0F766E] dark:text-[#2DD4BF]">{lab.targetEndpoint}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {lab.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#E2E8F0] bg-[#FAFBF9] px-2 py-0.5 font-mono text-[11px] text-[#334155] dark:border-[#1E293B] dark:bg-[#0B1117] dark:text-[#CBD5E1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
