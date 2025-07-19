export interface Build {
  id?: string;
  playerName: string;
  position: string; // Novo campo
  playStyle: string; // Novo campo
  cost: number; // Novo campo
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
  createdAt?: Date;
}