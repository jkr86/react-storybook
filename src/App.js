import HomeBg from "./assets/search/Desktop.png";
import "./App.css";
import CustomSearch from "./components/custom-search";

function App() {
  return (
    <div className="h-screen w-full relative">
      <img src={HomeBg} className="absolute brightness-75 inset-0 w-full h-full object-cover object-top z-0" alt="decorative background" />
      <div className="w-full flex justify-end relative z-10">
        <CustomSearch />
      </div>
    </div>
  );
}

export default App;
