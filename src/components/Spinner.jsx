import { useEffect, useState } from "react";

export const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    return () => {
      setLoading(true);
    };
  }, []);

  return (
    loading && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 10 }).map((_, index) => {
          return <div key={index} className="animate-pulse h-96 w-full rounded-2xl bg-neutral-800" />;
        })}
      </div>
    )
  );
};
