import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from '@i18n';
import { AppRouter } from '@router';
import styles from './App.module.css';

export default function App() {
  return (
    <I18nProvider>
      <div className={styles.app}>
        <BrowserRouter basename="/landing">
          <AppRouter />
        </BrowserRouter>
      </div>
    </I18nProvider>
  );
}
