import Link from 'next/link';
import React from 'react';

type Props = {
  menuList: string[]
};

function NavigationBar({ menuList }: Props) {
  return (
    <nav className="font-bold text-4xl flex justify-around flex-grow px-10">
      {
                    menuList
                      .map((menu) => (
                        <Link key={menu} href={menu.startsWith('/') ? menu : `/${menu}`}>
                          {menu}
                          .
                        </Link>
                      ))
                    }
    </nav>
  );
}

export default NavigationBar;
