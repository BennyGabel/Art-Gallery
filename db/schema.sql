DROP TABLE IF EXISTS art;


-- CREATE TABLE art ( 
--   id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   is_Public   TINYINT (1),
--   obj_Id      INT (10),
--   gallery_Num INT (10),
--   department  CHAR(50),
--   obj_Name    CHAR(50),
--   title       CHAR(120),
--   Culture     CHAR(75),
--   artist_Name TEXT(280),
--   artist_Nation CHAR(115),
--   endBy       CHAR(190),
--   medium      CHAR(240),
--   city        CHAR(15),
--   linkResource CHAR(60));


CREATE TABLE art ( 
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  ispublic     TINYINT (1),
  cobjid       INT (10),
  gallerynum   INT (10),
  department   CHAR(50),
  objname      CHAR(50),
  title        CHAR(120),
  culture      CHAR(75),
  artistname   TEXT(280),
  artistnation CHAR(115),
  endby        CHAR(190),
  medium       CHAR(240),
  city         CHAR(15),
  linkresource CHAR(60));


-- Create a second table "item"
DROP TABLE IF EXISTS item;



CREATE TABLE item ( 
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  ispublic     TINYINT (1),
  cobjid       INT (10),
  gallerynum   INT (10),
  department   CHAR(50),
  objname      CHAR(50),
  title        CHAR(120),
  culture      CHAR(75),
  artistname   TEXT(280),
  artistnation CHAR(115),
  endby        CHAR(190),
  medium       CHAR(240),
  city         CHAR(15),
  linkresource CHAR(60));

-- id	Is Public Domain	Object ID	Gallery Number	Department	Object Name	Title	Culture	Artist Display Name	Artist Nationality	Artist End Date	Medium	City	Link Resource
