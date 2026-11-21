function parseDate(dateString) {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
}

export default function BirthDate({ birthDate }) {
  const date = parseDate(birthDate);
  const age = new Date().getFullYear() - date.getFullYear();

  return (
    <div className="birth-date">
      <p>
        מזל טוב! אתה בן {age}. תאריך הלידה שלך הוא: {birthDate}
      </p>
    </div>
  );
}