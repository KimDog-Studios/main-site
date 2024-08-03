import { modsData, CategorySection } from "@/components/[API]Mods";
import NavBar from "@/components/[UI]NavBar";
import BreadcrumbsComponent from "@/components/[UI]Breadcrumbs";
import NewTypingEffectHome from "@/components/HomePage/NewTypingEffect"

// Page component
const Page: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black">
        <NewTypingEffectHome />
        <NavBar />
      <main className="flex flex-col items-center justify-start min-h-screen text-center">
        {Object.entries(modsData).map(([category, mods]) => (
          <CategorySection key={category} title={category} mods={mods} />
        ))}
      </main>
    </div>
  );
};

export default Page;