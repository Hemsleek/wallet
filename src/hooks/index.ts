/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export const useMenuClickAway = (
  dataSetName: string,
  menuState: boolean,
  setMenuState: (state: boolean) => void
) => {
  const menuRef = useRef<any>(null);

  useEffect(() => {
    const handleMenuClickAway = (event: any) => {
      if (!menuState) return null;
      if (event.target.dataset.name === dataSetName) return null;

      if (menuRef.current && !menuRef.current.contains(event.target))
        setMenuState(false);
    };

    document.addEventListener("mousedown", handleMenuClickAway);

    return () => {
      document.removeEventListener("mousedown", handleMenuClickAway);
    };
  }, [dataSetName, menuState, setMenuState]);

  return {
    menuRef,
  };
};
