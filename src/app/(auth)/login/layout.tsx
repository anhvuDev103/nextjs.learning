export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <header>Login Header</header>
      {children}
    </main>
  );
}
