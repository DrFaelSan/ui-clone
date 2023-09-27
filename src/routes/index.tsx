import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Spotify/components/Layout";
import Home from "../Spotify/pages/Home";
import LayoutNubank from "../Nubank/components/Layout";
import HomeNubank from "../Nubank/pages/Home";
import Menu from "../Menu";

export default function AppRouters() {
  const Spotify = () => {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  };

  const Nubank = () => {
    return (
      <LayoutNubank>
        <HomeNubank />
      </LayoutNubank>
    );
  };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Spotify />} />
        <Route path="/nubank" element={<Nubank />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
