-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int NOT NULL,
  `PostId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `PostId` (`PostId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (21,'Et je peux même ajouter des commentaires ici !!!','2021-08-23 10:00:25','2021-08-23 10:00:25',23,20),(23,'Test','2021-08-24 16:40:47','2021-08-24 16:40:47',23,4),(25,'Trop beau !','2021-08-24 16:45:17','2021-08-24 16:45:17',26,49);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,'Titre du second post','Contenu du second post',NULL,'2021-08-19 11:41:35','2021-08-19 11:41:35',2),(4,'Titre du troisième post','Contenu du troisième post','https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=6&m=1057506940&s=612x612&w=0&h=C11yA-ESqeuCX63QkRpPyWmAMXJJvZw0niQluGnATlI=','2021-08-20 21:37:32','2021-08-20 21:37:32',7),(6,'Nouveau message','Message de Tarte Tatin','','2021-08-21 18:23:51','2021-08-21 18:23:51',20),(20,'Nouveau test','Second nouveau test Bonjour !!!','','2021-08-23 09:58:27','2021-08-23 14:59:03',23),(31,'Nyan !','Ce chat est trop drôle !','https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif','2021-08-23 10:55:02','2021-08-23 10:55:02',23),(44,'Helloooo','Nouveau post test','','2021-08-23 14:30:52','2021-08-23 20:32:56',23),(46,'Last','Dernier message','','2021-08-23 20:18:55','2021-08-23 20:18:55',23),(49,'Test','Photo de vacances !','https://puu.sh/I6fwj/9f21d9699c.png','2021-08-24 16:39:23','2021-08-24 16:39:44',23);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastName` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Durand','Maxime','maxime@mail.com','$2b$10$cLDGJLylcP6lsgSt4c.UoemnAkRwxiAC31lCh244lfqdDnTEyk5Jq',NULL,NULL,NULL,0,'2021-08-18 14:37:28','2021-08-23 20:03:22'),(3,'Test','Compte','test@mail.com','$2b$10$Q6ioibQi79mvA4Ek0SUFLuU/yIeG50M.LLJYKCSrg2hv1c49Disgi',NULL,NULL,NULL,0,'2021-08-18 14:37:44','2021-08-23 20:03:21'),(6,'Nom','Prénom','test@test.com','$2b$10$lnCOBpJHcd4ccw6EvWnbh.Cb/VSQLSWbZOd36NbtQHIgGv5nwLrQ2',NULL,NULL,NULL,0,'2021-08-19 15:10:58','2021-08-19 15:10:58'),(7,'Laura','Mathieu','laura2@mail.com','$2b$10$ti4mGoBgLp5cx1d/nnN4tuRfMw59kmqs0Ijv0gcLyL4i0e4.6/Wk2',NULL,NULL,NULL,0,'2021-08-19 15:13:39','2021-08-19 15:13:39'),(8,'Nom','Prénom','test2@test.com','$2b$10$P385wob5k/jeEhyujycC/.gKL1xdqvJ8vwMzoVckaIqiUptl8jfHu',NULL,NULL,NULL,0,'2021-08-19 15:14:19','2021-08-19 15:14:19'),(9,'Otto','Marc','mark@mail.com','$2b$10$QFRABhlp0POp012ptFQs.Oh9BY3UE1F1RHbofRlHlxbyHRKEuNNIS',NULL,NULL,NULL,0,'2021-08-19 23:11:40','2021-08-19 23:11:40'),(10,'Otto','Marc','marc@mail.com','$2b$10$QZTCNvNgDyKYaSFYPb5wD.8n0/m0qG39/bKIDrKxCiYP84UdFmh9C',NULL,NULL,NULL,0,'2021-08-19 23:14:35','2021-08-19 23:14:35'),(11,'Otto','Marc','mark3@mail.com','$2b$10$OacG4YWlHp6bNYMeXDiOy.iDF/Tc5jaSrmqjDX3H9H12gMDh00O8a',NULL,NULL,NULL,0,'2021-08-19 23:21:37','2021-08-19 23:21:37'),(12,'Pattin','Jean-Pierre','jp@mail.com','$2b$10$NWLHNGVKBEz9Y2U2w.lDR.1mxp0qW8avcfndI.XisyyxVzkcvIbca',NULL,NULL,NULL,0,'2021-08-20 09:59:54','2021-08-20 09:59:54'),(13,'CF','Emilie','emilie@mail.com','$2b$10$I6sbNKZ3X1cnlF7atYCC/.tVbZPPXQPBr4Hz4hJywC7kncMPF2GiG',NULL,NULL,NULL,0,'2021-08-20 10:00:47','2021-08-20 10:00:47'),(14,'World','Hello','hello@mail.com','$2b$10$V98lvzRQyhqYOl48iLvb5O3ZjkOBlU1O4CRMsc76ERCvh5XfbPzD.',NULL,NULL,NULL,0,'2021-08-20 10:01:28','2021-08-20 10:01:28'),(15,'Martin','Celia','celia@mail.com','$2b$10$w024Fw3oVkeSzKRYyFrS2OWB9unZJ8EB6hiU8AjmaGOmn7EK/HeW2',NULL,NULL,NULL,0,'2021-08-20 10:03:07','2021-08-20 10:03:07'),(16,'Test','Bonjour','bonjour@mail.com','$2b$10$tYbgrSGTBVbHpP31/g7iOOn4k7IrPIXgKL3TVEt7h23R/a6UnYpwC',NULL,NULL,NULL,0,'2021-08-20 12:04:36','2021-08-20 12:04:36'),(17,'Hedqfs','Pregdqfs','tref@mail.com','$2b$10$ar2gOlJPokRSaH8QH/1Vh.457wQhPsp4Sp9CpdEHaL522Ct6108B.',NULL,NULL,NULL,0,'2021-08-20 12:13:04','2021-08-20 12:13:04'),(19,'Compte','Test','nouveau@mail.com','$2b$10$QA/9L7lL7ysag9kCFVAbAOxDESBISzZdqxzbEKNheuTqIeIHcuzGK','r\"ezafaDQS','1985-12-02','https://puu.sh/I5M4C/1a1d3e57fd.png',0,'2021-08-20 15:08:09','2021-08-22 20:30:05'),(20,'Tatin','Tarte','tarte@mail.com','$2b$10$vU5R2wafSpVkls/M6.xD0.MZ8OJUzgYdvfZSveuQv88mBlXuHlmyO',NULL,NULL,NULL,0,'2021-08-20 15:14:25','2021-08-20 15:14:25'),(23,'Mathieu','Laura','laura@mail.com','$2b$10$DuB9grs6ky/qArTCD2yfL.b/zm/e/VSHc9EPTM5VPa3Lvo8kKtAre','Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere.','1995-05-02',NULL,0,'2021-08-23 09:35:35','2021-08-24 16:41:27'),(24,'Administrateur','Compte','admin@mail.com','$2b$10$p1Mcoz.U0/Hj1W0o9RG3Zuvdli0bV3IpumK2EZ7FwWE8A/u8CRt4O',NULL,NULL,NULL,1,'2021-08-23 18:43:02','2021-08-23 19:55:45'),(26,'Blah','Bla','bla@mail.com','$2b$10$W80AHcW3lky.u7yHCbzrWOgtUPAHOgxp51/Rf2BsuiDUU8azaJtky',NULL,NULL,NULL,0,'2021-08-24 16:43:55','2021-08-24 16:43:55');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-24 21:24:03
