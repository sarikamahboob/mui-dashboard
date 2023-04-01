import { ProSidebarProvider } from "react-pro-sidebar";
import MainLayout from "./layout/MainLayout";
import MainTheme from "./theme/index";

function App() {
  return (
    <MainTheme>
      <ProSidebarProvider>
        <MainLayout />
      </ProSidebarProvider>
    </MainTheme>
  );
}

export default App;
