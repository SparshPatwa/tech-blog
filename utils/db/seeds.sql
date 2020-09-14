INSERT INTO user (username, email, password)
VALUES 
  ("john.doe", "johndoe@gmail.com", “password123”);

INSERT INTO post (title, post_text, user_id, created_at, updated_at)
VALUES 
  ("Test Post Title", "Test Post Text", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comment (comment_text, user_id, post_id, created_at, updated_at)
VALUES 
  ("Test Post Comment", 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
