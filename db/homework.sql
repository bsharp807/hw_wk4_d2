DROP TABLE events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  style VARCHAR,
  distance INT,
  worldrecord VARCHAR
);

INSERT INTO events (style, distance, worldrecord) VALUES ('Freestyle', 100, '46.91');
INSERT INTO events (style, distance, worldrecord) VALUES ('Breaststroke', 200, '2:06.67');
INSERT INTO events (style, distance, worldrecord) VALUES ('Butterfly', 50, '22.27');
INSERT INTO events (style, distance, worldrecord) VALUES ('Backstroke', 100, '51.85');
INSERT INTO events (style, distance, worldrecord) VALUES ('Individual Medley', 400, '4:03.84');
