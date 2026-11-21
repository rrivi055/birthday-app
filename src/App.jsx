import BirthDate from './components/BirthDate';
import I18nProvider from './context/I18nProvider';
import ChooseLanguage from './components/ChooseLanguage';
import './App.css';

export default function App() {
  return (
    <I18nProvider>
      <div className="app">
        <ChooseLanguage />
        <BirthDate birthDate="20/11/2015" />
      </div>
    </I18nProvider>
  );
}