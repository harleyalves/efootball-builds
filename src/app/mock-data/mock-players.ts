import { Player } from '../models/player.model';

export const MOCK_PLAYERS: Player[] = [
  {
    id: 1,
    name: 'Schmeichel',
    position: 'Goleiro',
    playStyle: 'Defensivo',
    cost: 4,
    builds: [
      {
        id: 101,
        playerName: 'Schmeichel',
        shooting: 0,
        passing: 1,
        dribbling: 0,
        dexterity: 0,
        lowerBodyStrength: 0,
        aerialStrength: 4,
        defending: 0,
        gk1: 12,
        gk2: 9,
        gk3: 8,
        upvotes: 24,
        imageUrl: 'assets/schmeichel.jpg',
        trainingDetails: 'Treino focado em reflexos e defesas aéreas'
      }
    ]
  },
  {
    id: 2,
    name: 'Thuram',
    position: 'Defensor',
    playStyle: 'Construtor',
    cost: 8,
    builds: [
      {
        id: 201,
        playerName: 'Thuram',
        shooting: 0,
        passing: 5,
        dribbling: 4,
        dexterity: 9,
        lowerBodyStrength: 9,
        aerialStrength: 8,
        defending: 9,
        gk1: 1,
        gk2: 0,
        gk3: 0,
        upvotes: 32,
        imageUrl: 'assets/thuram.jpg',
        trainingDetails: 'Desenvolvimento de força e passes longos'
      }
    ]
  }
];