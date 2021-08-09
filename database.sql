
CREATE TABLE "todo"(
	"id" serial,
	"task" VARCHAR(1028),
	"iscomplete" boolean NOT NULL
);




SELECT * FROM "todo";
	
--INSERT INTO "todo" ("task", "iscomplete") VALUES ('Make deposit to Trustone Credit Union', false)	;

--method to query and select  all in my todo table
--SELECT * FROM "todo";

--DROP TABLE "todo"

--UPDATE "todo";

--DELETE FROM "todo"
--where "id" = '$1';