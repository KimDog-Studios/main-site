const verifiedAuthors = ['KimDog'];

const mods = [
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
        title: "Resource Pack",
        game: "Minecraft",
        version: "1.20.6",
        author: "KimDog",
        downloadCount: 0, // Static download count
        link: "/mods/minecraft/kimdog-resource-pack",
      },
    // Add more mods here
];
  
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

export {mods, verifiedAuthors};