import { homeExploreData } from '../../data/homeExploreData';
import { Button } from '../ui';

export const HomeExploreGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:justify-center">
      {homeExploreData.map((exploreItem, index) => (
        <div
          key={index}
          className="px-10 py-6 rounded-xl bg-gray-dark border border-gray-800 text-center"
        >
          <>
            <span className="">
              <exploreItem.icon className="w-14 h-14 mx-auto mb-3 text-primary" />
            </span>

            <h3 className="mb-1 font-bold text-xl text-gray-200">
              {exploreItem.title}
            </h3>

            <p className="text-gray-300">{exploreItem.description}</p>

            <div className="mt-4">
              <Button
                label="Conocer Más"
                url={exploreItem.url}
                variant="secondary"
              />
            </div>
          </>
        </div>
      ))}
    </div>
  );
};
