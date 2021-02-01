select * from chirps;

select
	c.location,
    u.name
from chirps c
join users u on u.id = c.userid;

select
	c.content,
    u.name
from chirps c
join users u on c.userid = u.id
where u.name = 'Will';

select * from chirps;
select * from users;

alter table users drop column email;

alter table chirps add column _updated DATETIME ON UPDATE CURRENT_TIMESTAMP;