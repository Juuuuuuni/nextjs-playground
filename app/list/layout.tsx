export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h4>This is ListLayout</h4>
      {children}
    </div>
  );
}
