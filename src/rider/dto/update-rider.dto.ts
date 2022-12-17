export class UpdateRiderDto {
  id: number;
  number?: string;
  firstname?: string;
  lastname?: string;
  birth_date?: Date;
  country?: string;
  height?: number;
  weight?: number;
  biography?: string;
  created_at?: Date;
  updated_at?: Date;
}
