import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <header>Auth Header</header>
      <div>
        <Link href="/">Home</Link>
      </div>
      {children}
    </main>
  );
}
