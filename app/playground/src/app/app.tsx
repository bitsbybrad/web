
import { Button } from "@web/gooey";
export function App() {
  return (
    <div className="gruvbox-dark">
    {/* <div className="min-h-screen bg-background text-primary p-8"> */}
      <Button onClick={() => {console.log("hehe")}}>Test</Button>
      {/* <h1 className="text-2xl font-bold mb-4">Tailwind + CSS Variables ✅</h1>
      <button className="bg-primary text-white px-4 py-2 rounded">
        Themed Primary Button
      </button> */}
    </div>
  );
}

export default App;
