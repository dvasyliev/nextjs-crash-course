import { MenuLink } from "@/components/menu-link";
import styles from "./layout.module.css";
import { CONTACTS_MOCK } from "@/mock/contacts";

export default function ContcatsLayout({ children }) {
  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>
        <h4 className={styles.Subtitle}>Links</h4>
        <nav className={styles.Menu}>
          <ul>
            <li>
              <MenuLink href="/contacts/birthdays">🎂 Birthdays</MenuLink>
            </li>
          </ul>
        </nav>

        <h4 className={styles.Subtitle}>Links</h4>
        <nav className={styles.Menu}>
          <ul>
            {CONTACTS_MOCK.map((contact) => (
              <li>
                <MenuLink href={`/contacts/${contact.id}`}>
                  <div className={styles.Card}>
                    <img src={contact.avatarUrl} />
                    {contact.firstName} {contact.lastName}
                  </div>
                </MenuLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {children}
    </div>
  );
}
