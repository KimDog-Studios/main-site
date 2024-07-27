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
  Upcoming: [
    {
      id: 1,
      title: "[ETS2] KimDog's Logistics",
      imageUrl: 'https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/KimDogLogo.png',
      link: '/mods/ets2/kimdog-logistics'
    }
  ],
  popular: [
    {
      id: 1,
      title: "[ETS2] KimDog's Network Mod Pack",
      imageUrl: 'https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/main-image.jpg',
      link: '/mods/ets2/kimdog-network-mod-pack'
    }
  ],
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
    },
    {
      id: 3,
      title: "[Minecraft Java] KimDog's Resource Pack",
      imageUrl: 'https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/KimDogLogo.png',
      link: '/mods/minecraft/kimdogs-resource-pack'
    },
  ],
  DiscordServers: [
    {
      id: 1,
      title: "Left Lane Custom Chrome",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-dqoMiCVz1hDF9soA3oJg0FlAPJdnB7Nhw&s',
      link: 'https://discord.gg/leftlane'
    },
    {
      id: 2,
      title: "Gallop Express",
      imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/2277199140215822736/912C20F465C0E16D7065ED39F020BFDA750A36A7/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
      link: 'https://discord.gg/eCCexY4KsJ'
    },
    {
      id: 3,
      title: "KimDog Network ETS 2",
      imageUrl: 'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/119927570_1808220022649708_2152805432281608760_n.jpg?stp=dst-jpg_s720x720&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=lwcPUiKRGVgQ7kNvgHfzTlQ&_nc_ht=scontent-man2-1.xx&oh=00_AYCClzU-H8q9UcxpmZrR_YpmhqmxOYSi7qhOdtFOGVKQvw&oe=66CC944F',
      link: 'https://discord.gg/XAeYaZMxz3'
    }
  ]
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
            <div className="flex flex-col items-center"> {/* Center items */}
              <div className="relative w-[330px] h-[200px] overflow-hidden rounded-lg mb-2"> {/* Fixed dimensions */}
                <Image
                  src={mod.imageUrl}
                  alt={mod.title}
                  layout="fill"
                  className="object-cover"
                  quality={100} // Optional: Adjust image quality
                />
              </div>
              <p className="text-white text-lg font-black text-center">{mod.title}</p> {/* Center text */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export { modsData, CategorySection };
