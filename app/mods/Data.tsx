// In your Data.ts file
export interface DLC {
   id: number;
  img: string;
  title: string;
  game: string;
  version: string;
  author: string;
  downloadCount: number;
  link: string;
}

export interface Mod {
  id: number;
  img: string;
  title: string;
  game: string;
  version: string;
  author: string;
  downloadCount: number;
  link: string;
}

const verifiedAuthors = ['KimDog', 'SCS Software'];

const mods: Mod[] = [
    {
      id: 1,
      img: '/assets/KimDogLogo.png',
      title: "KimDog's Mod Pack",
      game: "ETS 2",
      version: "1.50",
      author: "KimDog",
      downloadCount: 0, // Static download count
      link: "/mods/ets2/kimdog-network-mod-pack",
    },
    {
      id: 2,
      img: '/assets/KimDogLogo.png',
      title: "KimDog's Logistics",
      game: "ETS 2",
      version: "1.50",
      author: "KimDog",
      downloadCount: 0, // Static download count
      link: "/mods/ets2/kimdog-logistics",
    },
    {
        id: 3,
        img: '/assets/Logos/ResourcePack.webp',
        title: "KimDog's Resource Pack",
        game: "Minecraft",
        version: "1.20.6",
        author: "KimDog",
        downloadCount: 0, // Static download count
        link: "/mods/minecraft/kimdog-resource-pack",
    },
    {
      id: 4,
      img: '/assets/Logos/ResourcePack.webp',
      title: "KimDog's Mod Pack",
      game: "Minecraft",
      version: "1.20.6",
      author: "KimDog",
      downloadCount: 0, // Static download count
      link: "/mods/minecraft/kimdog-mod-pack",
    },
];

const dlcs: DLC[] = [
  {
    id: 1,
    img: '/assets/DLC/ETS2.webp',
    title: "ETS 2 DLC",
    game: "ETS 2",
    version: "1.50",
    author: "SCS Software",
    downloadCount: 0, // Static download count
    link: "/dlcs/ets2",
  },
  {
    id: 2,
    img: '/assets/DLC/ATS.webp',
    title: "ATS DLC",
    game: "ATS",
    version: "1.50",
    author: "SCS Software",
    downloadCount: 0, // Static download count
    link: "/dlcs/ats",
  },
  // Add more DLCs as needed
];

export { mods, dlcs, verifiedAuthors };