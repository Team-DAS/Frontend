import Sidebar from "@/modules/candidate/components/sidebar";
import Navbar from "@/shared/layout/Navbar";

export default function CandidateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {/* Contenedor con márgenes izquierda y derecha */}
      <div className="container mx-auto px-10 flex">
  <Sidebar />
  <main className="flex-1 p-6">{children}</main>
</div>

    </div>
  );
}
