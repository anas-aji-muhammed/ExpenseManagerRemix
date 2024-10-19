import fs from 'fs/promises';

export async function getStoredExpenses() {
  const rawFileContent = await fs.readFile('data.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedExpenses = data.expenses ?? [];
  return storedExpenses;
}

export function storeExpenses(expenses) {
  return fs.writeFile('data.json', JSON.stringify({ expenses: expenses || [] }));
}

