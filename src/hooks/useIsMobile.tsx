import React, { useContext, useEffect, useState } from "react";
import { BREAKPOINTS } from "../design-system/StyledComponentsThemeProvider /breakpoints";

const ResizeDetectorContext = React.createContext<{
  isMobile: boolean;
} | null>(null);

export const ResizeDetectorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= BREAKPOINTS.TABLET
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINTS.TABLET);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResizeDetectorContext.Provider value={{ isMobile }}>
      {children}
    </ResizeDetectorContext.Provider>
  );
};

export const useIsMobile = () =>
  useContext(ResizeDetectorContext)?.isMobile || false;
