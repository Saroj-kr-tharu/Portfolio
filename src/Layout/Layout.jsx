

function Layout({ children }) {
  return (
    <>
      <div className="min-h-[80vh] flex items-start justify-center  dark:bg-neutral-800" >
        <div className="w-full sm:w-9/12 ">{children}</div>
      </div>
    </>
  );
}

export default Layout;
