/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Risk as PrismaRisk,
  RiskAssessment as PrismaRiskAssessment,
} from "@prisma/client";

export class RiskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RiskCountArgs, "select">): Promise<number> {
    return this.prisma.risk.count(args);
  }

  async risks(args: Prisma.RiskFindManyArgs): Promise<PrismaRisk[]> {
    return this.prisma.risk.findMany(args);
  }
  async risk(args: Prisma.RiskFindUniqueArgs): Promise<PrismaRisk | null> {
    return this.prisma.risk.findUnique(args);
  }
  async createRisk(args: Prisma.RiskCreateArgs): Promise<PrismaRisk> {
    return this.prisma.risk.create(args);
  }
  async updateRisk(args: Prisma.RiskUpdateArgs): Promise<PrismaRisk> {
    return this.prisma.risk.update(args);
  }
  async deleteRisk(args: Prisma.RiskDeleteArgs): Promise<PrismaRisk> {
    return this.prisma.risk.delete(args);
  }

  async getAssessmentId(
    parentId: string
  ): Promise<PrismaRiskAssessment | null> {
    return this.prisma.risk
      .findUnique({
        where: { id: parentId },
      })
      .assessmentId();
  }
}