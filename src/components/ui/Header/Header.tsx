"use client";

import { useAuth } from "@/components/SupabaseProvider";
import { Button } from "../button/Button/Button";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <Button
        variant="ghost"
        onClick={handleLogout}
        className={styles.logoutButton}
      >
        Sair
      </Button>
    </header>
  );
}
