import styles from "./page.module.css";

export default function Contacts() {
  return (
    <main className={styles.Main}>
      <h2>Welcome to your Contacts</h2>
      <div className={styles.Card}>
        <p>This area shows details of the person you select.</p>
        <p>
          Use the sidebar on the left to{" "}
          <strong>browse your list and click any name</strong> to open their
          profile. You will see their avatar, name, phone, email, address,
          notes, and favorite status.
        </p>
        <p>
          <strong>Use the search box</strong> at the top of the sidebar to
          filter the list quickly. If you cannot find someone, create a new
          contact from the top bar. Until you pick a person, this panel stays
          empty.
        </p>
      </div>
    </main>
  );
}
