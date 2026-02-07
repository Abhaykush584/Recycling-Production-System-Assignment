CREATE DATABASE IF NOT EXISTS recycling_hr;
USE recycling_hr;

-- Candidates table
CREATE TABLE candidates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  experience INT NOT NULL,
  skills TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Evaluations table
CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    crisis_management INT,
    sustainability INT,
    team_motivation INT,
    total_score INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

-- Rankings table
CREATE TABLE rankings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    rank_position INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

-- Trigger to auto-update rankings
DELIMITER $$

CREATE TRIGGER update_rankings
AFTER INSERT ON evaluations
FOR EACH ROW
BEGIN
    DELETE FROM rankings;

    INSERT INTO rankings (candidate_id, rank_position)
    SELECT candidate_id,
           RANK() OVER (ORDER BY total_score DESC)
    FROM evaluations;
END$$

DELIMITER ;

