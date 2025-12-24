import { useEffect } from "react";
export const useDynamicTitle = (title = "") => {
  useEffect(() => {
    document.title = title ? "VaultCheck | " + title : "VaultCheck";
  }, [title]);
};
