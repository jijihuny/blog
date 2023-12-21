import Link from 'next/link';
import React from 'react';

type Props = {
  menuList: string[]
};

function NavigationBar({ menuList }: Props) {
  return (
    <nav className="font-bold text-1xl md:text-3xl flex justify-evenly">
      {
                    menuList
                      .map((menu) => (
                        <span key={menu}>
                          <Link className="hover:underline capitalize" href={menu.startsWith('/') ? menu : `/${menu}`}>
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
