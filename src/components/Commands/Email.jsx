/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Email() {
  useEffect(() => {
    setTimeout(() => {
      window.open("mailto:contact@tothefuture.dev", "_parent");
    }, 200);
  }, []);

  return <div className="text-white">contact@tothefuture.dev</div>;
}
