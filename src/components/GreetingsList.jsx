import GreetingCard from './GreetingCard';

export default function GreetingsList({ greetings }) {
  return (
    <div className="greetings-list">
      {greetings.map((greeting, index) => (
        <GreetingCard key={index} greeting={greeting} />
      ))}
    </div>
  );
}