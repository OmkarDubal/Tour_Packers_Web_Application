CREATE DATABASE  IF NOT EXISTS `tour_packers` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tour_packers`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: tour_packers
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tours`
--

DROP TABLE IF EXISTS `tours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tours` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `t_name` varchar(45) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `distance` double NOT NULL,
  `days` int NOT NULL,
  `total_seats` int NOT NULL,
  `price` double NOT NULL,
  `t_date` date NOT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tours`
--

LOCK TABLES `tours` WRITE;
/*!40000 ALTER TABLE `tours` DISABLE KEYS */;
INSERT INTO `tours` VALUES (1001,'Kashmir Houseboat Packages','If you are looking for a memorable Kashmir trip, MakeMyTrip holiday packages are the right choice for you. MakeMyTrip offers the widest range of customizable Kashmir tour to suit every kind of traveler from Delhi, Mumbai, Chennai or Bangalore. Explore from over 109 tour packages to Kashmir with unbeatable deals and discounts. Explore the main Kashmir sightseeing points with the variety of experiential tours and activities included in MakeMyTrip’s Kashmir tour packages.',1200,10,50,40000,'2022-05-05'),(1002,'Andaman','If you are looking for a memorable Andaman trip, MakeMyTrip holiday packages are the right choice for you. MakeMyTrip offers the widest range of customizable Andaman tour to suit every kind of traveler from Delhi, Mumbai, Chennai or Bangalore. Explore from over 78 tour packages to Andaman with unbeatable deals and discounts. Explore the main Andaman sightseeing points with the variety of experiential tours and activities included in MakeMyTrip’s Andaman tour packages.',1500,11,40,25000,'2022-06-05'),(1003,'Ladakh','If you are looking for a memorable Ladakh trip, MakeMyTrip holiday packages are the right choice for you. MakeMyTrip offers the widest range of customizable Ladakh tour to suit every kind of traveler from Delhi, Mumbai, Chennai or Bangalore. Explore from over 47 tour packages to Ladakh with unbeatable deals and discounts. Explore the main Ladakh sightseeing points with the variety of experiential tours and activities included in MakeMyTrip’s Ladakh tour packages.',900,8,30,22000,'2022-06-15'),(1004,'Goa','If you are looking for a memorable Goa trip, MakeMyTrip holiday packages are the right choice for you. MakeMyTrip offers the widest range of customizable Goa tour to suit every kind of traveler from Delhi, Mumbai, Chennai or Bangalore. Explore from over 84 tour packages to Goa with unbeatable deals and discounts. Explore the main Goa sightseeing points with the variety of experiential tours and activities included in MakeMyTrip’s Goa tour packages.',600,6,50,21000,'2022-05-08'),(1005,'Kerala','If you are looking for a memorable Kerala trip, MakeMyTrip holiday packages are the right choice for you. MakeMyTrip offers the widest range of customizable Kerala tour to suit every kind of traveler from Delhi, Mumbai, Chennai or Bangalore. Explore from over 132 tour packages to Kerala with unbeatable deals and discounts. Explore the main Kerala sightseeing points with the variety of experiential tours and activities included in MakeMyTrip’s Kerala tour packages.',1000,10,45,45000,'2022-06-08');
/*!40000 ALTER TABLE `tours` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 20:16:32
