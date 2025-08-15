"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./menu-link.module.css";

export function MenuLink({ children, href, hasSearchParams }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathnameWithSearchParams = searchParams.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  function isActive(href) {
    return hasSearchParams
      ? href === pathnameWithSearchParams
      : href === pathname;
  }

  return (
    <li className={styles.MenuLink}>
      <Link href={href} data-active={isActive(href)}>
        {children}
      </Link>
    </li>
  );
}
