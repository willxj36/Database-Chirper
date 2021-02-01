create table mentions(
userid int not null,
chirpid int not null,
primary key (userid, chirpid)
);

alter table mentions
add constraint fk_user
foreign key (userid)
references users(id);

alter table mentions
add constraint fk_chirp
foreign key (chirpid)
references chirps(id);

select * from mentions;

select
    u.name,
    c.content
from mentions m
join users u on u.id = m.userid
join chirps c on c.id = m.chirpid
where u.id = 5;

SELECT u.name, c.text FROM mentions m JOIN chirps c ON c.id = m.chirpid JOIN users u ON u.id = m.userid WHERE u.name LIKE 'will';