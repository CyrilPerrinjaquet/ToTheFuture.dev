import { useEffect, useState } from "react";

export default function Exit() {
  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    const timer =
      countDown > 0 &&
      setInterval(() => setCountDown((prevState) => prevState - 1), 1000);

    if (countDown < 1) {
      window.close();
    }

    return () => clearInterval(timer);
  }, [countDown]);

  return (
    <div className="dark:text-white text-black">
      <div>
        Shutting down in <span className="text-red-600">{countDown}</span>...
      </div>
    </div>
  );
}
