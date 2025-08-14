import { MenuLink } from "@/components/menu-link";
import styles from "./layout.module.css";

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
      </aside>

      {children}
    </div>
  );
}
