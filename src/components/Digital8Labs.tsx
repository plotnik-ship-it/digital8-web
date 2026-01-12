import { motion } from 'framer-motion';

interface LabCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
  href: string;
  delay?: number;
}

// SVG Icon Components
const LightningIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const SmartphoneIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

function LabCard({ title, description, tags, icon, href, delay = 0 }: LabCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-[#c9d40c]/60 hover:shadow-[0_0_40px_rgba(201,212,12,0.4)] h-full flex flex-col"
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-white/5 border border-[#c9d40c]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-[#c9d40c] shadow-[0_0_15px_-3px_rgba(201,212,12,0.1)]">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Details Link */}
      <motion.a
        href={href}
        data-astro-prefetch
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-[#c9d40c] font-semibold text-sm hover:text-[#b8c20b] transition-colors group/link mt-auto"
      >
        View Details
        <svg
          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.a>
    </motion.div>
  );
}

export function Digital8Labs() {
  const labs = [
    {
      title: 'Flash Commerce',
      description:
        'A headless e-commerce storefront that loads 4x faster than Shopify. 99/100 Mobile Score.',
      tags: ['Astro', 'Stripe', 'React'],
      icon: <LightningIcon />,
      href: '/labs/flash-commerce',
    },
    {
      title: 'StaffSync App',
      description:
        'Internal tool for inventory management and staff scheduling. Replaces Excel sheets forever.',
      tags: ['PWA', 'Supabase', 'Tailwind'],
      icon: <SmartphoneIcon />,
      href: '/labs/staff-sync',
    },
    {
      title: 'SEO Shield',
      description:
        'Automated landing page generator optimized for local Canadian SEO ranking factors.',
      tags: ['Edge Functions', 'Analytics'],
      icon: <ShieldCheckIcon />,
      href: '/labs/seo-shield',
    },
    {
      title: 'Nexus Corporate',
      description:
        'High-performance corporate sites for service businesses. Zero bloat, instant credibility. Perfect for firms & agencies.',
      tags: ['Astro', 'i18n', 'CMS'],
      icon: <BuildingIcon />,
      href: '/labs/nexus-corporate',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Engineering, not Templates.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't rely on luck. We deploy battle-tested proprietary architectures to solve complex business problems with precision.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {labs.map((lab, index) => (
            <LabCard
              key={lab.title}
              title={lab.title}
              description={lab.description}
              tags={lab.tags}
              icon={lab.icon}
              href={lab.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
