import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function Layout({ children, showSidebar = true }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#0a0a12]">
      <Navbar />
      <div className="flex flex-1 pt-14">
        {showSidebar && <Sidebar />}
        <main
          className={`flex-1 min-w-0 ${
            showSidebar ? 'lg:ml-[280px]' : ''
          }`}
        >
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            {children}
          </div>
        </main>
      </div>
      <div className={showSidebar ? 'lg:ml-[280px]' : ''}>
        <Footer />
      </div>
    </div>
  );
}
