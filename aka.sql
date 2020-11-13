-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `akses`;
CREATE TABLE `akses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `lihat` text COLLATE latin1_general_ci NOT NULL,
  `tambah` text COLLATE latin1_general_ci NOT NULL,
  `edit` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(20) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `akses` (`id`, `nama`, `lihat`, `tambah`, `edit`, `status`) VALUES
(1,	'admin',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16',	'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16',	'1'),
(2,	'guru',	'2,4,6',	'2,4,6',	'2,4,6',	'1'),
(3,	'siswa',	'4,6,7',	'',	'',	'1');

DROP TABLE IF EXISTS `kuis`;
CREATE TABLE `kuis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `pertanyaan` text CHARACTER SET utf8 NOT NULL,
  `jawaban` text COLLATE latin1_general_ci NOT NULL,
  `kunci` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci
/*!50100 PARTITION BY KEY ()
PARTITIONS 1 */;

INSERT INTO `kuis` (`id`, `nama`, `pertanyaan`, `jawaban`, `kunci`, `keterangan`, `status`) VALUES
(1,	'1',	'Ketuhanan Yang Maha Esa, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'a',	'',	'1'),
(2,	'1',	'Kemanusiaan yang adil dan beradab, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'b',	'',	'1'),
(3,	'1',	'Persatuan Indonesia, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'c',	'',	'1'),
(4,	'1',	'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam perwakilan, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'd',	'',	'1'),
(5,	'1',	'Keadilan sosial bagi seluruh rakyat Indonesia, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|5',	'd',	'',	'1');

DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) NOT NULL,
  `urut` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `url` varchar(254) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `menu` (`id`, `induk`, `urut`, `nama`, `url`, `status`) VALUES
(1,	'0',	'1',	'Master',	'modules/akses/controller.js?akses/view',	'1'),
(2,	'16',	'2',	'Kuis',	'modules/kuis/controller.js?kuis/view',	'1'),
(3,	'1',	'3',	'Menu',	'modules/menu/controller.js?menu/view',	'1'),
(4,	'16',	'4',	'Nilai',	'modules/nilai/controller.js?nilai/view',	'1'),
(5,	'1',	'5',	'Users',	'modules/users/controller.js?users/view',	'1'),
(6,	'16',	'6',	'Kuis',	'modules/kuis/controller.js?kuis/kuis',	'1'),
(7,	'16',	'6',	'Sertifikat',	'modules/nilai/controller.js?nilai/sertifikat',	'1'),
(15,	'1',	'1',	'Akses',	'modules/akses/controller.js?akses/view',	'1'),
(16,	'0',	'1',	'AKA',	'modules/akses/controller.js?akses/view',	'1');

DROP TABLE IF EXISTS `nilai`;
CREATE TABLE `nilai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `kuis` varchar(254) COLLATE latin1_general_ci NOT NULL,
  `nilai` varchar(12) COLLATE latin1_general_ci NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(250) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci
/*!50100 PARTITION BY KEY ()
PARTITIONS 1 */;

INSERT INTO `nilai` (`id`, `users`, `kuis`, `nilai`, `keterangan`, `status`) VALUES
(27,	'wawan',	'1',	'8',	'[\"a\",\"b\",\"c\",\"d\",\"d\"]',	''),
(26,	'sa',	'1',	'10',	'[\"a\",\"b\",\"c\",\"d\",\"d\"]',	'');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `pin` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `akses` varchar(254) COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci
/*!50100 PARTITION BY KEY ()
PARTITIONS 1 */;

INSERT INTO `users` (`id`, `nama`, `pin`, `akses`, `status`) VALUES
(1,	'sa',	'sa',	'admin',	'1'),
(2,	'guru',	'guru',	'guru',	'1'),
(3,	'123',	'123',	'siswa',	'1');

-- 2020-11-02 16:13:08
