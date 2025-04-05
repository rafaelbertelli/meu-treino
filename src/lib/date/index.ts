/**
 * Format a date to ISO string
 * @param date - The date to format
 * @returns The date in ISO string format
 * @example
 * formatDateToISOString("2025-03-27") // "2025-03-27T00:00:00.000Z"
 */
export function formatDateToISOString(date: string) {
  return new Date(date).toISOString();
}

/**
 * Format a date to input value
 * @param date - The date to format
 * @returns The date in input value format
 * @example
 * formatDateToInputValue("2025-03-27T00:00:00.000Z") // "2025-03-27"
 */
export function formatDateToInputValue(date: string) {
  return date.split("T")[0];
}

export function formatDateToLocaleBrazil(date: string) {
  return new Date(date).toLocaleDateString("pt-BR");
}
