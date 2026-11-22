import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { SocialIcon } from './SocialIcon';

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] py-10 dark:border-[#1E293B]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <p className="mt-1 font-mono text-xs text-[#475569] dark:text-[#94A3B8]">
            Built with React, TypeScript &amp; Tailwind CSS · Ready for GitHub Pages &amp; FastAPI
          </p>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] transition-colors hover:border-[#0F766E]/40 hover:text-[#0F172A] dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#94A3B8] dark:hover:border-[#2DD4BF]/40 dark:hover:text-[#F1F5F9]"
            >
              <SocialIcon id={social.id} className="h-3.5 w-3.5" />
              <span>{social.label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
