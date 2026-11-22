import { useState } from 'react';
import {
  ChevronDown,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import {
  profile,
  type ExperiencePillar,
  type ExperienceRole,
  type PillarCategoryId,
} from '../data/profile';
import { SectionHeader } from './SectionHeader';

const PILLAR_ICONS: Record<PillarCategoryId, typeof Cpu> = {
  'ai-infra': Cpu,
  experimentation: FlaskConical,
  'ml-pipelines': Database,
  scale: ShieldCheck,
  'on-device': Layers,
};

interface PillarCardProps {
  pillar: ExperiencePillar;
  isOpen: boolean;
  onToggle: () => void;
}

function PillarCard({ pillar, isOpen, onToggle }: PillarCardProps) {
  const Icon = PILLAR_ICONS[pillar.id];
  const highlights = pillar.bullets
    .map((bullet) => bullet.highlight)
    .filter((item): item is string => Boolean(item));

  return (
    <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#FAFBF9]/70 transition-colors hover:border-[#0F766E]/35 dark:border-[#1E293B] dark:bg-[#0B1117]/60 dark:hover:border-[#2DD4BF]/35">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-[#FAFBF9] sm:px-5 sm:py-4 dark:hover:bg-[#0B1117]"
      >
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]">
            <Icon className="h-4 w-4" />
          </span>
          <h4 className="text-sm font-semibold text-[#0F172A] sm:text-base dark:text-[#F1F5F9]">
            {pillar.title}
          </h4>

          {!isOpen && highlights.length > 0 ? (
            <div className="hidden flex-wrap items-center gap-1.5 lg:flex">
              {highlights.map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 font-mono text-[11px] text-[#475569] dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#94A3B8]"
                >
                  {label}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[#475569] transition-transform duration-200 dark:text-[#94A3B8] ${
            isOpen ? 'rotate-180 text-[#0F766E] dark:text-[#2DD4BF]' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        <ul className="space-y-3 border-t border-[#E2E8F0] px-4 py-4 sm:px-5 dark:border-[#1E293B]">
          {pillar.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F766E] dark:bg-[#2DD4BF]"
                aria-hidden="true"
              />
              <span>
                {bullet.highlight ? (
                  <span className="mr-1.5 inline-block rounded-md bg-[#0F766E]/10 px-1.5 py-0.5 font-mono text-xs font-medium text-[#0F766E] dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]">
                    {bullet.highlight}
                  </span>
                ) : null}
                {bullet.text}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function RoleCard({ role, isCurrent }: { role: ExperienceRole; isCurrent: boolean }) {
  const [selectedPillar, setSelectedPillar] = useState<'all' | PillarCategoryId>('all');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const visiblePillars =
    selectedPillar === 'all'
      ? role.pillars
      : role.pillars.filter((pillar) => pillar.id === selectedPillar);

  const allVisibleOpen =
    visiblePillars.length > 0 && visiblePillars.every((pillar) => Boolean(openIds[pillar.id]));

  const togglePillar = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAllVisible = () => {
    const targetOpen = !allVisibleOpen;
    setOpenIds((prev) => {
      const next = { ...prev };
      for (const pillar of visiblePillars) {
        next[pillar.id] = targetOpen;
      }
      return next;
    });
  };

  return (
    <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs sm:p-8 dark:border-[#1E293B] dark:bg-[#111922]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
              {role.company}
            </h3>
            <span className="rounded-full border border-[#E2E8F0] bg-[#FAFBF9] px-2.5 py-0.5 font-mono text-xs font-medium text-[#475569] dark:border-[#1E293B] dark:bg-[#0B1117] dark:text-[#94A3B8]">
              {role.location}
            </span>
            {isCurrent ? (
              <span className="rounded-full border border-[#0F766E]/30 bg-[#0F766E]/10 px-2.5 py-0.5 font-mono text-xs font-medium text-[#0F766E] dark:border-[#2DD4BF]/30 dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]">
                Current
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-base font-medium text-[#334155] dark:text-[#CBD5E1]">
            {role.title}
          </p>
        </div>

        <span className="font-mono text-xs font-medium text-[#475569] sm:text-sm dark:text-[#94A3B8]">
          {role.period}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]">
        {role.summary}
      </p>

      {role.pillars.length > 0 ? (
        <>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
            {role.pillars.length > 1 ? (
              <div
                className="flex flex-wrap gap-2"
                role="tablist"
                aria-label={`Filter ${role.company} tracks`}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedPillar === 'all'}
                  onClick={() => setSelectedPillar('all')}
                  className={`rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                    selectedPillar === 'all'
                      ? 'bg-[#0F766E] text-[#FAFBF9] dark:bg-[#14B8A6] dark:text-[#0B1117]'
                      : 'border border-[#E2E8F0] bg-[#FAFBF9] text-[#475569] hover:border-[#0F766E]/40 hover:text-[#0F172A] dark:border-[#1E293B] dark:bg-[#0B1117] dark:text-[#94A3B8] dark:hover:border-[#2DD4BF]/40 dark:hover:text-[#F1F5F9]'
                  }`}
                >
                  All ({role.pillars.length})
                </button>

                {role.pillars.map((pillar) => {
                  const active = selectedPillar === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedPillar(pillar.id)}
                      className={`rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                        active
                          ? 'bg-[#0F766E] text-[#FAFBF9] dark:bg-[#14B8A6] dark:text-[#0B1117]'
                          : 'border border-[#E2E8F0] bg-[#FAFBF9] text-[#475569] hover:border-[#0F766E]/40 hover:text-[#0F172A] dark:border-[#1E293B] dark:bg-[#0B1117] dark:text-[#94A3B8] dark:hover:border-[#2DD4BF]/40 dark:hover:text-[#F1F5F9]'
                      }`}
                    >
                      {pillar.shortLabel}
                    </button>
                  );
                })}
              </div>
            ) : (
              <span className="font-mono text-xs text-[#475569] dark:text-[#94A3B8]">
                Focus area
              </span>
            )}

            <button
              type="button"
              onClick={toggleAllVisible}
              className="rounded-lg border border-[#E2E8F0] bg-[#FAFBF9] px-3 py-1.5 font-mono text-xs font-medium text-[#475569] transition-colors hover:border-[#0F766E]/40 hover:text-[#0F766E] dark:border-[#1E293B] dark:bg-[#0B1117] dark:text-[#94A3B8] dark:hover:border-[#2DD4BF]/40 dark:hover:text-[#2DD4BF]"
            >
              {allVisibleOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {visiblePillars.map((pillar) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                isOpen={Boolean(openIds[pillar.id])}
                onToggle={() => togglePillar(pillar.id)}
              />
            ))}
          </div>
        </>
      ) : null}
    </article>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[#E2E8F0] py-16 sm:py-20 dark:border-[#1E293B]"
    >
      <SectionHeader
        index="01"
        eyebrow="Experience"
        title="Engineering at Production Scale"
        subtitle="Eight years shipping LLM orchestration, agentic optimization systems, large-scale data pipelines, and edge AI models."
      />

      <div className="space-y-6">
        {profile.experience.map((role, index) => (
          <RoleCard key={role.id} role={role} isCurrent={index === 0} />
        ))}

        {/* Compact Technical Toolkit & Education */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs sm:p-8 dark:border-[#1E293B] dark:bg-[#111922]">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9]">
              Technical Toolkit &amp; Education
            </h3>
            <span className="font-mono text-xs text-[#475569] dark:text-[#94A3B8]">
              Core stack &amp; academic background
            </span>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {profile.skills.map((group) => (
              <div
                key={group.id}
                className="rounded-xl border border-[#E2E8F0] bg-[#FAFBF9]/70 p-4 dark:border-[#1E293B] dark:bg-[#0B1117]/60"
              >
                <div className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                  {group.title}
                </div>
                <p className="mt-0.5 text-xs text-[#475569] dark:text-[#94A3B8]">
                  {group.subtitle}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 font-mono text-[11px] text-[#0F172A] dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#E2E8F0]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 border-t border-[#E2E8F0] pt-5 md:grid-cols-2 dark:border-[#1E293B]">
            {profile.education.map((edu) => (
              <div key={edu.school} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                    {edu.school}
                  </h4>
                  <p className="mt-0.5 text-xs font-medium text-[#334155] dark:text-[#CBD5E1]">
                    {edu.degree}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#475569] dark:text-[#94A3B8]">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
