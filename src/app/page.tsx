import NavBar from "./components/_NavBar";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-3/4 mx-auto">
      <NavBar />
      <About/>
    </main>
  );
}
