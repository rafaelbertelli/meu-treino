"use client";

import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "../button/Button/Button";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
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
