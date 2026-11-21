import I18nProvider from './context/I18nProvider';
import ChooseLanguage from './components/ChooseLanguage';
import './App.css';

export default function App() {
  return (
    <I18nProvider>
      <div className="app">
        <ChooseLanguage />
      </div>
    </I18nProvider>
  );
}