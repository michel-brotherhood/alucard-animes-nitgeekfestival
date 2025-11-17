--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: jurado_cosplay_applications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.jurado_cosplay_applications (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nome_completo text NOT NULL,
    idade integer NOT NULL,
    email text NOT NULL,
    whatsapp text NOT NULL,
    concursos_ganhos text NOT NULL,
    eventos_juri text NOT NULL,
    foto_juri_urls text[] DEFAULT '{}'::text[] NOT NULL,
    seguidores_count text NOT NULL,
    video_url text,
    status text DEFAULT 'pending'::text NOT NULL,
    pontuacao integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    cidade text DEFAULT 'Itaboraí'::text NOT NULL
);


--
-- Name: jurado_cosplay_applications jurado_cosplay_applications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.jurado_cosplay_applications
    ADD CONSTRAINT jurado_cosplay_applications_pkey PRIMARY KEY (id);


--
-- Name: jurado_cosplay_applications update_jurado_applications_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_jurado_applications_updated_at BEFORE UPDATE ON public.jurado_cosplay_applications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: jurado_cosplay_applications Anyone can insert applications; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can insert applications" ON public.jurado_cosplay_applications FOR INSERT WITH CHECK (true);


--
-- Name: jurado_cosplay_applications Users can view their own applications; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own applications" ON public.jurado_cosplay_applications FOR SELECT USING ((email = (auth.jwt() ->> 'email'::text)));


--
-- Name: jurado_cosplay_applications; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.jurado_cosplay_applications ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


