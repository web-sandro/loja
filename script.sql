DROP DATABASE IF EXISTS `mydb`;
CREATE DATABASE `mydb`;

USE `mydb`;

CREATE TABLE `product` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `price` DECIMAL(10,2) UNSIGNED,
    PRIMARY KEY (`id`)
);

INSERT INTO `product` (`name`, `price`) VALUES
('Smartphone Samsung Galaxy S20', 2199.99),
('Notebook Dell Inspiron 15', 3999.99),
('Monitor LG Ultrawide 29"', 999.99),
('Teclado Mecânico Logitech G Pro', 349.90),
('Mouse Sem Fio Microsoft Surface', 79.90),
('Fone de Ouvido Sony WH-1000XM4', 1299.99),
('Câmera Canon EOS Rebel T7i', 2999.99),
('Impressora HP LaserJet Pro MFP', 499.99),
('Guitarra Fender Stratocaster', 2499.99),
('Violão Yamaha FG800', 599.99),
('Bateria Eletrônica Roland TD-17KVX', 2999.99),
('Camiseta Nike Dri-Fit', 79.90),
("Calça Jeans Levi's 501", 199.90),
('Tênis Adidas Ultraboost', 499.90),
('Jaqueta de Couro Schott NYC', 799.90);