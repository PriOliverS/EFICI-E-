import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { PageType, navigationItems } from '../types/navigation';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: PageType) => {
    onPageChange(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handlePageChange('inicio')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <Zap className="h-8 w-8 text-indigo-500" />
            <span className="text-xl font-bold text-gray-900">Efici-E</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`transition-colors duration-200 font-medium px-3 py-2 rounded-lg ${
                  currentPage === item.id
                    ? 'text-indigo-500 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-500 hover:bg-indigo-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-500 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-indigo-500 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-500 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};