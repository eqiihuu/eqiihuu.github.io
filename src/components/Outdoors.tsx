import { Bike, Compass, Mountain, Snowflake, Tent, Waves } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';

const ACTIVITY_ICONS: Record<string, typeof Mountain> = {
  snowboarding: Snowflake,
  hiking: Mountain,
  paddleboarding: Waves,
  camping: Tent,
};

function ElevationChart() {
  return (
    <div className="mt-5 rounded-xl border border-[#E2E8F0] bg-[#FAFBF9] p-4 dark:border-[#1E293B] dark:bg-[#0B1117]">
      <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-[#475569] dark:text-[#94A3B8]">
        <span>PNW ENDURANCE PROFILE</span>
        <span className="text-[#0F766E] dark:text-[#2DD4BF]">SEA → PDX / WHISTLER</span>
      </div>

      <svg
        viewBox="0 0 640 130"
        className="h-28 w-full"
        role="img"
        aria-label="Stylized Pacific Northwest cycling elevation profile"
      >
        <defs>
          <linearGradient id="elevationFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F766E" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <line
          x1="0"
          y1="35"
          x2="640"
          y2="35"
          stroke="currentColor"
          strokeDasharray="3 4"
          className="text-[#CBD5E1] dark:text-[#1E293B]"
        />
        <line
          x1="0"
          y1="75"
          x2="640"
          y2="75"
          stroke="currentColor"
          strokeDasharray="3 4"
          className="text-[#CBD5E1] dark:text-[#1E293B]"
        />
        <line
          x1="0"
          y1="112"
          x2="640"
          y2="112"
          stroke="currentColor"
          className="text-[#CBD5E1] dark:text-[#1E293B]"
        />

        <path
          d="M0 108 L45 102 L90 92 L135 98 L185 72 L235 84 L290 52 L345 64 L415 36 L475 56 L530 24 L590 42 L640 28 L640 112 L0 112 Z"
          fill="url(#elevationFill)"
        />
        <path
          d="M0 108 L45 102 L90 92 L135 98 L185 72 L235 84 L290 52 L345 64 L415 36 L475 56 L530 24 L590 42 L640 28"
          fill="none"
          stroke="#0F766E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-[#2DD4BF]"
        />

        <circle cx="290" cy="52" r="3.5" className="fill-[#0F766E] dark:fill-[#2DD4BF]" />
        <circle cx="415" cy="36" r="3.5" className="fill-[#0F766E] dark:fill-[#2DD4BF]" />
        <circle cx="530" cy="24" r="4" className="fill-[#D97706] dark:fill-[#F59E0B]" />
      </svg>
    </div>
  );
}

export function Outdoors() {
  const { cyclingStats, cyclingNarrative, rvTitle, rvNarrative, activities } = profile.outdoors;

  return (
    <section
      id="outdoors"
      className="border-t border-[#E2E8F0] py-16 sm:py-20 dark:border-[#1E293B]"
    >
      <SectionHeader
        index="03"
        eyebrow="Beyond Code"
        title="Pacific Northwest Outdoors & Endurance"
        subtitle="When I step away from distributed systems, you'll find me stacking road miles, chasing mountain passes, or turning the RV into a trailhead basecamp."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Featured Road Cycling Card */}
        <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs lg:col-span-2 sm:p-7 dark:border-[#1E293B] dark:bg-[#111922]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]">
                <Bike className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                  Road Cycling &amp; Endurance
                </h3>
                <p className="text-xs text-[#475569] dark:text-[#94A3B8]">
                  Puget Sound · Cascades · Sea-to-Sky Highway
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[#D97706]/30 bg-[#D97706]/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#B45309] dark:border-[#F59E0B]/30 dark:bg-[#F59E0B]/10 dark:text-[#F59E0B]">
              4k–5k mi / yr
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]">
            {cyclingNarrative}
          </p>

          <ElevationChart />

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {cyclingStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#E2E8F0] bg-[#FAFBF9] p-3.5 dark:border-[#1E293B] dark:bg-[#0B1117]"
              >
                <div className="font-mono text-xl font-bold text-[#0F766E] dark:text-[#2DD4BF]">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                  {stat.label}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-[#475569] dark:text-[#94A3B8]">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* RV Basecamp Card */}
        <article className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs sm:p-7 dark:border-[#1E293B] dark:bg-[#111922]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D97706]/10 text-[#B45309] dark:bg-[#F59E0B]/10 dark:text-[#F59E0B]">
                <Compass className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                  {rvTitle}
                </h3>
                <p className="text-xs text-[#475569] dark:text-[#94A3B8]">
                  Mobile trailhead &amp; ride support
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]">
              {rvNarrative}
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-[#CBD5E1] bg-[#FAFBF9] p-4 dark:border-[#334155] dark:bg-[#0B1117]">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#B45309] dark:text-[#F59E0B]">
              4-Season Setup
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#475569] dark:text-[#94A3B8]">
              Road bikes racked in back, snowboards stowed below, paddleboards ready for sunny
              Cascade lakes.
            </p>
          </div>
        </article>
      </div>

      {/* 4-Season Outdoors Strip */}
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {activities.map((activity) => {
          const Icon = ACTIVITY_ICONS[activity.id] ?? Mountain;
          return (
            <div
              key={activity.id}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xs transition-colors hover:border-[#0F766E]/35 dark:border-[#1E293B] dark:bg-[#111922] dark:hover:border-[#2DD4BF]/35"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/10 dark:text-[#2DD4BF]">
                <Icon className="h-4 w-4" />
              </span>
              <h4 className="mt-3 text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                {activity.title}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                {activity.caption}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
