import Link from "next/link";
import { CONTACTS_MOCK } from "@/mock/contacts";
import styles from "./page.module.css";
import { Menu } from "@/components/menu";
import { MenuLink } from "@/components/menu-link";

export default async function Birthdays({ searchParams }) {
  const favorite = (await searchParams).favorite === "true";
  const queryString = favorite ? `?favorite=true` : "";
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts${queryString}`
  );
  const contacts = await data.json();

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
        {contacts.map((contact) => (
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
