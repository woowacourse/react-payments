export class ExpiryDate {
  month: string;
  year: string;
  constructor(month: string, year: string) {
    this.month = month;
    this.year = year;
  }

  toSlashFormat(): string {
    return `${this.month}/${this.year}`;
  }

  toMMYY(): string {
    return `${this.month}${this.year}`;
  }
}
