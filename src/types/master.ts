/* eslint-disable @typescript-eslint/no-explicit-any */
// src/entity-schema/master.ts

import { z } from 'zod';

// Master schema
export const createMasterSchema = z.object({
  code: z.string().min(1, "Code is required"),
  parentCode: z.string().optional(),
  isActive: z.boolean().default(true),
  name: z.string().min(1, "Name is required"),
  meta: z.record(z.any()).optional(),
  sequence: z.number().default(0),
});

export const updateMasterSchema = createMasterSchema.partial();

// TypeScript types inferred from the schema
export type CreateMasterDTO = z.infer<typeof createMasterSchema>;
export type UpdateMasterDTO = z.infer<typeof updateMasterSchema>;


export interface Master {
    _id: string;
    code: string;
    parentCode?: string;
    isActive: boolean;
    name: string;
    meta?: Record<string, any>;
    sequence: number;
  }