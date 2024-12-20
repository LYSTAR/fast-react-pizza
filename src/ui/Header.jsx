import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-stone-200 bg-yellow-500 px-4  py-3 uppercase sm:px-6">
      <Link to="/" className="text-sm tracking-widest md:text-base">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
