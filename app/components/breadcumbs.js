import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const isProfilPage = location.pathname === '/pages/menu/profil';

  return (
    <div className="flex flex-row justify-start mb-6">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a href="/pages/dashboard" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600">
              Home
            </a>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ms-1 text-sm font-medium text-blue-500 md:ms-2">Profil</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
