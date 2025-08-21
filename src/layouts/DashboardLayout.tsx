import { useState } from 'react';
import Sidebar from '../features/dashboard/components/Sidebar';
import Header from '../features/dashboard/components/Header';

const DashboardLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-secondary-gray">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 transform bg-white border-r 
          transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
        `}
      >
        <Sidebar isOpen={isSidebarOpen} />
      </aside>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Right side */}
      <div className="flex flex-1 flex-col md:ml-64">
        {/* Header */}
        <header className="fixed top-0 left-0 md:left-64 right-0 z-40 bg-white border-b">
          <div className="h-16 flex items-center justify-between px-4 md:px-6">
            <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} title={title} />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto mt-16 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
