import Link from 'next/link';
import React from 'react';

type Props = {
  menuList: string[]
};

function NavigationBar({ menuList }: Props) {
  return (
    <nav className="font-bold text-4xl flex justify-between">
      {
                    menuList
                      .map((menu) => (
                        <span>
                          <Link key={menu} className=' hover:underline' href={menu.startsWith('/') ? menu : `/${menu}`}>
                          {menu}
                          </Link>
                          .
                        </span>
                      ))
                    }
    </nav>
  );
}

export default NavigationBar;
