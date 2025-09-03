import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { FaSun } from 'react-icons/fa';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="flex gap-6 text-gray-700 font-medium">
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition-colors ${
              isActive
                ? 'bg-indigo-500 text-white'
                : 'hover:bg-indigo-100 hover:text-indigo-600'
            }`
          }
        >
          Home
        </NavLink>
      )}

      <a
        href="https://github.com/omertaske/goit-react-hw-08"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-400 text-black font-bold group overflow-hidden"
      >
        <FaSun className="relative z-10 animate-spin-slow text-yellow-600 group-hover:text-yellow-400 transition-colors duration-300" />
        <span className="relative z-10">GitHub</span>

       
        <span className="absolute inset-0 rounded-full bg-yellow-200 opacity-50 animate-pulse-slow pointer-events-none"></span>
        <span className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-spin-slow pointer-events-none"></span>
      </a>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      `}</style>
    </nav>
  );
};

export default Navigation;
