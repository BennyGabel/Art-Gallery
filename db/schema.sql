DROP TABLE IF EXISTS art;


CREATE TABLE art ( 
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  is_Public   TINYINT (1),
  obj_Id      INT (10),
  gallery_Num INT (10),
  department  CHAR(50),
  obj_Name    CHAR(50),
  title       CHAR(120),
  Culture     CHAR(75),
  artist_Name TEXT(280),
  artist_Nation CHAR(115),
  endBy       CHAR(190),
  medium      CHAR(240),
  city        CHAR(15),
  linkResource CHAR(60));

-- WISH LIST 
-- CREATE TABLE USER (
-- USER CHAR(20);
-- PWRD CHAR(50))

-- CREATE TABLE COMMENTS (
--   USER CCHAR(20),
--   ITEM_ID INTEGER
--   COMMENT TEXT
-- )



-- id	Is Public Domain	Object ID	Gallery Number	Department	Object Name	Title	Culture	Artist Display Name	Artist Nationality	Artist End Date	Medium	City	Link Resource
