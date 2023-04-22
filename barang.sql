-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 22, 2023 at 07:17 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos_express`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id` int(20) NOT NULL,
  `kode_barang` varchar(50) NOT NULL,
  `barcode_id` varchar(50) NOT NULL,
  `nama_barang` varchar(50) NOT NULL,
  `stok` varchar(50) NOT NULL,
  `harga_beli` varchar(50) NOT NULL,
  `harga_jual` varchar(50) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id`, `kode_barang`, `barcode_id`, `nama_barang`, `stok`, `harga_beli`, `harga_jual`, `kategori`, `created_at`, `status`) VALUES
(1, 'B01', '1029384756', 'Good Day Mocca', '10', '1000', '2000', '1', '2023-04-22 05:49:55', 1),
(2, 'B02', '123456', 'Ciki zuba', '99', '700', '2500', '2', '2023-04-22 06:06:23', 1),
(3, 'B03', '123456', 'Good Day Mocca', '10', '1000', '1500', 'A01', '2023-04-22 06:06:50', 1),
(4, 'B04', '123456', 'Good Day Mocca', '10', '1000', '1500', 'A01', '2023-04-22 06:07:11', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
