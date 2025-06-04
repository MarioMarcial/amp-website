import type { SocialLink } from '../../types';

interface ContactSocialsGridProps {
  socialsData: SocialLink[];
}

export const ContactSocialsGrid = ({
  socialsData,
}: ContactSocialsGridProps) => {
  return (
    <div className="flex flex-wrap gap-4 px-4">
      {socialsData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-2 px-4 rounded-lg bg-gray-dark hover:bg-[oklch(0.25_0.02_274.75)] transition-colors text-gray-200"
        >
          <social.icon className="h-5 w-5" style={{ color: social.color }} />
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};
