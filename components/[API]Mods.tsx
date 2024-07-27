// pages/test/page.tsx
import React from 'react';
import Image from 'next/image';

// Define TypeScript interfaces for mod and mods data
interface Mod {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

interface ModsData {
  [category: string]: Mod[];
}

// Define the mods data
const modsData: ModsData = {
  new: [
    {
      id: 1,
      title: "[ATS] KimDog's ATS Mod Pack",
      imageUrl: 'https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/main-image.jpg',
      link: '/mods/ats/kimdog_optional_mod_pack'
    },
    {
      id: 2,
      title: "[ETS2] KimDog's Network Mod Pack",
      imageUrl: 'https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/main-image.jpg',
      link: '/mods/ets2/kimdog-network-mod-pack'
    }
  ],
  // Add more categories as needed
};

// Component to render a category section
const CategorySection: React.FC<{ title: string; mods: Mod[] }> = ({ title, mods }) => {
  // Ensure `title` is a valid string
  const displayTitle = title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Unknown Category';

  return (
    <div className="my-8">
      <h2 className="text-3xl font-black mb-4 text-white">{displayTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mods.map((mod) => (
          <a href={mod.link} key={mod.id} className="block">
            <div className="flex flex-col items-start ml-4"> {/* Adjusted to position left */}
              <div className="relative w-full h-auto overflow-hidden rounded-lg">
                <Image
                  src={mod.imageUrl}
                  alt={mod.title}
                  width={276}
                  height={162}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-2 text-white text-lg font-black">{mod.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export { modsData, CategorySection };