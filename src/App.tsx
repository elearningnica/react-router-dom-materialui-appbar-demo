import { Container } from "@mui/system";
import { Header } from "./Pages/Header";
import { Route, Routes } from "react-router-dom";
import { ClientPage } from "./Pages/ClientPage";
import { ProductPage } from "./Pages/ProductPage";
import { SettingsPage } from "./Pages/SettingsPage";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<ClientPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
