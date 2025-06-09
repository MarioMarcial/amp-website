import { useState } from 'react';
import { ageCategoriesData } from '../../data';
import type { AgeCategory } from './../../types/ageCategory.types';
import { Button } from './../ui';
import { MdDateRange } from 'react-icons/md';

export const AgesTabGrid = () => {
  const [currentTab, setCurrentTab] = useState<AgeCategory>(
    ageCategoriesData[1]
  );

  return (
    <>
      <div className="flex rounded-lg text-center text-sm font-medium shadow-sm bg-gray-dark">
        {ageCategoriesData.map((category) => (
          <button
            key={category.id}
            className={`inline-block w-full p-4 border-y-2 border-s-2 border-gray-900 focus:outline-none transition-colors duration-200 cursor-pointer ${
              currentTab.id === category.id
                ? `rounded-sm bg-primary-100 text-dark-rich`
                : `bg-transparent text-gray-400`
            }`}
            onClick={() => setCurrentTab({ ...category })}
            aria-label={`Mostrar categoría ${category.category.toLowerCase()}`}
            title={`Mostrar categoría ${category.category.toLowerCase()}`}
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="grid mt-5 md:grid-cols-2">
        <div className="rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover object-center pointer-events-none"
            src={`${import.meta.env.BASE_URL}images/${currentTab.image}`}
            alt={currentTab.image}
            loading="lazy"
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-gray-200 font-semibold text-xl">
            {currentTab.title}
          </h3>
          <p className="text-gray-300">{currentTab.description}</p>
          <ul className="space-y-2">
            {currentTab.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <span className="text-gray-300 font-semibold">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col md:flex-row justify-start">
            <Button
              label="Agendar Clase"
              variant="secondary"
              url="/contacto"
              icon={MdDateRange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
