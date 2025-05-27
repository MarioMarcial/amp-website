import { homeSiteSectionsData } from '../../data/homeSiteSectionsData';
import { Button } from '../ui/buttons/Button';

export const HomeSiteSections = () => {
  return (
    <section className="">
      <h2 className="text-3xl text-center font-bold text-primary mb-8">
        Explora nuestra academia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center gap-8">
        {homeSiteSectionsData.map((section, index) => (
          <div
            key={index}
            className="bg-gray-dark border border-gray-800 rounded-xl p-10"
          >
            <>
              <span>
                <section.icon className="w-15 h-15 text-primary mb-3" />
              </span>

              <h3 className="text-2xl text-white font-bold">{section.title}</h3>
              <p className="text-gray-300">{section.description}</p>

              <div className="mt-3">
                <Button
                  label="Conocer más"
                  url={section.url}
                  bgColor="secondary"
                />
              </div>
            </>
          </div>
        ))}
      </div>
    </section>
  );
};
