import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import NotfoundPage from "./pages/NotfoundPage";
import { ToastProvider } from "./components/ui/toast";
import './App.css'
import { useState } from "react";
import Shop from "./pages/Shop";


function App() {

  // eslint-disable-next-line no-unused-vars
  const [themeupdate, setThemeUpdate] = useState();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" setThemeUpdate={setThemeUpdate}>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/:slug" exact element={<Shop />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ToastProvider>
    </ThemeProvider>
    </>
  )
}

export default App
