"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { calculateEMI, formatCurrency } from "@/lib/emi";

interface EMICalculatorProps {
  carPrice?: number; // in Lakhs, pre-filled if available
}

export default function EMICalculator({ carPrice }: EMICalculatorProps) {
  const [price, setPrice] = useState(carPrice ?? 10);
  const [downPayment, setDownPayment] = useState(
    carPrice ? parseFloat((carPrice * 0.2).toFixed(2)) : 2
  );
  const [tenure, setTenure] = useState(60);
  const [rate, setRate] = useState(10.5);

  useEffect(() => {
    if (carPrice) {
      setPrice(carPrice);
      setDownPayment(parseFloat((carPrice * 0.2).toFixed(2)));
    }
  }, [carPrice]);

  const result = calculateEMI(price, downPayment, tenure, rate);
  const isValid = downPayment < price && price > 0 && rate > 0;

  const TENURES = [12, 24, 36, 48, 60, 84];

  return (
    <div
      className="card p-5"
    >
      <h3
        className="text-base font-bold mb-1"
        style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
      >
        Calculate Your EMI
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        * Estimates only. Actual rates depend on lender &amp; credit profile.
      </p>

      <div className="space-y-4">
        {/* Car Price */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="label-fm">Car Price (₹ Lakh)</label>
            <span className="text-xs font-bold" style={{ color: "var(--color-navy-700)" }}>
              ₹{price}L
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={100}
            step={0.25}
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="w-full accent-red-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-0.5">
            <span>₹1L</span><span>₹100L</span>
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="label-fm">Down Payment (₹ Lakh)</label>
            <span className="text-xs font-bold" style={{ color: "var(--color-navy-700)" }}>
              ₹{downPayment}L ({Math.round((downPayment / price) * 100)}%)
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={parseFloat((price * 0.9).toFixed(2))}
            step={0.1}
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value))}
            className="w-full accent-red-600"
          />
        </div>

        {/* Tenure */}
        <div>
          <label className="label-fm mb-2 block">Loan Tenure</label>
          <div className="flex gap-2 flex-wrap">
            {TENURES.map((t) => (
              <button
                key={t}
                onClick={() => setTenure(t)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                style={{
                  background: tenure === t ? "var(--color-navy-900)" : "white",
                  color: tenure === t ? "white" : "var(--color-navy-700)",
                  borderColor: tenure === t ? "var(--color-navy-900)" : "#d1d5db",
                }}
              >
                {t}m
              </button>
            ))}
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="label-fm">Interest Rate (%)</label>
            <span className="text-xs font-bold" style={{ color: "var(--color-navy-700)" }}>
              {rate}%
            </span>
          </div>
          <input
            type="range"
            min={6}
            max={20}
            step={0.25}
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full accent-red-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-0.5">
            <span>6%</span><span>20%</span>
          </div>
        </div>

        {/* Result */}
        {isValid && (
          <div
            className="rounded-xl p-4 text-center"
            style={{ background: "var(--color-navy-900)" }}
          >
            <p className="text-xs text-slate-400 mb-1">Estimated Monthly EMI</p>
            <p
              className="text-3xl font-extrabold text-white mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {formatCurrency(result.emi)}<span className="text-base font-normal text-slate-300">/mo</span>
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/10 rounded-lg p-2.5">
                <p className="text-slate-400">Loan Amount</p>
                <p className="text-white font-semibold mt-0.5">{formatCurrency(result.loanAmount)}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2.5">
                <p className="text-slate-400">Total Interest</p>
                <p className="text-white font-semibold mt-0.5">{formatCurrency(result.totalInterest)}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2.5 col-span-2">
                <p className="text-slate-400">Total Amount Payable</p>
                <p className="text-white font-semibold mt-0.5">{formatCurrency(result.totalPayable)}</p>
              </div>
            </div>
          </div>
        )}
        {!isValid && (
          <p className="text-xs text-red-500">Down payment must be less than car price.</p>
        )}

        <Link href="/finance" className="btn btn-outline w-full text-sm py-2.5">
          Check Finance Options
        </Link>
      </div>
    </div>
  );
}
