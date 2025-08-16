import { Menu } from "@/components/menu";
import { MenuLink } from "@/components/menu-link";
import styles from "./layout.module.css";

export default async function ContcatsLayout({ children }) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts`);
  const contacts = await data.json();

  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>
        <h4 className={styles.Subtitle}>Links</h4>
        <Menu>
          <MenuLink href="/contacts/birthdays">🎂 Birthdays</MenuLink>
        </Menu>

        <h4 className={styles.Subtitle}>Links</h4>
        <Menu className={styles.Menu}>
          {contacts.map((contact) => (
            <MenuLink key={contact.id} href={`/contacts/${contact.id}`}>
              <div className={styles.Card}>
                <img src={contact.avatarUrl} />
                {contact.firstName} {contact.lastName}
              </div>
            </MenuLink>
          ))}
        </Menu>
      </aside>

      {children}
    </div>
  );
}
