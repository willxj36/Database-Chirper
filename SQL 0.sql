create table users(
	id int not null auto_increment primary key,
    name varchar(30) not null,
    email varchar(30) not null,
    password text null,
    _created datetime default current_timestamp);
    
create table chirps(
	id int not null auto_increment primary key,
    userid int not null,
    content text not null,
    location varchar(50) null,
    _created datetime default current_timestamp);
    
alter table chirps
add constraint fk_chirpuser
foreign key (userid)
references users(id);

select * from users;