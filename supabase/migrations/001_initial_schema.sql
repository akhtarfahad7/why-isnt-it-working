-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Problems table
CREATE TABLE problems (
  id TEXT PRIMARY KEY,
  category_id TEXT NOT NULL REFERENCES categories(id),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  symptoms TEXT[] NOT NULL DEFAULT '{}',
  safety_level TEXT NOT NULL CHECK (safety_level IN ('SAFE', 'CAUTION', 'HIGH', 'STOP')),
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Diagnostic nodes table
CREATE TABLE diagnostic_nodes (
  id TEXT PRIMARY KEY,
  problem_id TEXT NOT NULL REFERENCES problems(id),
  question TEXT NOT NULL,
  safety_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Diagnostic answers table
CREATE TABLE diagnostic_answers (
  id TEXT PRIMARY KEY,
  node_id TEXT NOT NULL REFERENCES diagnostic_nodes(id),
  text TEXT NOT NULL,
  next_node_id TEXT REFERENCES diagnostic_nodes(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Causes table
CREATE TABLE causes (
  id TEXT PRIMARY KEY,
  problem_id TEXT NOT NULL REFERENCES problems(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  safety_level TEXT NOT NULL CHECK (safety_level IN ('SAFE', 'CAUTION', 'HIGH', 'STOP')),
  recommendation TEXT NOT NULL,
  professional_help BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cause scores table (links answers to causes with point values)
CREATE TABLE cause_scores (
  id TEXT PRIMARY KEY,
  answer_id TEXT NOT NULL REFERENCES diagnostic_answers(id),
  cause_id TEXT NOT NULL REFERENCES causes(id),
  points INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Diagnoses table (stores user diagnostic sessions)
CREATE TABLE diagnoses (
  id TEXT PRIMARY KEY,
  problem_id TEXT NOT NULL REFERENCES problems(id),
  session_id TEXT NOT NULL,
  answers TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Diagnosis results table
CREATE TABLE diagnosis_results (
  id TEXT PRIMARY KEY,
  diagnosis_id TEXT NOT NULL REFERENCES diagnoses(id),
  cause_id TEXT NOT NULL REFERENCES causes(id),
  score INTEGER NOT NULL,
  classification TEXT NOT NULL CHECK (classification IN ('most_likely', 'possible', 'less_likely')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics events table
CREATE TABLE analytics_events (
  id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_problems_category ON problems(category_id);
CREATE INDEX idx_problems_slug ON problems(slug);
CREATE INDEX idx_diagnostic_nodes_problem ON diagnostic_nodes(problem_id);
CREATE INDEX idx_diagnostic_answers_node ON diagnostic_answers(node_id);
CREATE INDEX idx_causes_problem ON causes(problem_id);
CREATE INDEX idx_cause_scores_answer ON cause_scores(answer_id);
CREATE INDEX idx_cause_scores_cause ON cause_scores(cause_id);
CREATE INDEX idx_diagnoses_problem ON diagnoses(problem_id);
CREATE INDEX idx_diagnoses_session ON diagnoses(session_id);
CREATE INDEX idx_diagnosis_results_diagnosis ON diagnosis_results(diagnosis_id);
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created ON analytics_events(created_at);

-- Diagnostic cache table (for AI-generated trees)
CREATE TABLE diagnostic_cache (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  cache_key TEXT NOT NULL UNIQUE,
  query TEXT NOT NULL,
  problem JSONB NOT NULL,
  nodes JSONB NOT NULL,
  causes JSONB NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_diagnostic_cache_key ON diagnostic_cache(cache_key);
CREATE INDEX idx_diagnostic_cache_expires ON diagnostic_cache(expires_at);
