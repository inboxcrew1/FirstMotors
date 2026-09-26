import type { EMICalculation } from "./types";

export function calculateEMI(
  carPriceLakh: number,
  downPaymentLakh: number,
  tenureMonths: number,
  annualInterestRate: number
): EMICalculation {
  const carPrice = carPriceLakh * 100000;
  const downPayment = downPaymentLakh * 100000;
  const loanAmount = carPrice - downPayment;
  const monthlyRate = annualInterestRate / 12 / 100;

  let emi: number;
  if (monthlyRate === 0) {
    emi = loanAmount / tenureMonths;
  } else {
    emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  }

  const totalPayable = emi * tenureMonths + downPayment;
  const totalInterest = totalPayable - carPrice;

  return {
    carPrice,
    downPayment,
    loanAmount,
    tenureMonths,
    interestRate: annualInterestRate,
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayable: Math.round(totalPayable),
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
