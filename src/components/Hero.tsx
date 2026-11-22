import { ArrowUpRight, ChevronRight, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { SocialIcon } from './SocialIcon';

function TopographicBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 520"
      fill="none"
      className="pointer-events-none absolute -top-8 right-0 h-[440px] w-full max-w-4xl opacity-[0.07] dark:opacity-[0.09] text-[#0F766E] dark:text-[#2DD4BF]"
    >
      <path
        d="M180 460C310 380 390 250 540 230C690 210 760 90 940 70C1060 56 1140 120 1210 150"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M230 480C355 405 420 290 560 270C705 248 790 130 960 112C1075 100 1150 160 1215 190"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M285 500C405 430 455 328 585 310C725 290 820 175 980 156C1090 144 1160 202 1220 232"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M350 515C460 455 500 368 620 350C750 330 855 222 1005 206C1105 196 1170 245 1225 274"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M440 525C530 475 560 408 665 392C785 372 890 275 1030 260C1120 250 1175 290 1230 315"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M620 120C685 88 760 88 810 128C860 168 835 232 765 256C695 280 580 264 560 212C540 160 568 146 620 120Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-16 pb-14 sm:pt-24 sm:pb-20">
      <TopographicBackdrop />

      <div className="relative z-10 animate-rise">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/90 px-3.5 py-1.5 text-xs font-medium text-[#475569] shadow-xs dark:border-[#1E293B] dark:bg-[#111922]/90 dark:text-[#94A3B8]">
              <MapPin className="h-3.5 w-3.5 text-[#0F766E] dark:text-[#2DD4BF]" />
              <span>{profile.location}</span>
              <span className="text-[#CBD5E1] dark:text-[#334155]">·</span>
              <span className="font-mono text-[11px] text-[#0F766E] dark:text-[#2DD4BF]">
                {profile.role}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl dark:text-[#F1F5F9]">
              {profile.name}
            </h1>

            <p className="mt-4 max-w-3xl text-xl font-medium leading-snug text-[#1E293B] sm:text-2xl dark:text-[#E2E8F0]">
              {profile.headline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569] dark:text-[#94A3B8]">
              {profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-[#FAFBF9] shadow-sm transition-all hover:bg-[#0D9488] dark:bg-[#14B8A6] dark:text-[#0B1117] dark:hover:bg-[#2DD4BF]"
              >
                View Experience
                <ChevronRight className="h-4 w-4" />
              </a>

              <a
                href="#labs"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#0F766E]/40 hover:text-[#0F766E] dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#F1F5F9] dark:hover:border-[#2DD4BF]/40 dark:hover:text-[#2DD4BF]"
              >
                Explore Labs
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                {profile.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white/80 px-3.5 py-2.5 text-sm font-medium text-[#475569] transition-colors hover:border-[#0F766E]/40 hover:text-[#0F172A] dark:border-[#1E293B] dark:bg-[#111922]/80 dark:text-[#94A3B8] dark:hover:border-[#2DD4BF]/40 dark:hover:text-[#F1F5F9]"
                  >
                    <SocialIcon id={social.id} className="h-4 w-4" />
                    <span>{social.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative shrink-0 self-start md:self-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#0F766E]/20 via-[#14B8A6]/10 to-[#D97706]/15 blur-xl dark:from-[#2DD4BF]/20 dark:via-[#14B8A6]/10 dark:to-[#F59E0B]/15"
            />
            <div className="relative rounded-3xl border border-[#E2E8F0] bg-white p-1.5 shadow-lg shadow-[#0F766E]/10 dark:border-[#1E293B] dark:bg-[#111922] dark:shadow-black/40">
              <img
                src={profile.avatar}
                alt={profile.avatarAlt}
                loading="eager"
                decoding="async"
                className="h-40 w-40 rounded-2xl object-cover object-top sm:h-48 sm:w-48 md:h-56 md:w-56"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {profile.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xs transition-colors hover:border-[#0F766E]/35 dark:border-[#1E293B] dark:bg-[#111922] dark:hover:border-[#2DD4BF]/35"
            >
              <div className="font-mono text-2xl font-semibold tracking-tight text-[#0F766E] sm:text-3xl dark:text-[#2DD4BF]">
                {metric.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-[#F1F5F9]">
                {metric.label}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
