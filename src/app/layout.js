import "./globals.css";
import NavBar from "./NavBar";

export const metadata = {
  title: "TJ Sohn - Developer & Problem Solver",
  description: "Personal portfolio site of TJ Sohn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        <main style={{ marginTop: "75px" }}>{children}</main>
      </body>
    </html>
  );
}
