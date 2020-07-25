CREATE TABLE cabling.rooms (
	id INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP  NOT NULL,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP  NOT NULL,
	CONSTRAINT rooms_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_general_ci;

INSERT INTO cabling.rooms (name,createdat,updatedat) VALUES 
('Administration','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
,('Lab Ground Floor','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
,('Bacterio Lab Second Floor','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
,('IT Office','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
,('Electricity Distribution Room','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
,('Goods Reception','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
,('Reception','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
,('Server Room','2020-07-25 20:14:05.000','2020-07-25 20:14:05.000')
;