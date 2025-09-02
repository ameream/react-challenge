import React, { useEffect, useState } from "react";

interface SpeciesGroup {
  species: string;
  people: string[];
}

export default function PeopleBySpecies() {
  const [data, setData] = useState<SpeciesGroup[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000/api/people");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>TODO: Render collapsible species panels</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
