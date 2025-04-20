export interface MusicTrack {
  title: string;
  src_link: string;
}

export const musicTracks: MusicTrack[] = [
  {
    title: "Avicii - The Nights",
    src_link: "/music/Avicii - The Nights.mp3"
  },
  {
    title: "Lo-Fi Beats",
    src_link: "/music/lofi_beats.mp3"
  }
];

// Function to get a random track from the list
export function getRandomTrack(): MusicTrack {
  const randomIndex = Math.floor(Math.random() * musicTracks.length);
  return musicTracks[randomIndex];
} 