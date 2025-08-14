import { MenuLink } from "@/components/menu-link";
import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.Layout}>
          <header className={styles.Header}>
            <h1 className={styles.Logo}>MyContacts</h1>
            <nav className={styles.Menu}>
              <ul>
                <li>
                  <MenuLink href="/contacts">Contacts</MenuLink>
                </li>
                <li>
                  <MenuLink href="/about">About</MenuLink>
                </li>
              </ul>
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
