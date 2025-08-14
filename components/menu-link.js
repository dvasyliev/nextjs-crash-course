"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menu-link.module.css";

export function MenuLink({ children, href }) {
  const pathname = usePathname();

  return (
    <li className={styles.MenuLink}>
      <Link href={href} data-active={pathname === href}>
        {children}
      </Link>
    </li>
  );
}
