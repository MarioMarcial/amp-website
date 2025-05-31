import type { ContactMethod } from '../../types';

type ContactMethodsGridProps = {
  contactMethods: ContactMethod[];
};

export const ContactMethodsGrid = ({
  contactMethods,
}: ContactMethodsGridProps) => {
  return (
    <div className="space-y-6">
      {contactMethods.map((contact) => (
        <div key={contact.type} className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-gray-dark">
            <contact.icon className="h-6 w-6 text-primary-100 stroke-1" />
          </div>
          <div>
            <h3 className="mb-1 font-bold text-gray-200">{contact.name}</h3>

            {!['location', 'schedule'].includes(contact.type) && (
              <a
                href={contact.href}
                className="font-medium text-gray-300 hover:underline hover:text-primary-100 transition-colors"
              >
                {contact.label}
              </a>
            )}

            {contact.details.map((detail) => (
              <p
                key={detail}
                className={`${
                  !['location', 'schedule'].includes(contact.type)
                    ? 'text-gray-400 text-xs'
                    : 'text-gray-300 text-sm'
                }  mt-1`}
              >
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
