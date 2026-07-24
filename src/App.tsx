import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@router';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
