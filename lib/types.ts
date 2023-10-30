export type VideoInfo = {
  video: string[];
  music: string[];
  cover: string[];
  OriginalWatermarkedVideo: string[] | null;
  description: string[];
  dynamic_cover: string[];
  author: string[];
  region: string[];
  avatar_thumb: string[];
  custom_verify: string[];
  videoid: string[];
  post_type: string;
  images: string[] | null;
}

export type FAQ = {
  question: string;
  answer: React.ReactNode;
}
