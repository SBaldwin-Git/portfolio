import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-8/12 mx-auto">
      <NavBar />
      <article>
        <h1 className="text-ivory font-bold text-[10rem] ">Hello World</h1>
      </article>
    </main>
  );
}
