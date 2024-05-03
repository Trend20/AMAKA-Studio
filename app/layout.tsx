"use client"

import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
              <Loader/>
          ) : (
              <div className="flex h-screen overflow-hidden">
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
                      <main>
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
