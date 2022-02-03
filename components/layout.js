import Alert from "../components/alert";
import SynthetixFooter from "./SynthetixFooter";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <SynthetixFooter />
    </>
  );
}
