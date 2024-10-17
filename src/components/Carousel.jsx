import Image from "next/image";


export default function Carousel() {
  return (
    <>
      <main className="flex justify-center items-start mt-5 h-screen">
        <Image
          src="/vingadores.jpg"
          width={600}
          height={600}
          className="rounded"
        />
      </main>
    </>
  );
}
