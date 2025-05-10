import React from 'react'
import Header from '../components/Header'
import Popup from '../components/PopUp'
import BatmanFeedbackCard from '../components/BatmanFeedbackCard'

const Home = () => {
  return (
    <>
      <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg max-w-5xl mx-auto my-10 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Complete SQL Lab Queries</h1>
      
      <pre className="whitespace-pre-wrap text-sm font-mono bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`1. EMPLOYEE - DEPARTMENT - PROJECT
-- Create Tables
CREATE TABLE EMPLOYEE (...);
CREATE TABLE DEPARTMENT (...);
CREATE TABLE PROJECT (...);
CREATE TABLE WORKS_ON (...);
CREATE TABLE DEPENDENT (...);

-- Queries
SELECT Ename, Address FROM EMPLOYEE E JOIN DEPARTMENT D ON E.Dno = D.Dnumber WHERE D.Dname = 'ISE';
SELECT E1.Ename AS Employee, E2.Ename AS Supervisor FROM EMPLOYEE E1 LEFT JOIN EMPLOYEE E2 ON E1.Mgrssn = E2.Ssn;
SELECT SUM(Salary) AS Total_Salary FROM EMPLOYEE;
SELECT D.Dnumber, COUNT(E.Ssn) AS Employee_Count, AVG(E.Salary) AS Average_Salary FROM EMPLOYEE E JOIN DEPARTMENT D ON E.Dno = D.Dnumber GROUP BY D.Dnumber;

2. SAILORS - BOATS - RESERVES
-- Create Tables
CREATE TABLE SAILORS (...);
CREATE TABLE BOATS (...);
CREATE TABLE RESERVES (...);

-- Queries
SELECT * FROM SAILORS WHERE Rating > 7;
SELECT Sname FROM SAILORS WHERE Sid IN (SELECT Sid FROM RESERVES WHERE Bid = 103);
SELECT DISTINCT S.Sname FROM SAILORS S JOIN RESERVES R ON S.Sid = R.Sid JOIN BOATS B ON R.Bid = B.Bid WHERE B.Color = 'red';
SELECT DISTINCT S.Sname FROM SAILORS S JOIN RESERVES R ON S.Sid = R.Sid JOIN BOATS B ON R.Bid = B.Bid WHERE B.Color IN ('red', 'green');

3. BOOK DEALER DATABASE
-- Create Tables
CREATE TABLE AUTHOR (...);
CREATE TABLE PUBLISHER (...);
CREATE TABLE CATEGORY (...);
CREATE TABLE CATALOG (...);
CREATE TABLE ORDER_DETAILS (...);

-- Queries
SELECT A.* FROM AUTHOR A WHERE A.Author_id IN (...);
SELECT A.Name FROM AUTHOR A JOIN CATALOG C ON A.Author_id = C.Author_id JOIN ORDER_DETAILS O ON C.Book_id = O.Book_id GROUP BY A.Name ORDER BY SUM(O.Quantity) DESC LIMIT 1;
UPDATE CATALOG SET Price = Price * 1.10 WHERE Publisher_id = (...);
SELECT Category_id FROM CATALOG GROUP BY Category_id HAVING COUNT(DISTINCT Publisher_id) = 1;

4. MOVIE DATABASE
-- Create Tables
CREATE TABLE ACTOR (...);
CREATE TABLE DIRECTOR (...);
CREATE TABLE MOVIES (...);
CREATE TABLE MOVIE_CAST (...);
CREATE TABLE RATING (...);

-- Queries
SELECT Mov_Title FROM MOVIES M JOIN DIRECTOR D ON M.Dir_id = D.Dir_id WHERE D.Dir_Name = 'Hitchcock';
SELECT Mov_Title FROM MOVIES WHERE Mov_id IN (...);
SELECT DISTINCT A.Act_Name FROM ACTOR A JOIN MOVIE_CAST MC ON A.Act_id = MC.Act_id JOIN MOVIES M ON M.Mov_id = MC.Mov_id WHERE M.Mov_Year < 2000 AND A.Act_id IN (...);
UPDATE RATING SET Rev_Stars = Rev_Stars + 1 WHERE Mov_id IN (...);

5. BANKING DATABASE
-- Create Tables
CREATE TABLE BRANCH (...);
CREATE TABLE ACCOUNTS (...);
CREATE TABLE DEPOSITOR (...);
CREATE TABLE LOAN (...);
CREATE TABLE BORROWER (...);

-- Queries
SELECT customer_name FROM DEPOSITOR D JOIN ACCOUNTS A ON D.accno = A.accno WHERE A.branch_name = 'Main' GROUP BY customer_name HAVING COUNT(*) >= 2;
SELECT customer_name FROM DEPOSITOR D JOIN ACCOUNTS A ON D.accno = A.accno JOIN BRANCH B ON A.branch_name = B.branch_name WHERE B.branch_city = 'Chicago' GROUP BY customer_name HAVING COUNT(DISTINCT A.branch_name) = (SELECT COUNT(*) FROM BRANCH WHERE branch_city = 'Chicago');
DELETE FROM ACCOUNTS WHERE branch_name IN (SELECT branch_name FROM BRANCH WHERE branch_city = 'Chicago');`}
      </pre>
    </div><div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg max-w-5xl mx-auto my-10 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Complete SQL Lab Queries</h1>
      
      <pre className="whitespace-pre-wrap text-sm font-mono bg-gray-800 p-4 rounded-lg overflow-x-auto">
{`1. EMPLOYEE - DEPARTMENT - PROJECT
-- Create Tables
CREATE TABLE EMPLOYEE (...);
CREATE TABLE DEPARTMENT (...);
CREATE TABLE PROJECT (...);
CREATE TABLE WORKS_ON (...);
CREATE TABLE DEPENDENT (...);

-- Queries
SELECT Ename, Address FROM EMPLOYEE E JOIN DEPARTMENT D ON E.Dno = D.Dnumber WHERE D.Dname = 'ISE';
SELECT E1.Ename AS Employee, E2.Ename AS Supervisor FROM EMPLOYEE E1 LEFT JOIN EMPLOYEE E2 ON E1.Mgrssn = E2.Ssn;
SELECT SUM(Salary) AS Total_Salary FROM EMPLOYEE;
SELECT D.Dnumber, COUNT(E.Ssn) AS Employee_Count, AVG(E.Salary) AS Average_Salary FROM EMPLOYEE E JOIN DEPARTMENT D ON E.Dno = D.Dnumber GROUP BY D.Dnumber;

2. SAILORS - BOATS - RESERVES
-- Create Tables
CREATE TABLE SAILORS (...);
CREATE TABLE BOATS (...);
CREATE TABLE RESERVES (...);

-- Queries
SELECT * FROM SAILORS WHERE Rating > 7;
SELECT Sname FROM SAILORS WHERE Sid IN (SELECT Sid FROM RESERVES WHERE Bid = 103);
SELECT DISTINCT S.Sname FROM SAILORS S JOIN RESERVES R ON S.Sid = R.Sid JOIN BOATS B ON R.Bid = B.Bid WHERE B.Color = 'red';
SELECT DISTINCT S.Sname FROM SAILORS S JOIN RESERVES R ON S.Sid = R.Sid JOIN BOATS B ON R.Bid = B.Bid WHERE B.Color IN ('red', 'green');

3. BOOK DEALER DATABASE
-- Create Tables
CREATE TABLE AUTHOR (...);
CREATE TABLE PUBLISHER (...);
CREATE TABLE CATEGORY (...);
CREATE TABLE CATALOG (...);
CREATE TABLE ORDER_DETAILS (...);

-- Queries
SELECT A.* FROM AUTHOR A WHERE A.Author_id IN (...);
SELECT A.Name FROM AUTHOR A JOIN CATALOG C ON A.Author_id = C.Author_id JOIN ORDER_DETAILS O ON C.Book_id = O.Book_id GROUP BY A.Name ORDER BY SUM(O.Quantity) DESC LIMIT 1;
UPDATE CATALOG SET Price = Price * 1.10 WHERE Publisher_id = (...);
SELECT Category_id FROM CATALOG GROUP BY Category_id HAVING COUNT(DISTINCT Publisher_id) = 1;

4. MOVIE DATABASE
-- Create Tables
CREATE TABLE ACTOR (...);
CREATE TABLE DIRECTOR (...);
CREATE TABLE MOVIES (...);
CREATE TABLE MOVIE_CAST (...);
CREATE TABLE RATING (...);

-- Queries
SELECT Mov_Title FROM MOVIES M JOIN DIRECTOR D ON M.Dir_id = D.Dir_id WHERE D.Dir_Name = 'Hitchcock';
SELECT Mov_Title FROM MOVIES WHERE Mov_id IN (...);
SELECT DISTINCT A.Act_Name FROM ACTOR A JOIN MOVIE_CAST MC ON A.Act_id = MC.Act_id JOIN MOVIES M ON M.Mov_id = MC.Mov_id WHERE M.Mov_Year < 2000 AND A.Act_id IN (...);
UPDATE RATING SET Rev_Stars = Rev_Stars + 1 WHERE Mov_id IN (...);

5. BANKING DATABASE
-- Create Tables
CREATE TABLE BRANCH (...);
CREATE TABLE ACCOUNTS (...);
CREATE TABLE DEPOSITOR (...);
CREATE TABLE LOAN (...);
CREATE TABLE BORROWER (...);

-- Queries
SELECT customer_name FROM DEPOSITOR D JOIN ACCOUNTS A ON D.accno = A.accno WHERE A.branch_name = 'Main' GROUP BY customer_name HAVING COUNT(*) >= 2;
SELECT customer_name FROM DEPOSITOR D JOIN ACCOUNTS A ON D.accno = A.accno JOIN BRANCH B ON A.branch_name = B.branch_name WHERE B.branch_city = 'Chicago' GROUP BY customer_name HAVING COUNT(DISTINCT A.branch_name) = (SELECT COUNT(*) FROM BRANCH WHERE branch_city = 'Chicago');
DELETE FROM ACCOUNTS WHERE branch_name IN (SELECT branch_name FROM BRANCH WHERE branch_city = 'Chicago');`}
      </pre>
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