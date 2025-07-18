export interface Build {
  id?: string; // Alterado para string opcional
  playerId: string; // Novo campo
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
  createdAt?: Date; // Novo campo
}

export interface Player {
  id?: string; // Alterado para string opcional
  name: string;
  position: string;
  playStyle: string;
  cost: number;
}