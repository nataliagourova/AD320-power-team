USE `mydb` ;
/*ALTERING the Table Cart*/
ALTER TABLE cart
ADD COLUMN Cart_Description VARCHAR(15) AFTER CartId;

ALTER TABLE cart
ADD COLUMN Cart_Active BOOLEAN DEFAULT TRUE;

ALTER TABLE cart
ADD COLUMN CartName VARCHAR(15) AFTER Cart_Description;

/*ALTERS Table for admin adds the columns logsData and cartData*/
ALTER TABLE `admin`
ADD COLUMN  logsData VARCHAR(15);

ALTER TABLE `admin`
ADD COLUMN  cartData VARCHAR(15);


/* Dummy Data for Main*/
INSERT INTO  `mydb`.`MAIN`
	VALUES(1,'Cart1'); 
INSERT INTO  `mydb`.`MAIN`
	VALUES(2,'cart2');
INSERT INTO  `mydb`.`MAIN`
	VALUES(3,'cart3');
INSERT INTO  `mydb`.`MAIN`
	VALUES(4,'cart4');
INSERT INTO  `mydb`.`MAIN`
	VALUES(5,'cart5');
       
/*Dummy Data for Menu Table*/
INSERT INTO `mydb`.`Menu` 
	VALUES 
		(1,'SpicyHotDog', '6.66', '1.00' ) ;
INSERT INTO `mydb`.`Menu` 
	VALUES (2,'OriginalHotDog', '5.66', '1.00' );
INSERT INTO `mydb`.`Menu` 
	VALUES (3,'DailySpecialHotDog', '6.00', '1.00' );
INSERT INTO `mydb`.`Menu` 
	VALUES (4,'DrunkPersonHotDog', '8.00', '1.00' );
INSERT INTO `mydb`.`Menu` 
	VALUES (5,'ImpossibleHotDog', '9.00', '1.00' );
    
/*Dummy Data for Customer*/
INSERT `mydb`.`Customer`
	VALUES(1, 1, 'Josh', 'Oliver', 'root', 'root1', 'face');
INSERT `mydb`.`Customer`
	VALUES(2, 2, 'Kierran', 'Conroy', 'DarthKierran','root2', 'vader face');
INSERT `mydb`.`Customer`
	VALUES(3, 3, 'Sherrod', 'Ware', 'Jedi Knight ','root3', 'Knight face');
INSERT `mydb`.`Customer`
	VALUES(4, 4, 'Natalia', 'Gourava', 'Jedi','root4', 'Female Knight face');
INSERT `mydb`.`Customer`
	VALUES(5, 5, 'Johart', 'Aguiniga', 'Jedi Knight ','root5', 'Knight face');
    
/*Dummy Data for Carts*/
INSERT `mydb`.`cart`
VALUES
	(1, 'finalfrontier', 'Enterprise', 1, DEFAULT),
	(2, 'galaxyfaraway', 'MilleniumFalcon', 2, DEFAULT),
	(3,'Late Night', 'NightRider', 3, DEFAULT),
	(4, 'DimensionShip', 'EventHorizon', 4, DEFAULT),
	(5,'CylonHater', 'Galactica', 5, DEFAULT);

/*Dummy Data for Admin */
INSERT `mydb`.`admin`
VALUES
	(1, 'Darth Revan', 'Secret', 'Keirran', 'Conroy', 'Log Data', 'Cart Data' );

INSERT `mydb`.`admin`
VALUES
	(2, 'Darth Plagueis', 'Secret', 'Sherrod', 'Ware', 'Log Data', 'Cart Data' );

/*Possible Query Example for the Demo*/
UPDATE `mydb`.`Customer`
SET FirstName = 'Denny', LastName = 'Mysterio', Login = 'Darth Denny', `Password` = 'root0', ProfiePicture = 'Vader Face'
WHERE CustomerID = 1; 

/*CREATES VIEWS for TeamMates fetches*/
CREATE VIEW `NatalaisPullCustomers` AS
SELECT FirstName AS `First Name`, LastName AS `Last Name`, ProfiePicture AS `Profile PIC`
FROM customer;

CREATE VIEW `NataliasPullMenu` AS
SELECT  *
FROM menu;

CREATE VIEW `DennyKierranPull` AS
SELECT LoginName AS `AdminData`, logsData `Log Data`, cartData `Cart Data`
FROM `admin`
WHERE AdminID = 1;
 
CREATE VIEW `DennyCartData` AS
SELECT *
FROM cart;

CREATE VIEW `SherrodData` AS
SELECT LoginName
FROM `admin`
WHERE AdminID = 2;


