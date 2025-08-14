import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.Main}>
      <section>
        <h2>About app</h2>
        <div className={styles.Card}>
          <p>
            A contacts app stores structured information about people and
            organizations. Typical fields include name, avatar, phone, email,
            address, birthday, notes, and flags like “favorite”.
          </p>
          <p>
            Core actions are create, read, update, delete. Users can open a
            contact, edit fields, or remove it with a confirmation step. Bulk
            actions and undo are optional.
          </p>
        </div>
      </section>

      <section>
        <h2>How it works</h2>
        <ul>
          <li className={styles.Card}>
            <h3>Sidebar</h3>
            Open Contacts to browse the full list in the sidebar
          </li>

          <li className={styles.Card}>
            <h3>See details</h3>
            Click any contact to see details
          </li>

          <li className={styles.Card}>
            <h3>Create new</h3>
            Use the plus button to create a new contact
          </li>

          <li className={styles.Card}>
            <h3>Edit or Delete</h3>
            Use Edit to update fields, or Delete to remove a contact
          </li>
        </ul>
      </section>
    </main>
  );
}
