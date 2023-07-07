import Tool from "../islands/Tool.tsx";
export default function Home() {
  return (
    <>
    {
      (() => {
        if (!sessionStorage) {
          return <Tool />
        }
      })()
    }
    </>
  );
}
