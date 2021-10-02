import Footer from "./footer";
import Header from "./Header";
import Navbar from "./navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
         <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans&display=swap"
         rel="stylesheet" />
      </Head>
      <div className="container">
        <Header />
        <Navbar />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
