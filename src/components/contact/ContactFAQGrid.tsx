import { FAQData } from '../../data';

export const ContactFAQGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {FAQData.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-dark border border-gray-800 rounded-xl"
        >
          <div className="p-6">
            <h3 className="mb-2 text-lg font-medium text-primary-100">
              {faq.question}
            </h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
