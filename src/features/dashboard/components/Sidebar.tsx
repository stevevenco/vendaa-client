import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faWallet,
  faBolt,
  faFileInvoice,
  faChartPie,
  faSliders,
  faUserCircle,
  faCode,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { to: '/dashboard', icon: faHouse, text: 'Dashboard' },
  { to: '/wallet', icon: faWallet, text: 'Wallet' },
  { to: '/meters', icon: faBolt, text: 'Meters' },
  { to: '/vending', icon: faFileInvoice, text: 'Vending' },
  { to: '/reports', icon: faChartPie, text: 'Reports' },
  { to: '/communication', icon: faSliders, text: 'Communication' },
];

const footerLinks = [
  { to: '/account', icon: faUserCircle, text: 'Account' },
  { to: '/developer', icon: faCode, text: 'Developer' },
  { to: '#', icon: faArrowRightFromBracket, text: 'Logout' },
];

const NavLink = ({ to, icon, text, active }: { to: string; icon: any; text: string; active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
      active
        ? 'bg-primary-blue text-white shadow-sm'
        : 'text-text-light hover:bg-secondary-gray hover:text-text-dark'
    }`}
  >
    <FontAwesomeIcon icon={icon} className="w-5 text-center" />
    <span>{text}</span>
  </Link>
);

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const location = useLocation();

  return (
    <aside
      className={`bg-white border-r border-border-color flex-col p-6 fixed top-0 left-0 h-full z-50 transform transition-transform md:relative md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '260px' }}
    >
      <div className="flex items-center gap-3 mb-8">
        <img src="https://i.pravatar.cc/40?img=1" alt="Organization Logo" className="w-10 h-10 rounded-full object-cover" />
        <h1 className="text-lg font-semibold">TechSolutions Inc.</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <NavLink key={link.to} {...link} active={location.pathname === link.to} />
        ))}
      </nav>
      <div className="mt-auto">
        <nav className="flex flex-col gap-2">
          {footerLinks.map((link) => (
            <NavLink key={link.to} {...link} active={location.pathname === link.to} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
