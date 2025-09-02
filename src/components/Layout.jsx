import AppBar from './AppBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <AppBar />
      <main className="flex-1 max-w-5xl mx-auto p-4 w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
