-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 07, 2019 at 09:25 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name_category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
(1, 'Novel'),
(2, 'Non Fiction'),
(3, 'Comedy'),
(4, 'Horror');

-- --------------------------------------------------------

--
-- Table structure for table `data_book`
--

CREATE TABLE `data_book` (
  `id_book` int(11) NOT NULL,
  `title` longtext NOT NULL,
  `writer` varchar(20) NOT NULL,
  `location` varchar(20) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(130) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `data_book`
--

INSERT INTO `data_book` (`id_book`, `title`, `writer`, `location`, `id_category`, `created_at`, `updated_at`, `image`, `description`, `status`) VALUES
(2, 'Origin', 'Dan Brown', 'Ruang A2', 1, '2019-06-25 02:27:01', '2019-06-25 02:27:52', 'https://cdn.waterstones.com/bookjackets/large/9780/5521/9780552174169.jpg', 'Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series, following Inferno. The book was released on October 3, 2017 by Doubleday. The book is predominantly set in Spain and features minor sections in Dubai and Budapest. ', 0),
(3, 'Edensor', 'Andrea Hirata', 'Ruang A1', 1, '2019-06-25 02:27:01', '2019-06-25 02:27:52', 'https://a.wattpad.com/cover/96847130-352-k766611.jpg', 'Edensor adalah buku ketiga dari Tetralogi Laskar Pelangi karya Andrea Hirata yang diterbitkan oleh Bentang Pustaka pada bulan Mei tahun 2007. Buku berikutnya dan yang terakhir adalah Maryamah Karpov. Edensor masuk nominasi penghargaan nasional sastra KLA (Khatulistiwa Literary Award) tahun 2007.', 0),
(4, 'Danur', 'Risa', 'Ruang B1', 2, '2019-06-25 02:27:01', '2019-06-25 02:27:52', 'http://3.bp.blogspot.com/-_PkWBX2eijQ/VRrT_txDr3I/AAAAAAAAG7Q/HkHk3TAenGs/s1600/25191081.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1),
(6, 'Lost In Math', 'Sabine Hossenfelder', 'Ruang A1', 1, '2019-06-25 02:30:08', '2019-06-25 02:30:08', 'https://images-na.ssl-images-amazon.com/images/I/51nSIO-MYYL.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1),
(25, 'An Example of a Google Bar Chart', 'a', 'a', 1, '2019-08-05 13:15:46', '2019-08-05 13:15:46', 'http://localhost:3001/upload/2019-08-05T13:15:45.900Zspongebob.jpeg', 'sxzc', 0),
(26, 'An Example of a Google Bar Chart', 's', 'q', 1, '2019-08-06 01:11:20', '2019-08-06 01:11:20', 'http://localhost:3001/upload/2019-08-06T01:11:19.530Zharrypotter.jpeg', 'xcxz', 1);

-- --------------------------------------------------------

--
-- Table structure for table `loan_book`
--

CREATE TABLE `loan_book` (
  `id_loanbook` int(11) NOT NULL,
  `card_number` varchar(20) NOT NULL,
  `id_book` int(11) NOT NULL,
  `expired_date` varchar(20) NOT NULL,
  `forfeit` int(20) NOT NULL,
  `information` varchar(130) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `loan_book`
--

INSERT INTO `loan_book` (`id_loanbook`, `card_number`, `id_book`, `expired_date`, `forfeit`, `information`, `created_at`, `updated_at`) VALUES
(9, '1', 4, 'efsd', 20000, 'dgfdgsfd', '2019-08-06 04:52:50', '2019-08-06 16:22:08'),
(12, '3', 25, 'Aug 16, 2019', 0, 'SELESAI', '2019-08-06 14:02:27', '2019-08-06 16:37:45'),
(13, '3', 6, 'Aug 16, 2019', 0, 'SELESAI', '2019-08-06 14:07:49', '2019-08-06 16:36:36'),
(14, '5', 25, 'Aug 16, 2019', 0, 'SELESAI', '2019-08-06 14:14:51', '2019-08-06 16:35:35'),
(15, '3', 25, 'Aug 16, 2019', 0, 'SELESAI', '2019-08-06 16:38:55', '2019-08-06 16:47:50'),
(16, '3', 6, 'Aug 16, 2019', 0, 'SELESAI', '2019-08-06 16:39:11', '2019-08-06 16:45:57'),
(17, '3', 2, 'Aug 16, 2019', 0, 'DIPINJAM', '2019-08-06 16:39:18', '2019-08-06 16:39:18'),
(18, '1', 26, 'Aug 17, 2019', 0, '', '2019-08-07 01:35:46', '2019-08-07 01:35:46');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `card_number` int(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `fullname` varchar(40) NOT NULL,
  `password` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `salt` varchar(128) NOT NULL,
  `token` varchar(128) NOT NULL,
  `role_id` int(10) NOT NULL,
  `status` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `card_number`, `email`, `fullname`, `password`, `created_at`, `updated_at`, `salt`, `token`, `role_id`, `status`) VALUES
(41, 3, 'khusnijafar@gmail.com', 'Khusni Jafar', '2155630ec8eee64f7d67c4126c4a15c5e2fb54c4e5fb2c9c1317503335ec02e720298750f0bd893e61b5192a7b64a2d7402c1bf1b023bc830f35a4f101d64cea', '2019-08-04 17:05:34', '2019-08-04 17:05:34', 'bb3fb123586438027a', '', 3, 1),
(42, 1, 'admin@gmail.com', 'Librarian', 'a32930fb5d622345899d7eb261c056cd5cb3b59b96244b69d5b4f634cb73cb0e7ffe483d702f32ac0c96d23150f9cc49dc2986e2c21ac26d1e55a94a5dfafbe9', '2019-08-06 11:46:03', '2019-08-06 11:46:03', '9eacfb6b8be5655337', '', 1, 1),
(43, 5, 'user1@gmail.com', 'user1', 'b555534d55ba157c2a2930ee0ec0d630688c4d38bff8f95cfb79ba26b91ca7a79e33890ada684cca39dd6b9e0e304f385f954c1e0af2ebc61f5e62528a489bb7', '2019-08-06 14:13:55', '2019-08-06 14:13:55', '203554f1453f3b71ef', '', 3, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `data_book`
--
ALTER TABLE `data_book`
  ADD PRIMARY KEY (`id_book`);

--
-- Indexes for table `loan_book`
--
ALTER TABLE `loan_book`
  ADD PRIMARY KEY (`id_loanbook`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `card_number` (`card_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `data_book`
--
ALTER TABLE `data_book`
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `loan_book`
--
ALTER TABLE `loan_book`
  MODIFY `id_loanbook` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
