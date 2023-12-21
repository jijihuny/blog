import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode
};

function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col items-center">
        {/* <Alert preview={preview} /> */}
        <Header menuList={['development', 'life', 'about']} />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
