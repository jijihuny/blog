import Alert from './alert';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  preview?: boolean
  children: React.ReactNode
};

function Layout({ preview, children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen px-5 flex flex-col items-center">
        {/* <Alert preview={preview} /> */}
        <Header />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
