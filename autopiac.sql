-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Feb 14. 11:48
-- Kiszolgáló verziója: 10.4.20-MariaDB
-- PHP verzió: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `autopiac`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

CREATE TABLE `felhasznalo` (
  `id` int(11) NOT NULL,
  `kapcsolattarto_nev` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefon` varchar(20) DEFAULT NULL,
  `datum` timestamp NOT NULL DEFAULT current_timestamp(),
  `SALT` varchar(64) NOT NULL,
  `HASH` varchar(64) NOT NULL,
  `jogosultsag` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jarmuvek`
--

CREATE TABLE `jarmuvek` (
  `id` int(11) NOT NULL,
  `hirdeto` int(11) NOT NULL,
  `marka` varchar(100) DEFAULT NULL,
  `tipus` varchar(100) DEFAULT NULL,
  `evjarat` int(11) DEFAULT NULL,
  `kilometer` int(11) DEFAULT NULL,
  `szin` varchar(50) DEFAULT NULL,
  `motor_tipus` varchar(50) DEFAULT NULL,
  `motor_meret` decimal(4,2) DEFAULT NULL,
  `teljesitmeny` int(11) DEFAULT NULL,
  `sebessegvalto` varchar(50) DEFAULT NULL,
  `ar` decimal(10,2) DEFAULT NULL,
  `allapot` text DEFAULT NULL,
  `felszereltseg` text DEFAULT NULL,
  `muszaki_vizsga` date DEFAULT NULL,
  `elojel` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `jarmuvek`
--

INSERT INTO `jarmuvek` (`id`, `hirdeto`, `marka`, `tipus`, `evjarat`, `kilometer`, `szin`, `motor_tipus`, `motor_meret`, `teljesitmeny`, `sebessegvalto`, `ar`, `allapot`, `felszereltseg`, `muszaki_vizsga`, `elojel`) VALUES
(1, 0, 'Toyota', 'Corolla', 2015, 120000, 'Fehér', 'Benzin', '1.60', 132, 'Automatikus', '3500000.00', 'Jó állapot', 'Klíma, Navigáció', '2025-12-01', 'Eladó'),
(2, 0, 'BMW', 'M5 Competition', 2022, 165000, 'Fekete', 'Benzin', '3.00', 530, 'Automatikus', '29000000.00', 'Megkímélt', 'Digitális Klíma, Lemeztető, Összkerék', '2025-02-01', 'Eladó Garanciális');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kepek_video`
--

CREATE TABLE `kepek_video` (
  `id` int(11) NOT NULL,
  `jarmu_id` int(11) DEFAULT NULL,
  `tipus` enum('kep','video') DEFAULT NULL,
  `eleresi_ut` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `torteneti_adatok`
--

CREATE TABLE `torteneti_adatok` (
  `id` int(11) NOT NULL,
  `jarmu_id` int(11) DEFAULT NULL,
  `bejegyzes_tipus` varchar(64) NOT NULL,
  `leiras` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `velemenyek`
--

CREATE TABLE `velemenyek` (
  `id` int(11) NOT NULL,
  `jarmu_id` int(11) DEFAULT NULL,
  `vasarlo_nev` varchar(100) DEFAULT NULL,
  `velemeny` text DEFAULT NULL,
  `ertekeles` int(11) DEFAULT NULL,
  `datum` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A tábla indexei `jarmuvek`
--
ALTER TABLE `jarmuvek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hirdeto` (`hirdeto`);

--
-- A tábla indexei `kepek_video`
--
ALTER TABLE `kepek_video`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jarmu_id` (`jarmu_id`);

--
-- A tábla indexei `torteneti_adatok`
--
ALTER TABLE `torteneti_adatok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jarmu_id` (`jarmu_id`),
  ADD KEY `bejegyzes_tipus` (`bejegyzes_tipus`);

--
-- A tábla indexei `velemenyek`
--
ALTER TABLE `velemenyek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jarmu_id` (`jarmu_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `jarmuvek`
--
ALTER TABLE `jarmuvek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `kepek_video`
--
ALTER TABLE `kepek_video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `torteneti_adatok`
--
ALTER TABLE `torteneti_adatok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `velemenyek`
--
ALTER TABLE `velemenyek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `kepek_video`
--
ALTER TABLE `kepek_video`
  ADD CONSTRAINT `kepek_video_ibfk_1` FOREIGN KEY (`jarmu_id`) REFERENCES `jarmuvek` (`id`);

--
-- Megkötések a táblához `torteneti_adatok`
--
ALTER TABLE `torteneti_adatok`
  ADD CONSTRAINT `torteneti_adatok_ibfk_1` FOREIGN KEY (`jarmu_id`) REFERENCES `jarmuvek` (`id`);

--
-- Megkötések a táblához `velemenyek`
--
ALTER TABLE `velemenyek`
  ADD CONSTRAINT `velemenyek_ibfk_1` FOREIGN KEY (`jarmu_id`) REFERENCES `jarmuvek` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
