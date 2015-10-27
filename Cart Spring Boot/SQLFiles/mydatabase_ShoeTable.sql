CREATE DATABASE  IF NOT EXISTS `mydatabase` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mydatabase`;
-- MySQL dump 10.13  Distrib 5.5.46, for debian-linux-gnu (i686)
--
-- Host: 127.0.0.1    Database: mydatabase
-- ------------------------------------------------------
-- Server version	5.5.46-0ubuntu0.14.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ShoeTable`
--

DROP TABLE IF EXISTS `ShoeTable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ShoeTable` (
  `ProductID` varchar(50) NOT NULL,
  `Productimage` varchar(50) NOT NULL,
  `Description` varchar(50) NOT NULL,
  `Price` double NOT NULL,
  `pricerange` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `stock` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `Productimage2` varchar(50) NOT NULL,
  `Productimage3` varchar(50) NOT NULL,
  `Productimage4` varchar(50) NOT NULL,
  `Productimage5` varchar(50) NOT NULL,
  `Productimage6` varchar(50) NOT NULL,
  `Availability` varchar(50) NOT NULL,
  `noreviews` double NOT NULL,
  `UnitPrice` double NOT NULL,
  `Discount` double NOT NULL,
  `Idealfor` varchar(50) NOT NULL,
  `Occasion` varchar(50) NOT NULL,
  `Closure` varchar(50) NOT NULL,
  `TipShape` varchar(50) NOT NULL,
  `Weight` varchar(100) NOT NULL,
  `Style1` varchar(100) NOT NULL,
  `Technologyused` varchar(50) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Design` varchar(50) NOT NULL,
  `Otherdetails` varchar(100) NOT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ShoeTable`
--

LOCK TABLES `ShoeTable` WRITE;
/*!40000 ALTER TABLE `ShoeTable` DISABLE KEYS */;
INSERT INTO `ShoeTable` VALUES ('SHOE-00','../images/product1-1.jpeg','Puma Running Shoes',2222,'1000-2999','male','Available','Shoes','../images/product1-2.jpeg','../images/product1-3.jpeg','../images/product1-4.jpeg','../images/product1-5.jpeg','../images/product1-6.jpeg','In Stock',25,3999,1777,'Men','Sports','Laced','Round','289 gm (per single Shoe) - Weight of the product may vary depending on size.','Panel and Stitch Detail, Loop at Back, Mesh Panel Detail','Arch Technology','03, White, Puma Silver, High Risk Red','Logo Detail','Cushioned Ankle and Tongue, Textured Sole, Padded Footbed'),('SHOE-01','../images/shoe1-1.jpg','Blue Gladiators',900,'500-999','female','Available','Shoes','../images/shoe1-1.jpg','../images/shoe1-1.jpg','../images/shoe1-1.jpg','../images/shoe1-1.jpg','../images/shoe1-1.jpg','In Stock',12,999,99,'Women','Casual','Strapped','Round','159 gm (per single Shoe) - Weight of the product may vary depending on size.','Panel and Stitch Detail, Loop at Back, Mesh Panel Detail','Arch Technology','03, Blue, Reebok Blue, High Risk Black','Logo Detail','Cushioned Ankle and Tongue, Textured Sole, Padded Footbed'),('SHOE-02','../images/product2-1.jpeg','Reebok Realflex Speed 2.0 Running Shoes',3888,'3000','male','Available','Shoes','../images/product2-2.jpeg','../images/product2-3.jpeg','../images/product2-4.jpeg','../images/product2-5.jpeg','../images/product2-6.jpeg','In Stock',36,6999,3111,'Men','Sports','Laced','Round','259 gm (per single Shoe) - Weight of the product may vary depending on size.','Panel and Stitch Detail, Loop at Back, Mesh Panel Detail','Arch Technology','03, White, Puma Silver, High Risk Red','Logo Detail','Cushioned Ankle and Tongue, Textured Sole, Padded Footbed'),('SHOE-03','../images/shoe2-1.jpg','Trendy black heeled pumps',2000,'1000-2999','female','Out of Stock','Shoes','../images/shoe2-1.jpg','../images/shoe2-1.jpg','../images/shoe2-1.jpg','../images/shoe2-1.jpg','../images/shoe2-1.jpg','Out of Stock',31,3999,1999,'Women','Casual','Strapped','Round','159 gm (per single Shoe) - Weight of the product may vary depending on size.','Panel and Stitch Detail, Loop at Back, Mesh Panel Detail','Arch Technology','03, White, Puma Silver, High Risk Red','Logo Detail','Cushioned Ankle and Tongue, Textured Sole, Padded Footbed'),('SHOE-04','../images/shoe3-1.jpg','Strap-on low heel wedges',450,'0-499','female','Out of Stock','Shoes','../images/shoe3-1.jpg','../images/shoe3-1.jpg','../images/shoe3-1.jpg','../images/shoe3-1.jpg','../images/shoe3-1.jpg','Out of Stock',2,900,450,'Women','Casual','Strapped','Round','159 gm (per single Shoe) - Weight of the product may vary depending on size.','Panel and Stitch Detail, Loop at Back, Mesh Panel Detail','Arch Technology','03, Blue, Reebok Blue, High Risk Black','Logo Detail','Cushioned Ankle and Tongue, Textured Sole, Padded Footbed'),('SHOE-05','../images/shoe4-1.jpg','Special Winter Heels',980,'500-999','female','Available','Shoes','../images/shoe4-1.jpg','../images/shoe4-1.jpg','../images/shoe4-1.jpg','../images/shoe4-1.jpg','../images/shoe4-1.jpg','In Stock',56,999,19,'Women','Casual','Strapped','Round','159 gm (per single Shoe) - Weight of the product may vary depending on size.','Panel and Stitch Detail, Loop at Back, Mesh Panel Detail','Arch Technology','03, White, Puma Silver, High Risk Red','Logo Detail','Cushioned Ankle and Tongue, Textured Sole, Padded Footbed'),('SHOE-06','../images/shoe5-1.jpg','Glamour Heels',2000,'1000-2999','female','Available','Shoes','../images/shoe5-1.jpg','../images/shoe5-1.jpg','../images/shoe5-1.jpg','../images/shoe5-1.jpg','../images/shoe5-1.jpg','In Stock',45,4999,2999,'Women','Casual','Strapped','Round','289 gm (per single Shoe) - Weight of the product may vary depending on size.','Panel and Stitch Detail, Loop at Back, Mesh Panel Detail','Arch Technology','03, Blue, Reebok Blue, High Risk Black','Logo Detail','Cushioned Ankle and Tongue, Textured Sole, Padded Footbed');
/*!40000 ALTER TABLE `ShoeTable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-27 10:49:25
