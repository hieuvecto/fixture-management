import { IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';

export class GetTeamParamsInput {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  @Matches(/^[0-9a-zA-Z_\-]{6,32}$/)
  name: string;
}
