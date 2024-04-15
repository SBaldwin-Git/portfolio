import NavBar from "./components/NavBar";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-1/2 mx-auto mt-4">
      <NavBar />
      <About/>
    </main>
  );
}
