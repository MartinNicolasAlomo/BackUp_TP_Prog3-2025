-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-07-2025 a las 01:54:25
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpintegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` float NOT NULL,
  `imagen` varchar(150) NOT NULL,
  `categoria` varchar(10) NOT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `imagen`, `categoria`, `activo`) VALUES
(1, 'El Club de la Pelea', 5000, 'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Película', 1),
(2, 'Shrek', 1000, 'https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Película', 1),
(3, 'Jurassic Park', 4000, 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_FMjpg_UX1000_.jpg', 'Película', 1),
(4, '¿Y Donde Están Las Rubias?', 2500, 'https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_FMjpg_UX1000_.jpg', 'Película', 1),
(7, 'Blade Runner 2049', 1500, 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg', 'Película', 1),
(8, 'Scarface', 6000, 'https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Película', 1),
(9, 'Lo Imposible', 2500, 'https://m.media-amazon.com/images/M/MV5BMmY3N2VhZDUtMzViYS00NmM0LThmNjctNjIwYWI3MzUxZjJjXkEyXkFqcGc@._V1_.jpg', 'Película', 1),
(10, 'El Caballero Oscuro', 3000, 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg', 'Película', 1),
(11, 'Sicario', 4500, 'https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_.jpg', 'Película', 1),
(12, 'Eterno Resplandor De Una Mente Sin Recuerdos', 2000, 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg', 'Película', 1),
(13, 'Vikingos', 5000, 'https://m.media-amazon.com/images/M/MV5BOTFmZmExYTEtYmE0Mi00MzRmLWE4ZDYtOThiNzNlOTIyODljXkEyXkFqcGc@._V1_.jpg', 'Serie', 1),
(14, 'Breaking Bad', 8000, 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg', 'Serie', 1),
(15, 'Black Sails', 4000, 'https://m.media-amazon.com/images/M/MV5BZGZmOGNjNzUtNTNkMC00ZDU2LThjMDAtZGM2OGRjMjE1OGQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Serie', 1),
(16, 'Game Of Thrones', 3000, 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Serie', 1),
(17, 'ER: Emergencias', 2000, 'https://m.media-amazon.com/images/M/MV5BMzM5NjQ4M2QtNWQyMy00OWUxLWIyZjktNmY2ZjMyZjA2NWE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Serie', 1),
(18, 'The Office', 3800, 'https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Serie', 1),
(19, 'Modern Family', 1500, 'https://m.media-amazon.com/images/M/MV5BMTU2NTU3OTE5NF5BMl5BanBnXkFtZTgwMDAzMjE1NjM@._V1_.jpg', 'Serie', 1),
(21, 'The Wire', 12000, 'https://m.media-amazon.com/images/M/MV5BZWYyNmRhYjktNjBhNC00M2NhLWEzYmMtZDYwNmIyZTRiZWMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Serie', 1),
(22, 'Black Mirror', 1500, 'https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Serie', 1),
(23, 'Peaky Blinders', 3000, 'https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Serie', 1),
(24, 'El Eternauta', 2000, 'https://m.media-amazon.com/images/M/MV5BYTdjY2U5NjctOTNiNC00ZGM5LWJhNTgtOTkzNWUzMWM4NmM0XkEyXkFqcGc@._V1_.jpg', 'Serie', 1),
(25, 'Avatar (2009)', 8000, 'https://m.media-amazon.com/images/M/MV5BZmU0NTc2NjAtZDk1NS00ZTg4LThlZDYtNjIxNDZlMGJmMTVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 'Película', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
