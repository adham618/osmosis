import React from 'react'
import Link from 'next/link'

import menu_data from './menu_data'

export default function NavMenu() {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown && 'menu-item-has-children'}`}>
            <Link href={item.link}>{item.title}</Link>
            {item.has_dropdown && (
              <ul className="sub-menu">
                {item.sub_menus?.map((sub_menu, index) => (
                  <li key={index}>
                    <Link href={sub_menu.link}>{sub_menu.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
