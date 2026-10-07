type Gross = {
  USA: number;
  worldwide: number;
};

type FinancialData = {
  budget: number;
  openingWeekendUSA: number;
  gross: Gross;
};

type Movie = {
  id: string;
  originalTitle: string;
  company: string;
  rate: number;
  metascore: number;
  minutes: number;
  release: number;
  financialData: FinancialData;
  posterUrl: string;
};

export { type Movie };
