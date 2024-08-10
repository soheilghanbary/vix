import { useEffect, useState } from "react";

const getHello = () => fetch("/api/hello").then((res) => res.json());

export function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getHello().then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>About Page is Here</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>loading data...</p>
      )}
    </div>
  );
}
