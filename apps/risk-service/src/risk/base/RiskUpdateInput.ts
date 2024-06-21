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
import { RiskAssessmentWhereUniqueInput } from "../../riskAssessment/base/RiskAssessmentWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RiskUpdateInput {
  @ApiProperty({
    required: false,
    type: () => RiskAssessmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RiskAssessmentWhereUniqueInput)
  @IsOptional()
  @Field(() => RiskAssessmentWhereUniqueInput, {
    nullable: true,
  })
  assessmentId?: RiskAssessmentWhereUniqueInput | null;
}

export { RiskUpdateInput as RiskUpdateInput };