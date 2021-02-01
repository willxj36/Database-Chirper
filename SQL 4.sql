CREATE PROCEDURE spUserMentions
(userid int)
SELECT
	c.id,
    c.text,
    c._created
FROM mentions m
JOIN chirps c ON c.id = m.chirpid
JOIN users u ON u.id = m.userid
WHERE u.id = userid;

CALL spUserMentions (1);