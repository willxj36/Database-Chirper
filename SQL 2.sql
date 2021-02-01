create user
	'chirprapp'@'localhost'
identified by 'password123';

grant all on chirpr.* to 'chirprapp'@'localhost';

alter user 'chirprapp'@'localhost' identified with mysql_native_password by 'password123';

alter table chirps rename column content to text;