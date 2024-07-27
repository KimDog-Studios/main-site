import { modsData, CategorySection } from "@/components/[API]Mods";


// Page component
const Page: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-8 text-white">This will be the New Home Page</h1>
        {Object.entries(modsData).map(([category, mods]) => (
          <CategorySection key={category} title={category} mods={mods} />
        ))}
      </main>
    </div>
  );
};

export default Page;
