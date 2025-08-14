import { Menu } from "@/components/menu";
import { MenuLink } from "@/components/menu-link";
import { CONTACTS_MOCK } from "@/mock/contacts";
import styles from "./layout.module.css";

export default function ContcatsLayout({ children }) {
  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>
        <h4 className={styles.Subtitle}>Links</h4>
        <Menu>
          <MenuLink href="/contacts/birthdays">🎂 Birthdays</MenuLink>
        </Menu>

        <h4 className={styles.Subtitle}>Links</h4>
        <Menu className={styles.Menu}>
          {CONTACTS_MOCK.map((contact) => (
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
