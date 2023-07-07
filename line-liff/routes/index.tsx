import Tool from "../islands/tool.tsx";
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
