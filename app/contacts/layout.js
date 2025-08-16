import { Menu } from "@/components/menu";
import { MenuLink } from "@/components/menu-link";
import styles from "./layout.module.css";
import { ContactsList, ContactsListSkeleton } from "@/components/contacts-list";
import { Suspense } from "react";

async function fetchContacts() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts`);
  return data.json();
}

export default async function ContcatsLayout({ children }) {
  const contacts = fetchContacts();

  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>
        <h4 className={styles.Subtitle}>Links</h4>
        <Menu>
          <MenuLink href="/contacts/birthdays">🎂 Birthdays</MenuLink>
        </Menu>

        <h4 className={styles.Subtitle}>Links</h4>
        <Suspense fallback={<ContactsListSkeleton count={10} />}>
          <ContactsList contacts={contacts} />
        </Suspense>
      </aside>

      {children}
    </div>
  );
}
