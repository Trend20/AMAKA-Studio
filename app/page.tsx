import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "AMAKA Studio",
    description: "AMAKA Studio",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AMAKA Studio</h1>
    </main>
  );
}
