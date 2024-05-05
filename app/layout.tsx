"use client"

import "../styles/globals.css";
import Header from "@/components/Header";
import {useEffect, useState} from "react";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/shared/Loader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
  return (
      <html lang="en">
      <body suppressHydrationWarning={true}>
      <div className="dark:bg-boxdark-2 dark:text-bodydark overflow-hidden">
          {loading ? (
              <Loader/>
          ) : (
              <div className="flex h-screen overflow-hidden w-full">
                  {/* <!-- ===== Sidebar Start ===== --> */}
                      <Sidebar
                          sidebarOpen={sidebarOpen}
                          setSidebarOpen={setSidebarOpen}
                      />
                  {/* <!-- ===== Sidebar End ===== --> */}

                  {/* <!-- ===== Content Area Start ===== --> */}
                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                      {/* <!-- ===== Header Start ===== --> */}
                          <Header
                              sidebarOpen={sidebarOpen}
                              setSidebarOpen={setSidebarOpen}
                          />
                      {/* <!-- ===== Header End ===== --> */}

                      {/* <!-- ===== Main Content Start ===== --> */}
                      <main className="ml-70">
                          <div className="mx-auto max-w-screen-2xl">
                              {children}
                          </div>
                      </main>
                      {/* <!-- ===== Main Content End ===== --> */}
                  </div>
                  {/* <!-- ===== Content Area End ===== --> */}
              </div>
          )}
      </div>
      </body>
      </html>
  );
}
