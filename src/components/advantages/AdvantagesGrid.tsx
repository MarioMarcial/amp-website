import { advantagesData } from '../../data';

export const AdvantagesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-3">
      {advantagesData.map((advantage) => (
        <div
          key={advantage.id}
          className="bg-dark-rich rounded-xl p-8 space-y-2 border border-primary-400"
        >
          <advantage.icon className="text-primary-100 w-12 h-12" />

          <h3 className="text-white text-md font-bold">{advantage.title}</h3>

          <p className="text-gray-300">{advantage.description}</p>
        </div>
      ))}
    </div>
  );
};
