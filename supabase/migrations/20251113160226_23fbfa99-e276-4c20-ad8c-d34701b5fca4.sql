-- Add cidade column to jurado_cosplay_applications table
ALTER TABLE public.jurado_cosplay_applications 
ADD COLUMN cidade text NOT NULL DEFAULT 'Itaboraí';