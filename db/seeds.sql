-- You might want to use a separate file that contains functions 
-- for performing specific SQL queries you'll need to use.
--  A constructor function or class could be helpful for organizing 
-- these. You might also want to include a seeds.sql file to 
-- pre-populate your database, making the development of individual 
-- features much easier.
INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

-- +----+-------------+
-- | id | name        |
-- +----+-------------+
-- |  1 | Sales       |
-- |  2 | Engineering |
-- |  3 | Finance     |
-- |  4 | Legal       |
-- +----+-------------+
-- 4 rows in set (0.00 sec)

INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", 1, 100000),
       ("Salesperson", 1, 80000),
       ("Lead Engineer", 2, 150000),
       ("Software Engineer", 2, 120000),
       ("Account Manager", 3, 160000),
       ("Accountant", 3, 125000),
       ("Legal Team Lead", 4, 25000),
       ("Lawyer", 4, 190000);

-- +----+-------------------+--------+---------------+
-- | id | title             | salary | department_id |
-- +----+-------------------+--------+---------------+
-- |  1 | Sales Lead        | 100000 |             1 |
-- |  2 | Salesperson       |  80000 |             1 |
-- |  3 | Lead Engineer     | 150000 |             2 |
-- |  4 | Software Engineer | 120000 |             2 |
-- |  5 | Account Manager   | 160000 |             3 |
-- |  6 | Accountant        | 125000 |             3 |
-- |  7 | Legal Team Lead   |  25000 |             4 |
-- |  8 | Lawyer            | 190000 |             4 |
-- +----+-------------------+--------+---------------+
-- 8 rows in set (0.00 sec)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, null),
       ("Mike", "Chan", 2, 1),
       ("Ashley", "Rodriguez", 3, null),
       ("Kevin", "Tupik", 4, 3),
       ("Kunal", "Singh", 5, null),
       ("Malia", "Brown", 6, 5),
       ("Sarah", "Lourd", 7, null),
       ("Tom", "Allen", 8, 7);

-- +----+------------+-----------+---------+------------+
-- | id | first_name | last_name | role_id | manager_id |
-- +----+------------+-----------+---------+------------+
-- |  1 | John       | Smith     |       1 |       NULL |
-- |  2 | Mike       | Chan      |       2 |          1 |
-- |  3 | Ashley     | Rodriguez |       3 |       NULL |
-- |  4 | Kevin      | Tupik     |       4 |          3 |
-- |  5 | Kunal      | Singh     |       5 |       NULL |
-- |  6 | Malia      | Brown     |       6 |          5 |
-- |  7 | Sarah      | Lourd     |       7 |       NULL |
-- |  8 | Tom        | Allen     |       8 |          7 |
-- +----+------------+-----------+---------+------------+
-- 8 rows in set (0.00 sec)



-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;

-- SELECT r.id, r.title, d.name as department, r.salary 
-- FROM role r
-- JOIN department d on d.id = r.department_id;

-- +-------------------+-------------------+-------------+--------+
-- | title             | title             | department  | salary |
-- +-------------------+-------------------+-------------+--------+
-- | Sales Lead        | Sales Lead        | Sales       | 100000 |
-- | Salesperson       | Salesperson       | Sales       |  80000 |
-- | Lead Engineer     | Lead Engineer     | Engineering | 150000 |
-- | Software Engineer | Software Engineer | Engineering | 120000 |
-- | Account Manager   | Account Manager   | Finance     | 160000 |
-- | Accountant        | Accountant        | Finance     | 125000 |
-- | Legal Team Lead   | Legal Team Lead   | Legal       |  25000 |
-- | Lawyer            | Lawyer            | Legal       | 190000 |
-- +-------------------+-------------------+-------------+--------+
-- 8 rows in set (0.00 sec)

-- SELECT e.first_name, e.last_name, r.title, d.name as department, r.salary, e.manager_id
-- FROM employee e 
-- JOIN role r on r.id = e.role_id 
-- INNER JOIN department d on d.id = r.department_id;

-- +------------+-----------+-------------------+-------------+--------+------------+
-- | first_name | last_name | title             | department  | salary | manager_id |
-- +------------+-----------+-------------------+-------------+--------+------------+
-- | John       | Smith     | Sales Lead        | Sales       | 100000 |       NULL |
-- | Mike       | Chan      | Salesperson       | Sales       |  80000 |          1 |
-- | Ashley     | Rodriguez | Lead Engineer     | Engineering | 150000 |       NULL |
-- | Kevin      | Tupik     | Software Engineer | Engineering | 120000 |          3 |
-- | Kunal      | Singh     | Account Manager   | Finance     | 160000 |       NULL |
-- | Malia      | Brown     | Accountant        | Finance     | 125000 |          5 |
-- | Sarah      | Lourd     | Legal Team Lead   | Legal       |  25000 |       NULL |
-- | Tom        | Allen     | Lawyer            | Legal       | 190000 |          7 |
-- +------------+-----------+-------------------+-------------+--------+------------+
-- 8 rows in set (0.00 sec)

-- SELECT m.movie_name as 'Movie Name', r.review 
-- FROM movies m 
-- JOIN reviews r on m.id = r.movie_id;
-- e.manager 