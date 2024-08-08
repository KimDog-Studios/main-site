import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

// Gradient Circular Progress Component
function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}

// LoadingScreen Component
export default function LoadingScreen() {
  return (
    <Box
      className='fixed inset-0 flex items-center justify-center z-50'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        scale: '1.26',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent background
        borderRadius: '8px', // Optional: Add border radius
      }}
    >
      <Stack spacing={2} alignItems="center">
        <GradientCircularProgress />
        <div className='text-xl font-black text-white'>Loading...</div>
      </Stack>
    </Box>
  );
}

//Template Images Data
const ATSTruckTemplateImages = [
  // Trucks
  { name: '[Western Star 57X] Cabin A (72-inch Sleeper)', url: '/assets/templates/trucks/[Western Star 57X] Cabin A (72-inch Sleeper).png' },
  { name: '[Western Star 57X] Cabin B (Day Cab)', url: '/assets/templates/trucks/[Western Star 57X] Cabin B (Day Cab).png' },
  { name: '[Western Star 57X] Unreleased Cabin (48-inch Sleeper)', url: '/assets/templates/trucks/[Western Star 57X] Unreleased Cabin (48-inch Sleeper).png' },
  { name: '[Western Star 5700XE] Cabin C (Day Cab)', url: '/assets/templates/trucks/[Western Star 5700XE] Cabin C (Day Cab).png' },
  { name: '[Western Star 5700XE] Cabin A (82-inch Sleeper)', url: '/assets/templates/trucks/[Western Star 5700XE] Cabin A (82-inch Sleeper).png' },
  { name: '[Western Star 49X] Cabin B (48-inch Sleeper)', url: '/assets/templates/trucks/[Western Star 49X] Cabin B (48-inch Sleeper).png' },
  { name: '[Western Star 49X] Cabin C (Day Cab)', url: '/assets/templates/trucks/[Western Star 49X] Cabin C (Day Cab).png' },
  { name: '[Western Star 49X] Cabin A (72-inch Sleeper)', url: '/assets/templates/trucks/[Western Star 49X] Cabin A (72-inch Sleeper).png' },
  { name: '[Volvo VNL 2014] Cabin C (300, alt uvset)', url: '/assets/templates/trucks/[Volvo VNL 2014] Cabin C (300, alt uvset).png' },
  { name: '[Volvo VNL 2014] Cabin A (780, alt uvset)', url: '/assets/templates/trucks/[Volvo VNL 2014] Cabin A (780, alt uvset).png' },
  { name: '[Volvo VNL 2014] Cabin B (730, alt uvset)', url: '/assets/templates/trucks/[Volvo VNL 2014] Cabin B (730, alt uvset).png' },
  { name: '[Volvo VNL] Cabin C (300)', url: '/assets/templates/trucks/[Volvo VNL] Cabin C (300).png' },
  { name: '[Volvo VNL] Cabin A (860)', url: '/assets/templates/trucks/[Volvo VNL] Cabin A (860).png' },
  { name: '[Volvo VNL] Cabin B (740)', url: '/assets/templates/trucks/[Volvo VNL] Cabin B (740).png' },
  { name: '[Peterbilt 579] Cabin C (Duty Cabin, alt uvset)', url: '/assets/templates/trucks/[Peterbilt 579] Cabin C (Duty Cabin, alt uvset).png' },
  { name: '[Peterbilt 579] Cabin A (Hi Rise Sleeper, alt uvset)', url: '/assets/templates/trucks/[Peterbilt 579] Cabin A (Hi Rise Sleeper, alt uvset).png' },
  { name: '[Peterbilt 579] Cabin B (Stand Up Sleeper, alt uvset)', url: '/assets/templates/trucks/[Peterbilt 579] Cabin B (Stand Up Sleeper, alt uvset).png' },
  { name: '[Peterbilt 389] Cabin C (Day Cab, alt uvset)', url: '/assets/templates/trucks/[Peterbilt 389] Cabin C (Day Cab, alt uvset).png' },
  { name: '[Peterbilt 389] Cabin A (Ultra Cab Sleeper, alt uvset)', url: '/assets/templates/trucks/[Peterbilt 389] Cabin A (Ultra Cab Sleeper, alt uvset).png' },
  { name: '[Peterbilt 389] Cabin B (Low Roof Sleeper, alt uvset)', url: '/assets/templates/trucks/[Peterbilt 389] Cabin B (Low Roof Sleeper, alt uvset).png' },
  { name: '[Mack Anthem] Cabin A (70-inch Sleeper, alt uvset)', url: '/assets/templates/trucks/[Mack Anthem] Cabin A (70-inch Sleeper, alt uvset).png' },
  { name: '[Mack Anthem] Cabin B (48-inch Sleeper, alt uvset)', url: '/assets/templates/trucks/[Mack Anthem] Cabin B (48-inch Sleeper, alt uvset).png' },
  { name: '[Mack Anthem] Cabin C (Day Cab, alt uvset)', url: '/assets/templates/trucks/[Mack Anthem] Cabin C (Day Cab, alt uvset).png' },
  { name: '[Kenworth W900] Cabin C (Day Cab)', url: '/assets/templates/trucks/[Kenworth W900] Cabin C (Day Cab).png' },
  { name: '[Kenworth W900] Cabin A (86-inch Sleeper)', url: '/assets/templates/trucks/[Kenworth W900] Cabin A (86-inch Sleeper).png' },
  { name: '[Kenworth W900] Cabin B (72-inch Sleeper)', url: '/assets/templates/trucks/[Kenworth W900] Cabin B (72-inch Sleeper).png' },
  { name: '[Kenworth T680] Cabin B (Mid Roof Sleeper, alt uvset)', url: '/assets/templates/trucks/[Kenworth T680] Cabin B (Mid Roof Sleeper, alt uvset).png' },
  { name: '[Kenworth T680] Cabin C (Duty Day Cabin, alt uvset)', url: '/assets/templates/trucks/[Kenworth T680] Cabin C (Duty Day Cabin, alt uvset).png' },
  { name: '[Kenworth T680] Cabin A (Hi Rise Sleeper, alt uvset)', url: '/assets/templates/trucks/[Kenworth T680] Cabin A (Hi Rise Sleeper, alt uvset).png' },
  { name: '[International LT] Cabin C (Day Cab)', url: '/assets/templates/trucks/[International LT] Cabin C (Day Cab).png' },
  { name: '[International LT] Cabin A (Skyrise Sleeper)', url: '/assets/templates/trucks/[International LT] Cabin A (Skyrise Sleeper).png' },
  { name: '[International LT] Cabin B (Hi-Rise Sleeper)', url: '/assets/templates/trucks/[International LT] Cabin B (Hi-Rise Sleeper).png' },
  { name: '[International LoneStar] Cabin B (High Rise Sleeper)', url: '/assets/templates/trucks/[International LoneStar] Cabin B (High Rise Sleeper).png' },
  { name: '[International LoneStar] Cabin C (Day Cab)', url: '/assets/templates/trucks/[International LoneStar] Cabin C (Day Cab).png' },
  { name: '[International LoneStar] Cabin A (Sky Rise Sleeper)', url: '/assets/templates/trucks/[International LoneStar] Cabin A (Sky Rise Sleeper).png' },
  { name: '[International 9900i] Cabin C (Day Cab)', url: '/assets/templates/trucks/[International 9900i] Cabin C (Day Cab).png' },
  { name: '[International 9900i] Cabin A (72-inch Sleeper)', url: '/assets/templates/trucks/[International 9900i] Cabin A (72-inch Sleeper).png' },
  { name: '[International 9900i] Cabin B (51-inch Sleeper)', url: '/assets/templates/trucks/[International 9900i] Cabin B (51-inch Sleeper).png' },
  { name: '[Freightliner Cascadia] Cabin D (Day Cab)', url: '/assets/templates/trucks/[Freightliner Cascadia] Cabin D (Day Cab).png' },
  { name: '[Freightliner Cascadia] Cabin A (72-inch Sleeper RR)', url: '/assets/templates/trucks/[Freightliner Cascadia] Cabin A (72-inch Sleeper RR).png' },
  { name: '[Freightliner Cascadia] Cabin B (72-inch Sleeper XT)', url: '/assets/templates/trucks/[Freightliner Cascadia] Cabin B (72-inch Sleeper XT).png' },
  { name: '[Freightliner Cascadia] Cabin C (48-inch Sleeper)', url: '/assets/templates/trucks/[Freightliner Cascadia] Cabin C (48-inch Sleeper).png' },
];

