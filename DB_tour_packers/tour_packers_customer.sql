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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cust_id` int NOT NULL AUTO_INCREMENT,
  `pwd` varchar(45) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` double NOT NULL,
  `mobile` double NOT NULL,
  PRIMARY KEY (`cust_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'shubham@123','Shubham','Borude','shubhamborude55@gmail.com','Hinjewadi','Pune','Maharashtra',411057,9970507688),(2,'omkar@123','Omkar','Dubal','omkar12@gmail.com','Chinchwad','Pune','Maharashtra',411055,7685884466),(3,'Akanksha@123','Akanksha','Sonavane','akanksha@gmail.com','Sangamner','Ahmednagar','Maharashtra',422605,8596458522),(4,'Rahul@666','Rahul','Khamkar','rahul12@gmail.com','Parner','Ahmednagar','Maharashtra',426555,8592456522),(5,'Bipin11@156','Bipin','Vishwakarma','bipin34@gmail.com','Nashik Road','Nashik','Maharashtra',426755,8592356522),(6,'Anushka@123','Virat','Kohli','viratk@gmail.com','Rajpath Road','Delhi','Delhi',555896,9633356522),(7,'Sachin@980','Sachin','Tendulkar','sachin12@gmail.com','Wankhede Stadium','Mumbai','Maharashtra',456125,7689653466),(8,'Dhoni@456','MS','Dhoni','dhoni45@gmail.com','Ram Mandir Road','Ranchi','Jharkhand',568456,8598656522),(9,'Namo@4566','Narendra','Modi','modi45@gmail.com','Link Road','Delhi Fort','Delhi',568456,4568656522),(10,'Lionel@77777','Lionel','Messi','leomessi@gmail.com','Parvati Paytha','Pune','Maharashtra',422653,9633356222);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 20:16:31
