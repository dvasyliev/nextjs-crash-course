"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MenuLink({ children, href }) {
  const pathname = usePathname();

  return (
    <Link href={href} data-active={pathname === href}>
      {children}
    </Link>
  );
}
