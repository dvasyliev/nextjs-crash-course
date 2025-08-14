import { CONTACTS_MOCK } from "@/mock/contacts";
import styles from "./page.module.css";

export default function Birthdays() {
  return (
    <main className={styles.Main}>
      <h2>Birthdays</h2>
      <ul>
        {CONTACTS_MOCK.map((contact) => (
          <li key={contact.id} className={styles.Card}>
            <img src={contact.avatarUrl} />
            <h3>
              {contact.firstName} {contact.lastName}
            </h3>
            <p>{contact.dateOfBirth}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
