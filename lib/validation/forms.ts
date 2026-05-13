import { z } from 'zod';

export const workshopFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  institution: z.string().min(2, 'Institution is required'),
  email: z.string().email('Invalid email'),
  country: z.string().min(2, 'Country is required'),
  eventType: z.string().min(2, 'Event type is required'),
  eventDate: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const speakerFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().min(2, 'Company/Event is required'),
  email: z.string().email('Invalid email'),
  format: z.enum(['virtual', 'inPerson', 'hybrid']),
  audience: z.string().min(1, 'Audience size is required'),
  topic: z.string().min(5, 'Topic is required'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const collaborationFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  brand: z.string().min(2, 'Brand/Company is required'),
  email: z.string().email('Invalid email'),
  type: z.enum(['sponsored', 'ambassador', 'event', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type WorkshopFormData = z.infer<typeof workshopFormSchema>;
export type SpeakerFormData = z.infer<typeof speakerFormSchema>;
export type CollaborationFormData = z.infer<typeof collaborationFormSchema>;
