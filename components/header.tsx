import Link from 'next/link';
import NavigationBar from './navigation-bar';
import SearchBar from './search-bar';

type Props = {
  menuList: string[]
};

function Header({ menuList }: Props) {
  return (
    <header className="container flex flex-row justify-between items-center py-5 px-10 h-[5rem] bg-opacity-70 bg-white fixed [&+*]:pt-40 z-50">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex-grow">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <span className="flex-grow-[3]">
        <NavigationBar menuList={menuList} />
      </span>
      <SearchBar />
    </header>
  );
}

export default Header;
