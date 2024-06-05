import NavBar from "./components/_NavBar";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full xl:w-5/6 mx-auto px-4 xl:px-0">
      <NavBar />
      <About/>
    </main>
  );
}
