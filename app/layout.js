import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.Layout}>
          <header className={styles.Header}>
            <h1 className={styles.Logo}>MyContacts</h1>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
