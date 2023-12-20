import Link from 'next/link';
import NavigationBar from './navigation-bar';

function Header() {
  return (
    <header className="container flex flex-row justify-between items-center py-5 px-10 h-[5rem] bg-opacity-70 bg-white fixed [&+*]:pt-40 [&>*]:flex-grow">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <NavigationBar menuList={['Development', 'Life', 'Portfolio']} />
    </header>
  );
}

export default Header;
