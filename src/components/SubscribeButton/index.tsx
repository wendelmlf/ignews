import styles from './styles.module.scss';

interface SubscribeButtonProps {
    prideId: string;
}

export function SubscribeButton({prideId}: SubscribeButtonProps) {
    return (
        <button
        type="button"
        className={styles.subscribeButton}
        >
            Subscribe now
        </button>

    );
}