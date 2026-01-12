import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function RevenueCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [customerValue, setCustomerValue] = useState(100);
  const [loadTime, setLoadTime] = useState(5);
  const [displayedLoss, setDisplayedLoss] = useState(0);

  // Calculate potential annual loss
  // Formula: For every 1 second over 2 seconds, conversion drops by 7%
  const calculateLoss = () => {
    if (loadTime <= 2) return 0;
    
    const secondsOver = loadTime - 2;
    const conversionDrop = secondsOver * 0.07; // 7% per second
    const monthlyLoss = monthlyVisitors * conversionDrop * customerValue;
    const annualLoss = monthlyLoss * 12;
    
    return Math.round(annualLoss);
  };

  const annualLoss = calculateLoss();

  // Animate the number counting up
  useEffect(() => {
    const duration = 1000; // 1 second animation
    const steps = 60;
    const increment = annualLoss / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, annualLoss);
      setDisplayedLoss(Math.round(current));

      if (step >= steps) {
        clearInterval(timer);
        setDisplayedLoss(annualLoss);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [annualLoss]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white">
          The Cost of Slow.
        </h2>

        <div className="space-y-8">
          {/* Monthly Visitors Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-white">
                Monthly Visitors
              </label>
              <span className="text-xl font-bold text-white/90">
                {monthlyVisitors.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="100"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              style={{
                '--fill-percent': `${(monthlyVisitors / 50000) * 100}%`,
              } as React.CSSProperties}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>0</span>
              <span>50,000</span>
            </div>
          </div>

          {/* Average Customer Value Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-white">
                Average Customer Value
              </label>
              <span className="text-xl font-bold text-white/90">
                {formatCurrency(customerValue)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="500"
              step="5"
              value={customerValue}
              onChange={(e) => setCustomerValue(Number(e.target.value))}
              style={{
                '--fill-percent': `${(customerValue / 500) * 100}%`,
              } as React.CSSProperties}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>$0</span>
              <span>$500</span>
            </div>
          </div>

          {/* Current Load Time Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-lg font-semibold text-white">
                Current Load Time
              </label>
              <span className="text-xl font-bold text-white/90">
                {loadTime.toFixed(1)}s
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={loadTime}
              onChange={(e) => setLoadTime(Number(e.target.value))}
              style={{
                '--fill-percent': `${(loadTime / 10) * 100}%`,
              } as React.CSSProperties}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>0s</span>
              <span>10s</span>
            </div>
          </div>

          {/* Loss Display */}
          <div className="pt-8 border-t border-white/10">
            <div className="text-center space-y-6">
              <div>
                <p className="text-gray-300 text-sm uppercase tracking-widest mb-4">
                  Potential Annual Loss
                </p>
                <motion.div
                  key={annualLoss}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                >
                  {formatCurrency(displayedLoss)}
                </motion.div>
                {loadTime <= 2 && (
                  <p className="text-green-400 text-sm mt-2">
                    Your site is fast! No conversion loss detected.
                  </p>
                )}
                {loadTime > 2 && (
                  <p className="text-gray-400 text-sm mt-2">
                    Based on a 7% conversion drop per second over 2s
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#c9d40c] text-black font-bold text-lg rounded-lg hover:bg-[#c9d40c]/90 transition-all duration-200 shadow-lg shadow-[#c9d40c]/30 mt-8"
              >
                Recover this Revenue
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>
              
              {/* Disclaimer */}
              <p className="text-xs text-gray-400 text-center mt-4 px-4 mx-auto leading-tight">
                Estimates based on Google & Amazon latency studies. Actual results vary based on your specific traffic and business model.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
