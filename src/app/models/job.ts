import { User } from './user';

type statusCode = 'Ativo' | 'Inativo';

type recurrence = 'Intervalo' | 'Horário fixo';

export interface Job {
  id: string;
  createdAt: string;
  jobName: string;
  user: User;
  statusCode: statusCode;
  recurrence: recurrence;
}
