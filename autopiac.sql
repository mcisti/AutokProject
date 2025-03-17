-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Már 17. 12:57
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
CREATE DATABASE IF NOT EXISTS `autopiac` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `autopiac`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetroleclaims`
--

CREATE TABLE `aspnetroleclaims` (
  `Id` int(11) NOT NULL,
  `RoleId` varchar(255) NOT NULL,
  `ClaimType` longtext DEFAULT NULL,
  `ClaimValue` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetroles`
--

CREATE TABLE `aspnetroles` (
  `Id` varchar(255) NOT NULL,
  `Name` varchar(256) DEFAULT NULL,
  `NormalizedName` varchar(256) DEFAULT NULL,
  `ConcurrencyStamp` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `aspnetroles`
--

INSERT INTO `aspnetroles` (`Id`, `Name`, `NormalizedName`, `ConcurrencyStamp`) VALUES
('50665d91-fd52-4a45-99a5-42ec611aa2ce', 'Tulaj', 'TULAJ', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetuserclaims`
--

CREATE TABLE `aspnetuserclaims` (
  `Id` int(11) NOT NULL,
  `UserId` varchar(255) NOT NULL,
  `ClaimType` longtext DEFAULT NULL,
  `ClaimValue` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetuserlogins`
--

CREATE TABLE `aspnetuserlogins` (
  `LoginProvider` varchar(255) NOT NULL,
  `ProviderKey` varchar(255) NOT NULL,
  `ProviderDisplayName` longtext DEFAULT NULL,
  `UserId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetuserroles`
--

CREATE TABLE `aspnetuserroles` (
  `UserId` varchar(255) NOT NULL,
  `RoleId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `aspnetuserroles`
--

INSERT INTO `aspnetuserroles` (`UserId`, `RoleId`) VALUES
('27fa7fb0-4a39-4330-af61-1888de22076e', '50665d91-fd52-4a45-99a5-42ec611aa2ce');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetusers`
--

CREATE TABLE `aspnetusers` (
  `Id` varchar(255) NOT NULL,
  `Fullname` longtext DEFAULT NULL,
  `BirthDate` datetime(6) NOT NULL,
  `UserName` varchar(256) DEFAULT NULL,
  `NormalizedUserName` varchar(256) DEFAULT NULL,
  `Email` varchar(256) DEFAULT NULL,
  `NormalizedEmail` varchar(256) DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext DEFAULT NULL,
  `SecurityStamp` longtext DEFAULT NULL,
  `ConcurrencyStamp` longtext DEFAULT NULL,
  `PhoneNumber` longtext DEFAULT NULL,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `aspnetusers`
--

INSERT INTO `aspnetusers` (`Id`, `Fullname`, `BirthDate`, `UserName`, `NormalizedUserName`, `Email`, `NormalizedEmail`, `EmailConfirmed`, `PasswordHash`, `SecurityStamp`, `ConcurrencyStamp`, `PhoneNumber`, `PhoneNumberConfirmed`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`) VALUES
('27fa7fb0-4a39-4330-af61-1888de22076e', NULL, '2025-03-13 08:05:08.137000', 'Levi', 'LEVI', 'halaszl@kkszki.hu', 'HALASZL@KKSZKI.HU', 0, 'AQAAAAIAAYagAAAAECPtB6sCgdhTLesKIL6OoBONW/YrDY64WY2sjwOf9j+DFsEElba/b6oN47MRp3iiUQ==', 'EUZ23J2LYZKOSNCY55KPR67ZJVWENMLG', 'f2a32138-4088-4884-a5d1-31040ea20d1f', '06707760239', 0, 0, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetusertokens`
--

CREATE TABLE `aspnetusertokens` (
  `UserId` varchar(255) NOT NULL,
  `LoginProvider` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jarmuvek`
--

CREATE TABLE `jarmuvek` (
  `id` int(11) NOT NULL,
  `hirdeto` varchar(255) NOT NULL,
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
(1, '27fa7fb0-4a39-4330-af61-1888de22076e', 'Toyota', 'Corolla', 2015, 120000, 'Fehér', 'Benzin', '1.60', 132, 'Automatikus', '3500000.00', 'Jó állapot', 'Klíma, Navigáció', '2025-12-01', 'Eladó'),
(2, '27fa7fb0-4a39-4330-af61-1888de22076e', 'BMW', 'M5 Competition', 2022, 165000, 'Fekete', 'Benzin', '3.00', 530, 'Automatikus', '29000000.00', 'Megkímélt', 'Digitális Klíma, Lemeztető, Összkerék', '2025-02-01', 'Eladó Garanciális'),
(3, '27fa7fb0-4a39-4330-af61-1888de22076e', 'Alfa Romeo', '156', 2005, 344000, 'Sötét kék', 'Dízel', '2.40', 175, 'Manuális', '800000.00', 'Normál', 'Digitális Klíma', '2026-08-17', 'Eladó'),
(4, '27fa7fb0-4a39-4330-af61-1888de22076e', 'Audi', 'RS6', 2017, 125000, 'Fehér', 'Benzin', '4.00', 560, 'Automatikus', '17000000.00', 'Megkímélt', 'Ülés Fűtés', '2026-04-17', 'Eladó'),
(5, '27fa7fb0-4a39-4330-af61-1888de22076e', 'Audi', 'A4', 2008, 182000, 'Fekete', 'Dízel', '2.00', 143, 'Manuális', '2785000.00', 'Kitűnő', 'Fedélzeti Komputer', '2027-01-17', 'Eladó'),
(6, '27fa7fb0-4a39-4330-af61-1888de22076e', 'Lamborghini', 'Aventador', 2015, 58000, 'Fekete', 'Benzin', '6.40', 700, 'Automatikus', '99999999.99', 'Kitűnő', 'Automatizált Fedélzet', '2026-02-17', 'Eladó');

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

--
-- A tábla adatainak kiíratása `kepek_video`
--

INSERT INTO `kepek_video` (`id`, `jarmu_id`, `tipus`, `eleresi_ut`) VALUES
(1, 6, 'kep', 'https://hatterkeptar.hu/hatterkep_kepek_mobil/lamborghini-aventador-lp700-4-fekete-elolnezet-hatterkep-25325.jpg'),
(2, 6, 'kep', 'https://vezess2.p3k.hu/app/uploads/2024/04/lamborghini-huracan-sterrato-alle28892terrain-ad-personam-36.jpg'),
(3, 1, 'kep', 'https://prod.pictures.autoscout24.net/listing-images/7389c4d2-12ca-467d-ad87-1ae79a72465c_9eb3c067-10b6-41a7-9582-aae55fe5ecc2.jpg/250x188.webp'),
(4, 1, 'kep', 'https://www.autonavigator.hu/wp-content/uploads/2024/02/355432_source-scaled.jpg'),
(5, 2, 'kep', 'https://player.hu/uploads/2019/05/P90346576_highRes_the-new-bmw-m5-editi.jpg'),
(6, 2, 'kep', 'https://i.ytimg.com/vi/_PRlVSiSVx0/maxresdefault.jpg'),
(7, 3, 'kep', 'https://ph-classic-prod-images.s3.amazonaws.com/nimg/39384/SOTW_Alfa156V6_04.jpg'),
(8, 3, 'kep', 'https://www.alfaamore.hu/files/galleries/00565/00004.jpg'),
(9, 4, 'kep', 'https://player.hu/uploads/2019/10/kimi-raikkonen-audi-rs6-player-9-1024x461.jpg'),
(10, 4, 'kep', 'https://vezess2.p3k.hu/app/uploads/2013/04/60189_477884_1000x700.jpg.jpg'),
(11, 5, 'kep', 'https://vezess2.p3k.hu/app/uploads/2006/04/3694_35377_1000x700.jpg.jpg'),
(12, 5, 'kep', 'https://www.autonavigator.hu/wp-content/uploads/2017/01/179490_source.jpg');

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

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20250114112327_CreateAuthDb', '8.0.11'),
('20250313075802_asd', '8.0.11');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`);

--
-- A tábla indexei `aspnetroles`
--
ALTER TABLE `aspnetroles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RoleNameIndex` (`NormalizedName`);

--
-- A tábla indexei `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetUserClaims_UserId` (`UserId`);

--
-- A tábla indexei `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  ADD KEY `IX_AspNetUserLogins_UserId` (`UserId`);

--
-- A tábla indexei `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD PRIMARY KEY (`UserId`,`RoleId`),
  ADD KEY `IX_AspNetUserRoles_RoleId` (`RoleId`);

--
-- A tábla indexei `aspnetusers`
--
ALTER TABLE `aspnetusers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  ADD KEY `EmailIndex` (`NormalizedEmail`),
  ADD KEY `Id` (`Id`);

--
-- A tábla indexei `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD PRIMARY KEY (`UserId`,`LoginProvider`,`Name`);

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
-- A tábla indexei `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `jarmuvek`
--
ALTER TABLE `jarmuvek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `kepek_video`
--
ALTER TABLE `kepek_video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
-- Megkötések a táblához `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetusers`
--
ALTER TABLE `aspnetusers`
  ADD CONSTRAINT `aspnetusers_ibfk_1` FOREIGN KEY (`Id`) REFERENCES `jarmuvek` (`hirdeto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

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
