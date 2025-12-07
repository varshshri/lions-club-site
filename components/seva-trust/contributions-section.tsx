"use client";

import { motion } from "framer-motion";

const contributions = [
  {
    contributor: "ABC Corporation",
    amount: "₹5,00,000",
    date: "2024-05-15",
    purpose: "Health Camp Sponsorship",
  },
  {
    contributor: "Anonymous Donor",
    amount: "₹2,50,000",
    date: "2024-05-12",
    purpose: "Educational Materials",
  },
  {
    contributor: "Innovate Tech Ltd.",
    amount: "₹1,00,000",
    date: "2024-05-10",
    purpose: "Environmental Drive",
  },
  {
    contributor: "Community Fundraiser",
    amount: "₹3,75,000",
    date: "2024-04-28",
    purpose: "General Fund",
  },
  {
    contributor: "Local Residents Association",
    amount: "₹75,000",
    date: "2024-04-22",
    purpose: "Community Kitchen",
  },
];

export default function ContributionsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f6f7fb]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1f29] mb-4">
            Our Contributions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powered by the generosity of our community. Every contribution, big or small, makes a significant impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#2563eb] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Contributor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Amount (INR)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contributions.map((contribution, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-[#1b1f29] font-medium">
                      {contribution.contributor}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#2563eb] font-semibold">
                      {contribution.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {contribution.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {contribution.purpose}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
