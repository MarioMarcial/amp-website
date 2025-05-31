import { advantagesData } from '../../data';

export const AdvantagesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {advantagesData.map((advantage) => (
        <div
          key={advantage.id}
          className="p-8 space-y-2 rounded-xl bg-gray-dark border border-gray-800"
        >
          <advantage.icon className="w-12 h-12 text-primary-100" />

          <h3 className="text-gray-200 text-md font-bold">{advantage.title}</h3>

          <p className="text-gray-300">{advantage.description}</p>
        </div>
      ))}
    </div>
  );
};
