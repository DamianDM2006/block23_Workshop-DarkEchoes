import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  // const EpisodeDetails () => {
  //   if (!selectedEpisode) {
  //     return (
  //       <section className="details">
  //         <h2>Episode Synopsis</h2>
  //         <p>Select an episode to learn more.</p>
  //       </section>
  //     );
  //   }
  //   return (
  //     <section className="details">
  //       <h2>{selectedEpisode.id}</h2>
  //       <h3>{selectedEpisode.title}</h3>
  //     </section>
  //   )
  // }

  const LineUp = () => {
    return (
      <section className="line">
        <h2>Dark Echoes</h2>
        
      </section>
    )
  }
}
