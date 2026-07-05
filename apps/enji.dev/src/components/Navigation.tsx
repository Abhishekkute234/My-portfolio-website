import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import {
  GFGIcon,
  GitHubIcon,
  Leetcode,
  LinkedInIcon,
  YoutubeIcon,
} from '@/components/Icons';
import NavIcon from '@/components/navigations/NavIcon';
import ThemeToggle from '@/components/navigations/ThemeToggle';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLinkExpanded from '@/components/navigations/NavLinkExpanded';
import NavLogo from '@/components/navigations/NavLogo';

import useOnScroll from '@/hooks/useOnScroll';
import { useAuth } from '@/providers/AuthProvider';

const workLinks = [
  { title: 'Skills & Tools', href: '/work/skills-and-tools' },
  { title: 'Projects', href: '/projects' },
  { title: 'Experience', href: '/work/experience' },
  { title: 'Blogs', href: '/blog' },
  { title: 'Studio', href: '/work/studio' },
  { title: 'Contact', href: '/work/contact' },
];

function Navbar() {
  const isScrolled = useOnScroll(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Successfully logged out!');
      setDropdownOpen(false);
      router.push('/');
    } catch (err: any) {
      toast.error('Logout failed.');
    }
  };

  return (
    <header
      className={clsx('fixed left-0 right-0 top-0 z-[1000]')}
    >
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolled === true && [
              'border-divider-light border-b bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-slate-900/80',
            ],
          ]
        )}
      />
      <div className={clsx('h-2', [isScrolled === true && ['-mt-2']])} />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li className={clsx('lg:hidden')} data-accent="blue">
                <NavLinkDropdown title="Work" items={workLinks} />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLinkExpanded title="" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className={clsx('flex items-center')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://www.linkedin.com/in/abhishek-kute-a85822257/"
                icon={<LinkedInIcon className={clsx('h-5 w-5')} />}
                title="LinkedIn"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/Abhishekkute234"
                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                title="GitHub"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://www.youtube.com/@keep_it_sorted"
                icon={<YoutubeIcon className={clsx('h-5 w-5')} />}
                title="YouTube"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://www.geeksforgeeks.org/user/abhishek_kute_234/"
                icon={<GFGIcon className={clsx('h-5 w-5')} />}
                title="GFG"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://leetcode.com/u/Abhishek_Kute/"
                icon={<Leetcode className={clsx('h-7 w-8')} />}
                title="Leetcode"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <div
                className={clsx(
                  'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <li className={clsx('mr-2')}>
              <ThemeToggle />
            </li>
            <li className="relative">
              {loading ? (
                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
              ) : user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={clsx(
                      'flex h-8 w-8 items-center justify-center rounded-full bg-accent-600 font-bold text-white text-xs transition hover:bg-accent-700 focus:outline-none dark:bg-accent-500 dark:hover:bg-accent-600'
                    )}
                  >
                    {user.name ? user.name.slice(0, 2).toUpperCase() : (user.email ? user.email.slice(0, 2).toUpperCase() : 'US')}
                  </button>
                  {dropdownOpen && (
                    <div className={clsx(
                      'absolute right-0 mt-2 w-48 rounded-xl border shadow-xl py-1.5 z-50 transition-all text-left',
                      'bg-white dark:bg-slate-900',
                      'border-slate-200 dark:border-slate-800'
                    )}>
                      <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-xs text-slate-400 font-semibold truncate">Logged in as</p>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">{user.name || user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className={clsx(
                          'w-full text-left px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all'
                        )}
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className={clsx(
                    'button button--soft h-8 px-3.5 text-xs font-bold rounded-full transition-all'
                  )}
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
