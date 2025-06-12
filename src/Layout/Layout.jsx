

function Layout({ children }) {
  return (
    <>

      <div className="min-h-[80vh] flex items-start justify-center">
        <div className="w-11/12 sm:w-9/12">{children}</div>
      </div>
    </>
  );
}

export default Layout;
