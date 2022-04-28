import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    props.header.current.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return null;
}
