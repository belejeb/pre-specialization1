-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 12, 2017 at 10:28 AM
-- Server version: 10.1.26-MariaDB-0+deb9u1
-- PHP Version: 7.0.19-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evaluacion`
--

-- --------------------------------------------------------

--
-- Table structure for table `datos_alumnos`
--

CREATE TABLE `datos_alumnos` (
  `carnet` varchar(20) NOT NULL,
  `nombres` varchar(60) NOT NULL,
  `apellidos` varchar(60) NOT NULL,
  `carrera` varchar(90) NOT NULL,
  `nota1` decimal(8,2) NOT NULL,
  `nota2` decimal(8,2) NOT NULL,
  `nota3` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `datos_alumnos`
--

INSERT INTO `datos_alumnos` (`carnet`, `nombres`, `apellidos`, `carrera`, `nota1`, `nota2`, `nota3`) VALUES
('u20098471', 'Christian Eduardo', 'Silva Palma', 'Ing Agronomica', '7.00', '9.00', '10.00'),
('u20120168', 'Oscar Fernando', 'Ventura Ortiz', 'Ing En Sistemas', '10.00', '9.00', '10.00'),
('u20129085', 'Marco Tulio', 'Argueta Chicas', 'Ing en Sistemas', '8.00', '9.00', '10.00'),
('u20129847', 'Maritzabel ', 'Castillo Ramos', 'Lic en Ciencias Juridicas', '10.00', '9.40', '10.00'),
('u20158903', 'Jenny Patricia', 'Perez Mendoza', 'Lic en Admon de Empresas', '10.00', '9.00', '8.00');

-- --------------------------------------------------------

--
-- Table structure for table `nota_alumnos`
--

CREATE TABLE `nota_alumnos` (
  `carnet` varchar(60) NOT NULL,
  `promedio` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datos_alumnos`
--
ALTER TABLE `datos_alumnos`
  ADD PRIMARY KEY (`carnet`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
