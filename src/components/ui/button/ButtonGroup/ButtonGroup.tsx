import styles from "./ButtonGroup.module.css";

interface ButtonGroupProps {
  children: React.ReactNode;
  fixed?: boolean;
}

export function ButtonGroup({ children, fixed = false }: ButtonGroupProps) {
  const className = fixed ? styles.actionButtons : styles.buttonGroup;
  return <div className={className}>{children}</div>;
}