const ATSTrailerTemplateImages = [
  // Trailers
  { name: '[SCS Grain Hopper] Trailer Rear', url: '/assets/templates/trailers/[SCS Grain Hopper] Trailer Rear.png' },
  { name: '[SCS Grain Hopper] Body (28 feet)', url: '/assets/templates/trailers/[SCS Grain Hopper] Body (28 feet).png' },
  { name: '[SCS Grain Hopper] Body (40 feet)', url: '/assets/templates/trailers/[SCS Grain Hopper] Body (40 feet).png' },
  { name: '[SCS Grain Hopper] Body (50 feet)', url: '/assets/templates/trailers/[SCS Grain Hopper] Body (50 feet).png' },
  { name: '[SCS Grain Hopper] Body (43 feet)', url: '/assets/templates/trailers/[SCS Grain Hopper] Body (43 feet).png' },
  { name: '[SCS Grain Hopper] Body (53 feet)', url: '/assets/templates/trailers/[SCS Grain Hopper] Body (53 feet).png' },
  { name: '[SCS Dumper 3 Axle] Body (28 feet)', url: '/assets/templates/trailers/[SCS Dumper 3 Axle] Body (28 feet).png' },
  { name: '[SCS Dumper 3 Axle] Body (45 feet)', url: '/assets/templates/trailers/[SCS Dumper 3 Axle] Body (45 feet).png' },
  { name: '[SCS Dumper 3 Axle] Body (50 feet)', url: '/assets/templates/trailers/[SCS Dumper 3 Axle] Body (50 feet).png' },
  { name: '[SCS Dumper 3 Axle] Body (60 feet)', url: '/assets/templates/trailers/[SCS Dumper 3 Axle] Body (60 feet).png' },
  { name: '[SCS Dumper 2 Axle] Body (28 feet)', url: '/assets/templates/trailers/[SCS Dumper 2 Axle] Body (28 feet).png' },
  { name: '[SCS Dumper 2 Axle] Body (45 feet)', url: '/assets/templates/trailers/[SCS Dumper 2 Axle] Body (45 feet).png' },
  { name: '[SCS Dumper 2 Axle] Body (50 feet)', url: '/assets/templates/trailers/[SCS Dumper 2 Axle] Body (50 feet).png' },
  { name: '[SCS Dumper 2 Axle] Body (60 feet)', url: '/assets/templates/trailers/[SCS Dumper 2 Axle] Body (60 feet).png' },
  { name: '[SCS Flatbed 53 feet] Trailer Rear', url: '/assets/templates/trailers/[SCS Flatbed 53 feet] Trailer Rear.png' },
  { name: '[SCS Dry Van 53 feet] Trailer Rear', url: '/assets/templates/trailers/[SCS Dry Van 53 feet] Trailer Rear.png' },
  { name: '[SCS Dry Van 53 feet] Trailer Side', url: '/assets/templates/trailers/[SCS Dry Van 53 feet] Trailer Side.png' },
  { name: '[SCS Dry Van 53 feet] Trailer Top', url: '/assets/templates/trailers/[SCS Dry Van 53 feet] Trailer Top.png' },
  { name: '[SCS Dry Van 53 feet] Trailer Side Rear', url: '/assets/templates/trailers/[SCS Dry Van 53 feet] Trailer Side Rear.png' },
  { name: '[SCS Container 53 feet] Trailer Rear', url: '/assets/templates/trailers/[SCS Container 53 feet] Trailer Rear.png' },
  { name: '[SCS Container 53 feet] Trailer Side', url: '/assets/templates/trailers/[SCS Container 53 feet] Trailer Side.png' },
  { name: '[SCS Container 53 feet] Trailer Top', url: '/assets/templates/trailers/[SCS Container 53 feet] Trailer Top.png' },
  { name: '[SCS Container 53 feet] Trailer Side Rear', url: '/assets/templates/trailers/[SCS Container 53 feet] Trailer Side Rear.png' },
  { name: '[SCS Lowboy 55L] Trailer Rear', url: '/assets/templates/trailers/[SCS Lowboy 55L] Trailer Rear.png' },
  { name: '[SCS Lowboy 55L] Trailer Side', url: '/assets/templates/trailers/[SCS Lowboy 55L] Trailer Side.png' },
  { name: '[SCS Lowboy 55L] Trailer Top', url: '/assets/templates/trailers/[SCS Lowboy 55L] Trailer Top.png' },
  { name: '[SCS Lowboy 55L] Trailer Side Rear', url: '/assets/templates/trailers/[SCS Lowboy 55L] Trailer Side Rear.png' },
  { name: '[SCS Lowboy 55L] Trailer Front', url: '/assets/templates/trailers/[SCS Lowboy 55L] Trailer Front.png' },
  { name: '[SCS Reefer 53 feet] Trailer Rear', url: '/assets/templates/trailers/[SCS Reefer 53 feet] Trailer Rear.png' },
  { name: '[SCS Reefer 53 feet] Trailer Side', url: '/assets/templates/trailers/[SCS Reefer 53 feet] Trailer Side.png' },
  { name: '[SCS Reefer 53 feet] Trailer Top', url: '/assets/templates/trailers/[SCS Reefer 53 feet] Trailer Top.png' },
  { name: '[SCS Reefer 53 feet] Trailer Side Rear', url: '/assets/templates/trailers/[SCS Reefer 53 feet] Trailer Side Rear.png' },
  { name: '[SCS Insulated 53 feet] Trailer Rear', url: '/assets/templates/trailers/[SCS Insulated 53 feet] Trailer Rear.png' },
  { name: '[SCS Insulated 53 feet] Trailer Side', url: '/assets/templates/trailers/[SCS Insulated 53 feet] Trailer Side.png' },
  { name: '[SCS Insulated 53 feet] Trailer Top', url: '/assets/templates/trailers/[SCS Insulated 53 feet] Trailer Top.png' },
  { name: '[SCS Insulated 53 feet] Trailer Side Rear', url: '/assets/templates/trailers/[SCS Insulated 53 feet] Trailer Side Rear.png' },
];

//Mods and DLC Data
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
     {
      id: 4,
      img: '/assets/Logos/ResourcePack.webp',
      title: "KimDog's Mod Pack",
      game: "ATS",
      version: "1.50",
      author: "KimDog",
      downloadCount: 0, // Static download count
      link: "/mods/ats/kimdog-mod-pack",
    },
];

const dlcs: DLC[] = [
  {
    id: 1,
    img: '/assets/Logos/ETS2.jpeg',
    title: "ETS 2 DLC",
    game: "ETS 2",
    version: "1.50",
    author: "SCS Software",
    downloadCount: 0, // Static download count
    link: "/dlcs/ets2",
  },
  {
    id: 2,
    img: '/assets/Logos/ATS.webp',
    title: "ATS DLC",
    game: "ATS",
    version: "1.50",
    author: "SCS Software",
    downloadCount: 0, // Static download count
    link: "/dlcs/ats",
  },
  // Add more DLCs as needed
];

export { ATSTruckTemplateImages, ATSTrailerTemplateImages, mods, dlcs, verifiedAuthors };