export async function translate(text, source, target) {
  if (source === target) return text;

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.responseData.translatedText;
}