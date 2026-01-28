import SBBUhr from "./components/SBBUhr";

export default function App() {
  return (
    <main
      style={{ display: "grid", placeItems: "center", minHeight: "100dvh" }}
    >
      <SBBUhr
        style={{ width: 200, height: 200 }}
        // Or use className="w-80 h-80 my-clock-class"
      />
    </main>
  );
}
