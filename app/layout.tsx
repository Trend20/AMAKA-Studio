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
                  {/* <!-- ===== sidebar ===== --> */}
                      <Sidebar
                          sidebarOpen={sidebarOpen}
                          setSidebarOpen={setSidebarOpen}
                      />
                  {/* <!-- =====end  sidebar ===== --> */}

                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                      {/* <!-- ===== header ===== --> */}
                          <Header
                              sidebarOpen={sidebarOpen}
                              setSidebarOpen={setSidebarOpen}
                          />
                      {/* <!-- ===== end header ===== --> */}

                      {/* <!-- ===== Main Content Start ===== --> */}
                      <main className="lg:ml-70 min-h-screen">
                          <div className="mx-auto max-w-screen-2xl">
                              {children}
                          </div>
                      </main>
                      {/* <!-- ===== Main Content End ===== --> */}
                  </div>
              </div>
          )}
      </div>
      </body>
      </html>
  );
}
