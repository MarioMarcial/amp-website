import { useState } from 'react';
import { agesData } from '../../../data';
import type { AgeCategory } from '../../../types/ageTab';
import { Button } from '../buttons';
import { MdDateRange } from 'react-icons/md';

export const TabAges = () => {
  const [currentTab, setCurrentTab] = useState<AgeCategory>(agesData[1]);

  return (
    <>
      <div className="text-sm font-medium text-center rounded-lg shadow-sm flex bg-gray-dark">
        {agesData.map((ageItem) => (
          <button
            key={ageItem.id}
            className={`inline-block w-full p-4 border-x-2 border-gray-900 focus:outline-none transition-colors duration-200 ${
              currentTab.id === ageItem.id
                ? `bg-primary-100 text-dark-rich rounded-sm`
                : `bg-transparent text-gray-400`
            }`}
            onClick={() => setCurrentTab({ ...ageItem })}
          >
            {ageItem.category}
          </button>
        ))}
      </div>

      <div className="mt-5 p-6 bg-dark-rich space-y-4 rounded-xl outline-1 outline-primary-400 md:mx-1 md:p-9">
        <h4 className="text-primary-100 font-semibold text-xl">
          {currentTab.title}
        </h4>
        <p className="text-gray-300">{currentTab.description}</p>
        <ul className="space-y-2">
          {currentTab.details.map((detail, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              <span className="text-gray-300 font-semibold">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-8">
        <Button
          label="Agendar Clase"
          bgColor={'secondary'}
          textColor={'dark-rich'}
          url="/contacto"
          icon={MdDateRange}
        />
      </div>
    </>
  );
};
