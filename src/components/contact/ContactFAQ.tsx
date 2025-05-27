import { FAQData } from '../../data';

export const ContactFAQ = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 md:text-center">
        Preguntas Frecuentes
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {FAQData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-dark border border-gray-800 rounded-xl"
          >
            <div className="p-6">
              <h3 className="text-lg font-medium mb-2 text-primary-100">
                {faq.question}
              </h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
