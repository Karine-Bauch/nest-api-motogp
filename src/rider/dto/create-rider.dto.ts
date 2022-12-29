export class CreateRiderDto {
  number: string;
  firstname: string;
  lastname: string;
  birth_date?: Date;
  country: string;
  height: number;
  weight: number;
  biography: string;
}
