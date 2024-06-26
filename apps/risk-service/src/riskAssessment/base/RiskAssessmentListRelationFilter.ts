/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RiskAssessmentWhereInput } from "./RiskAssessmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RiskAssessmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RiskAssessmentWhereInput,
  })
  @ValidateNested()
  @Type(() => RiskAssessmentWhereInput)
  @IsOptional()
  @Field(() => RiskAssessmentWhereInput, {
    nullable: true,
  })
  every?: RiskAssessmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => RiskAssessmentWhereInput,
  })
  @ValidateNested()
  @Type(() => RiskAssessmentWhereInput)
  @IsOptional()
  @Field(() => RiskAssessmentWhereInput, {
    nullable: true,
  })
  some?: RiskAssessmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => RiskAssessmentWhereInput,
  })
  @ValidateNested()
  @Type(() => RiskAssessmentWhereInput)
  @IsOptional()
  @Field(() => RiskAssessmentWhereInput, {
    nullable: true,
  })
  none?: RiskAssessmentWhereInput;
}
export { RiskAssessmentListRelationFilter as RiskAssessmentListRelationFilter };
