import { CONTACTS_MOCK } from "@/mock/contacts";
import styles from "./page.module.css";

const INFO_ITEMS = [
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "address", label: "Address" },
  { key: "dateOfBirth", label: "Date of birth" },
  { key: "notes", label: "Notes" },
];

export default async function ContactView({ params }) {
  const { id } = await params;
  const contact = CONTACTS_MOCK.find((contact) => contact.id === id);

  return (
    <main className={styles.Main}>
      <div className={styles.Content}>
        <header className={styles.Header}>
          <img src={contact.avatarUrl} />
          <h1>
            {contact.firstName} {contact.lastName}
          </h1>
        </header>

        <div className={styles.Info}>
          <ul>
            {INFO_ITEMS.map((item) => (
              <li key={item.key}>
                <p className={styles.Label}>{item.label}</p>
                {contact[item.key]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
