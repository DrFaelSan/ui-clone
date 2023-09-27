import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
