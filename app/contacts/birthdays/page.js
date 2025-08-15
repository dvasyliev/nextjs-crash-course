import Link from "next/link";
import { CONTACTS_MOCK } from "@/mock/contacts";
import styles from "./page.module.css";
import { Menu } from "@/components/menu";
import { MenuLink } from "@/components/menu-link";

export default async function Birthdays({ searchParams }) {
  const favorite = (await searchParams).favorite === "true";

  return (
    <main className={styles.Main}>
      <h2>Birthdays</h2>
      <Menu>
        <MenuLink href="/contacts/birthdays" hasSearchParams>
          All
        </MenuLink>
        <MenuLink href="/contacts/birthdays?favorite=true" hasSearchParams>
          Only Favorite
        </MenuLink>
      </Menu>
      <ul className={styles.Cards}>
        {CONTACTS_MOCK.filter((contact) =>
          favorite ? contact.favorite === favorite : true
        ).map((contact) => (
          <li key={contact.id}>
            <Link className={styles.Card} href={`/contacts/${contact.id}`}>
              <img src={contact.avatarUrl} />
              <h3>
                {contact.firstName} {contact.lastName}
              </h3>
              <p>{contact.dateOfBirth}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
