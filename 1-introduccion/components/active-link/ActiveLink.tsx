'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './ActiveLink.module.css';

interface ActiveLinkProps {
  path: string;
  text: string;
}

const ActiveLink = (props: ActiveLinkProps) => {
  const { path, text } = props;
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.link} ${path === pathName ? styles['active-link'] : ''}`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;