import { Paper } from "@mantine/core";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Paper p={20}>
        <Navbar />
        <Home />
      </Paper>
        <Footer />
    </>
  );
}

export default App;
