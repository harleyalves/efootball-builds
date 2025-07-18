export interface Build {
  id: number;
  playerName: string;
  name?: string;
  shooting: number;
  passing: number;
  dribbling: number;
  dexterity: number;
  lowerBodyStrength: number;
  aerialStrength: number;
  defending: number;
  gk1: number;
  gk2: number;
  gk3: number;
  upvotes: number;
  imageUrl?: string;
  trainingDetails?: string;
}

export interface Player {
  id: number;
  name: string;
  position: string;
  playStyle: string;
  cost: number;
  builds?: Build[];
}