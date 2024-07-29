SELECT 'CREATE DATABASE ideas_db' 
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'ideas_db')\gexec