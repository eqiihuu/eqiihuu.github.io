import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/profile';
import type { Theme } from '../hooks/useTheme';
import { SocialIcon } from './SocialIcon';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Labs', href: '#labs' },
  { label: 'Outdoors', href: '#outdoors' },
];

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E8F0]/80 bg-[#FAFBF9]/80 backdrop-blur-md dark:border-[#1E293B]/80 dark:bg-[#0B1117]/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#about"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Qi Hu home"
        >
          <img
            src={profile.avatar}
            alt=""
            className="h-8 w-8 rounded-full object-cover object-top ring-1 ring-[#0F766E]/30 transition-transform group-hover:scale-105 dark:ring-[#2DD4BF]/35"
          />
          <span className="font-semibold tracking-tight text-[#0F172A] dark:text-[#F1F5F9]">
            {profile.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#0F766E] dark:text-[#94A3B8] dark:hover:text-[#2DD4BF]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            {profile.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} profile`}
                title={social.isPlaceholder ? `${social.label} (placeholder URL)` : social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-[#475569] transition-colors hover:border-[#E2E8F0] hover:bg-white hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:border-[#1E293B] dark:hover:bg-[#111922] dark:hover:text-[#F1F5F9]"
              >
                <SocialIcon id={social.id} />
              </a>
            ))}
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to normal light mode' : 'Switch to dark mode'}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-2.5 text-xs font-medium text-[#475569] shadow-xs transition-colors hover:border-[#0F766E]/40 hover:text-[#0F172A] dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#94A3B8] dark:hover:border-[#2DD4BF]/40 dark:hover:text-[#F1F5F9]"
          >
            {theme === 'dark' ? (
              <Moon className="h-3.5 w-3.5 text-[#2DD4BF]" aria-hidden="true" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
            )}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
            <span
              aria-hidden="true"
              className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${
                theme === 'dark' ? 'bg-[#14B8A6]' : 'bg-[#CBD5E1]'
              }`}
            >
              <span
                className={`inline-block h-3 w-3 rounded-full bg-white shadow-xs transition-transform ${
                  theme === 'dark' ? 'translate-x-3.5' : 'translate-x-0.5'
                }`}
              />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#475569] md:hidden dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#94A3B8]"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#E2E8F0] bg-[#FAFBF9] px-6 py-4 md:hidden dark:border-[#1E293B] dark:bg-[#0B1117]">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-1.5 text-sm font-medium text-[#475569] transition-colors hover:bg-white hover:text-[#0F766E] dark:text-[#94A3B8] dark:hover:bg-[#111922] dark:hover:text-[#2DD4BF]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-[#E2E8F0] pt-3 dark:border-[#1E293B]">
              {profile.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#0F172A] dark:border-[#1E293B] dark:bg-[#111922] dark:text-[#F1F5F9]"
                >
                  <SocialIcon id={social.id} className="h-3.5 w-3.5" />
                  {social.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
