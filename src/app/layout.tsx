import ReactLenis, { useLenis } from "@studio-freight/react-lenis/types";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis>
      <body>{children}</body>
    </ReactLenis>
  );
}
