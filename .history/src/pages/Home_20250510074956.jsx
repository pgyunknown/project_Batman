import React from 'react'
import Header from '../components/Header'
import Popup from '../components/PopUp'
import BatmanFeedbackCard from '../components/BatmanFeedbackCard'

const Home = () => {
  return (
    <>
      <div>
        <span>
          Complete SQL Lab Queries
1. EMPLOYEE - DEPARTMENT - PROJECT
-- Create Tables
CREATE TABLE EMPLOYEE (Ename VARCHAR(50), Ssn INT PRIMARY KEY, Bdate DATE, Sex CHAR(1), Address VARCHAR(100), Salary INT, Mgrssn INT, Dno INT, FOREIGN KEY (Mgrssn) REFERENCES EMPLOYEE(Ssn), FOREIGN KEY (Dno) REFERENCES DEPARTMENT(Dnumber));
CREATE TABLE DEPARTMENT (Dname VARCHAR(50), Dnumber INT PRIMARY KEY, Mgrssn INT, Mgr_start_date DATE, FOREIGN KEY (Mgrssn) REFERENCES EMPLOYEE(Ssn));
CREATE TABLE PROJECT (Pname VARCHAR(50), Pnumber INT PRIMARY KEY, Plocation VARCHAR(50), Dnum INT, FOREIGN KEY (Dnum) REFERENCES DEPARTMENT(Dnumber));
CREATE TABLE WORKS_ON (Essn INT, Pno INT, Hours INT, PRIMARY KEY (Essn, Pno), FOREIGN KEY (Essn) REFERENCES EMPLOYEE(Ssn), FOREIGN KEY (Pno) REFERENCES PROJECT(Pnumber));
CREATE TABLE DEPENDENT (Essn INT, Dependent_name VARCHAR(50), Sex CHAR(1), PRIMARY KEY (Essn, Dependent_name), FOREIGN KEY (Essn) REFERENCES EMPLOYEE(Ssn));
-- Queries
SELECT Ename, Address FROM EMPLOYEE E JOIN DEPARTMENT D ON E.Dno = D.Dnumber WHERE D.Dname = 'ISE';
SELECT E1.Ename AS Employee, E2.Ename AS Supervisor FROM EMPLOYEE E1 LEFT JOIN EMPLOYEE E2 ON E1.Mgrssn = E2.Ssn;
SELECT SUM(Salary) AS Total_Salary FROM EMPLOYEE;
SELECT D.Dnumber, COUNT(E.Ssn) AS Employee_Count, AVG(E.Salary) AS Average_Salary FROM EMPLOYEE E JOIN DEPARTMENT D ON E.Dno = D.Dnumber GROUP BY D.Dnumber;
2. SAILORS - BOATS - RESERVES
-- Create Tables
CREATE TABLE SAILORS (Sid INT PRIMARY KEY, Sname VARCHAR(50), Rating INT, Age REAL);
CREATE TABLE BOATS (Bid INT PRIMARY KEY, Bname VARCHAR(50), Color VARCHAR(20));
CREATE TABLE RESERVES (Sid INT, Bid INT, Day DATE, PRIMARY KEY(Sid, Bid, Day), FOREIGN KEY (Sid) REFERENCES SAILORS(Sid), FOREIGN KEY (Bid) REFERENCES BOATS(Bid));
-- Queries
SELECT * FROM SAILORS WHERE Rating > 7;
SELECT Sname FROM SAILORS WHERE Sid IN (SELECT Sid FROM RESERVES WHERE Bid = 103);
SELECT DISTINCT S.Sname FROM SAILORS S JOIN RESERVES R ON S.Sid = R.Sid JOIN BOATS B ON R.Bid = B.Bid WHERE B.Color = 'red';
SELECT DISTINCT S.Sname FROM SAILORS S JOIN RESERVES R ON S.Sid = R.Sid JOIN BOATS B ON R.Bid = B.Bid WHERE B.Color IN ('red', 'green');
3. BOOK DEALER DATABASE
-- Create Tables
CREATE TABLE AUTHOR (Author_id INT PRIMARY KEY, Name VARCHAR(50), City VARCHAR(50), Country VARCHAR(50));
CREATE TABLE PUBLISHER (Publisher_id INT PRIMARY KEY, Name VARCHAR(50), City VARCHAR(50), Country VARCHAR(50));
CREATE TABLE CATEGORY (Category_id INT PRIMARY KEY, Description VARCHAR(100));
CREATE TABLE CATALOG (Book_id INT PRIMARY KEY, Title VARCHAR(100), Author_id INT, Publisher_id INT, Category_id INT, Year INT, Price INT, FOREIGN KEY (Author_id) REFERENCES AUTHOR(Author_id), FOREIGN KEY (Publisher_id) REFERENCES PUBLISHER(Publisher_id), FOREIGN KEY (Category_id) REFERENCES CATEGORY(Category_id));
CREATE TABLE ORDER_DETAILS (Order_no INT, Book_id INT, Quantity INT, PRIMARY KEY (Order_no, Book_id), FOREIGN KEY (Book_id) REFERENCES CATALOG(Book_id));
-- Queries
SELECT A.* FROM AUTHOR A WHERE A.Author_id IN (SELECT Author_id FROM CATALOG WHERE Price > (SELECT AVG(Price) FROM CATALOG) AND Year > 2000 GROUP BY Author_id HAVING COUNT(*) >= 2);
SELECT A.Name FROM AUTHOR A JOIN CATALOG C ON A.Author_id = C.Author_id JOIN ORDER_DETAILS O ON C.Book_id = O.Book_id GROUP BY A.Name ORDER BY SUM(O.Quantity) DESC LIMIT 1;
UPDATE CATALOG SET Price = Price * 1.10 WHERE Publisher_id = (SELECT Publisher_id FROM PUBLISHER WHERE Name = 'Specific Publisher');
SELECT Category_id FROM CATALOG GROUP BY Category_id HAVING COUNT(DISTINCT Publisher_id) = 1;
4. MOVIE DATABASE
-- Create Tables
CREATE TABLE ACTOR (Act_id INT PRIMARY KEY, Act_Name VARCHAR(50), Act_Gender CHAR(1));
CREATE TABLE DIRECTOR (Dir_id INT PRIMARY KEY, Dir_Name VARCHAR(50), Dir_Phone VARCHAR(15));
CREATE TABLE MOVIES (Mov_id INT PRIMARY KEY, Mov_Title VARCHAR(100), Mov_Year INT, Mov_Lang VARCHAR(20), Dir_id INT, FOREIGN KEY (Dir_id) REFERENCES DIRECTOR(Dir_id));
CREATE TABLE MOVIE_CAST (Act_id INT, Mov_id INT, Role VARCHAR(50), PRIMARY KEY (Act_id, Mov_id), FOREIGN KEY (Act_id) REFERENCES ACTOR(Act_id), FOREIGN KEY (Mov_id) REFERENCES MOVIES(Mov_id));
CREATE TABLE RATING (Mov_id INT PRIMARY KEY, Rev_Stars INT, FOREIGN KEY (Mov_id) REFERENCES MOVIES(Mov_id));
-- Queries
SELECT Mov_Title FROM MOVIES M JOIN DIRECTOR D ON M.Dir_id = D.Dir_id WHERE D.Dir_Name = 'Hitchcock';
SELECT Mov_Title FROM MOVIES WHERE Mov_id IN (SELECT Mov_id FROM MOVIE_CAST WHERE Act_id IN (SELECT Act_id FROM MOVIE_CAST GROUP BY Act_id HAVING COUNT(DISTINCT Mov_id) >= 2));
SELECT DISTINCT A.Act_Name FROM ACTOR A JOIN MOVIE_CAST MC ON A.Act_id = MC.Act_id JOIN MOVIES M ON M.Mov_id = MC.Mov_id WHERE M.Mov_Year < 2000 AND A.Act_id IN (SELECT Act_id FROM MOVIE_CAST MC JOIN MOVIES M ON M.Mov_id = MC.Mov_id WHERE M.Mov_Year > 2015);
UPDATE RATING SET Rev_Stars = Rev_Stars + 1 WHERE Mov_id IN (SELECT Mov_id FROM MOVIES M JOIN DIRECTOR D ON M.Dir_id = D.Dir_id WHERE D.Dir_Name = 'Steven Spielberg');
5. BANKING DATABASE
-- Create Tables
CREATE TABLE BRANCH (branch_name VARCHAR(50) PRIMARY KEY, branch_city VARCHAR(50), assets REAL);
CREATE TABLE ACCOUNTS (accno INT PRIMARY KEY, branch_name VARCHAR(50), balance REAL, FOREIGN KEY (branch_name) REFERENCES BRANCH(branch_name));
CREATE TABLE DEPOSITOR (customer_name VARCHAR(50), accno INT, PRIMARY KEY (customer_name, accno), FOREIGN KEY (accno) REFERENCES ACCOUNTS(accno));
CREATE TABLE LOAN (loan_number INT PRIMARY KEY, branch_name VARCHAR(50), amount REAL, FOREIGN KEY (branch_name) REFERENCES BRANCH(branch_name));
CREATE TABLE BORROWER (customer_name VARCHAR(50), loan_number INT, PRIMARY KEY (customer_name, loan_number), FOREIGN KEY (loan_number) REFERENCES LOAN(loan_number));
-- Queries
SELECT customer_name FROM DEPOSITOR D JOIN ACCOUNTS A ON D.accno = A.accno WHERE A.branch_name = 'Main' GROUP BY customer_name HAVING COUNT(*) >= 2;
SELECT customer_name FROM DEPOSITOR D JOIN ACCOUNTS A ON D.accno = A.accno JOIN BRANCH B ON A.branch_name = B.branch_name WHERE B.branch_city = 'Chicago' GROUP BY customer_name HAVING COUNT(DISTINCT A.branch_name) = (SELECT COUNT(*) FROM BRANCH WHERE branch_city = 'Chicago');
DELETE FROM ACCOUNTS WHERE branch_name IN (SELECT branch_name FROM BRANCH WHERE branch_city = 'Chicago');

        </span>
      </div>
    <div className="w-full sm:h-screen  text-2xl">
      <img src="/bannerPic.webp" className="w-full  sm:h-[100vh] h-[50vh] " />
      </div>
      <div className='pt-5 pb-5'>
      <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className=' text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>What is this?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          This project aims to provide a comprehensive guide to Batman's universe, exploring his characters, storylines, and cultural impact.As a passion project for Batman enthusiasts, it's designed to share detailed information and celebrate the legacy of the Dark Knight.
        </p>
      </div>
      <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>How to Navigate?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          Use the navigation bar to explore different sections like Characters, Movies, and Q&A for quick insights.
        </p>
      </div>
      <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>Which technologies were used to build this project?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          The project is built using React(Vite), Tailwind CSS, and JavaScript, combining a responsive design for an engaging experience.
        </p>
      </div>
            <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>What content can I find here?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          You'll find character bios, iconic quotes, storyline summaries, and character appearances in Batman universe.
        </p>
      </div>

            <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>Is this project still a work in progress?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          Yes, the project is continually updated to include more characters, storylines, and trivia.
        </p>
      </div>
      </div>
      <BatmanFeedbackCard/>
    </>
    )
}

export default Home