-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2017 at 05:29 AM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alumnos`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `spBuscarAlumno` (IN `_alumno` VARCHAR(50))  BEGIN
    SELECT
        *
    FROM
        alumno
    WHERE
        nombre LIKE CONCAT('%', _alumno, '%');
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spEliminarAlumno` (IN `alumno` INT)  BEGIN
    DELETE
        alumno
    FROM
        alumno
    WHERE
        alumno.idAlumno = alumno ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertarAlumno` (IN `nombre` VARCHAR(50), IN `apellido` VARCHAR(50), IN `grado` INT)  BEGIN
INSERT INTO `alumno`(nombre,apellido,idGrado)
VALUES(nombre, apellido, grado) ;
SELECT 'Registro ingresado' as mensaje;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spModificarAlumno` (IN `codigoAlumno` INT, `nombre` VARCHAR(50), `apellido` VARCHAR(50), `grado` INT)  BEGIN
    UPDATE
        `alumno`
    SET
        `nombre` = nombre,
        `apellido` = apellido,
        `idGrado` = grado
    WHERE
        idAlumno = codigoAlumno ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarAlumnos` ()  BEGIN
    SELECT
        *
    FROM
        alumno;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `alumno`
--

CREATE TABLE `alumno` (
  `idAlumno` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `idGrado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alumno`
--

INSERT INTO `alumno` (`idAlumno`, `nombre`, `apellido`, `idGrado`) VALUES
(2, 'Salvador', 'Rubio', 2),
(16, 'Carlos', 'Majano', 3),
(17, 'Jose', 'Elias', 3),
(31, 'sdg', 'dgwr', 1),
(35, 'laura', 'campos', 4);

-- --------------------------------------------------------

--
-- Table structure for table `grado`
--

CREATE TABLE `grado` (
  `idGrado` int(11) NOT NULL,
  `grado` varchar(20) DEFAULT NULL,
  `seccion` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grado`
--

INSERT INTO `grado` (`idGrado`, `grado`, `seccion`) VALUES
(1, 'sexto', 'A'),
(2, 'septimo', 'B'),
(3, 'octavo', 'C'),
(4, 'noveno', 'A'),
(5, 'septimo', 'C');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`idAlumno`),
  ADD KEY `FK_grado` (`idGrado`) USING BTREE;

--
-- Indexes for table `grado`
--
ALTER TABLE `grado`
  ADD PRIMARY KEY (`idGrado`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumno`
--
ALTER TABLE `alumno`
  MODIFY `idAlumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `grado`
--
ALTER TABLE `grado`
  MODIFY `idGrado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `FK_grado` FOREIGN KEY (`idGrado`) REFERENCES `grado` (`idGrado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
