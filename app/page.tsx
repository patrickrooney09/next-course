"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import coffee from "@/public/images/Cappuccino_at_Sightglass_Coffee.jpg";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [visible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {visible && <HeavyComponent />}
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        sizes="(max-width 480px) 100vw, (max-width 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
