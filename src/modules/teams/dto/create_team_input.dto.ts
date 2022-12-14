import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';

export class CreateTeamInput {
  @ApiProperty({
    description: 'The name of team. REGEX rule: /^[0-9a-zA-Z_-]{6,32}$/ .',
    maxLength: 32,
    example: 'manchester-city',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  @Matches(/^[0-9a-zA-Z_\-]{6,32}$/)
  name: string;

  @ApiProperty({
    maxLength: 32,
    example: 'Manchester City',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  displayName: string;

  // TODO: validate url
  @ApiProperty({
    maxLength: 255,
    example:
      'https://upload.wikimedia.org/wikipedia/vi/1/1d/Manchester_City_FC_logo.svg',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  iconImageUrl: string;
}
