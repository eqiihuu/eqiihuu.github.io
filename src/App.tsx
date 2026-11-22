import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Labs } from './components/Labs';
import { Navbar } from './components/Navbar';
import { Outdoors } from './components/Outdoors';
import { useTheme } from './hooks/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#0F172A] transition-colors duration-200 dark:bg-[#0B1117] dark:text-[#F1F5F9]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#0F766E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#FAFBF9]"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" className="mx-auto max-w-5xl px-6">
        <Hero />
        <Experience />
        <Labs />
        <Outdoors />
      </main>

      <Footer />
    </div>
  );
}

export default App;
