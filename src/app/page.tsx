import NavBar from "./components/_NavBar";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full lg:w-4/5 mx-auto px-4 sm:px-0">
      <NavBar />
      <About/>
    </main>
  );
}
