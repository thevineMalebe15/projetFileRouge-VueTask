
export type Priority = 'Moyenne' | 'Elevé' | 'Urgent';
export type FilterStatus = 'Toutes' | 'Terminées' | 'Non Terminées';

export interface Task {
  id: number;
  titre: string;
  description: string;
  completed : boolean;
  priorite: Priority;
  terminee: boolean;
  createdAt: Date;
}