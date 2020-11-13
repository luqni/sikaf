-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `kuis`;
CREATE TABLE `kuis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `induk` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `pertanyaan` text CHARACTER SET utf8 NOT NULL,
  `jawaban` text COLLATE latin1_general_ci NOT NULL,
  `kunci` varchar(25) COLLATE latin1_general_ci NOT NULL,
  `keterangan` text COLLATE latin1_general_ci NOT NULL,
  `status` varchar(50) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci
/*!50100 PARTITION BY KEY ()
PARTITIONS 1 */;

INSERT INTO `kuis` (`id`, `induk`, `pertanyaan`, `jawaban`, `kunci`, `keterangan`, `status`) VALUES
(1,	'1',	'Ketuhanan Yang Maha Esa, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'a',	'',	'1'),
(2,	'1',	'Kemanusiaan yang adil dan beradab, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'b',	'',	'1'),
(3,	'1',	'Persatuan Indonesia, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'c',	'',	'1'),
(4,	'1',	'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam perwakilan, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|4',	'd',	'',	'1'),
(5,	'1',	'Keadilan sosial bagi seluruh rakyat Indonesia, adalah pancasila, sila ke',	'a|1;\r\nb|2;\r\nc|3;\r\nd|5',	'd',	'',	'1');

-- 2020-09-15 08:19:59
