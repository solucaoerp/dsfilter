import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode; // Tipo para qualquer elemento filho válido em React
}

export default function Card({ children }: CardProps) {
    return <div className={styles.card}>{children}</div>;
}