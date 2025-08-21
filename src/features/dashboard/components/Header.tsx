import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onMenuClick, title }: { onMenuClick: () => void, title: string }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full">
      <button className="md:hidden" onClick={onMenuClick}>
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex items-center gap-6">
        <FontAwesomeIcon icon={faBell} className="text-text-light text-xl cursor-pointer" />
        <FontAwesomeIcon icon={faEnvelope} className="text-text-light text-xl cursor-pointer" />
        <div className="relative">
          <button onClick={() => setIsProfileOpen(!isProfileOpen)} onBlur={() => setIsProfileOpen(false)}>
            <img src="https://i.pravatar.cc/40?img=3" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
              <a href="#" className="block px-4 py-2 text-sm text-text-dark hover:bg-secondary-gray">My Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-text-dark hover:bg-secondary-gray">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-text-dark hover:bg-secondary-gray">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
