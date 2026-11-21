import I18nProvider from './context/I18nProvider';
import ChooseLanguage from './components/ChooseLanguage';
import BirthDate from './components/BirthDate';
import GreetingsList from './components/GreetingsList';
import './App.css';

const greetings = [
  'עד מאה ועשרים שנה!',
  'שתזכה לבריאות ואושר',
  'שכל המשאלות שלך יתגשמו',
  'שנה מלאה בהצלחות',
];

export default function App() {
  return (
    <I18nProvider>
      <div className="app">
        <ChooseLanguage />
        <BirthDate birthDate="20/11/2015" />
        <GreetingsList greetings={greetings} />
      </div>
    </I18nProvider>
  );
}