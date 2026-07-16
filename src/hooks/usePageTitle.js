import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} | Tom Stephen` : "Tom Stephen";
    return () => {
      document.title = previous;
    };
  }, [title]);
}
