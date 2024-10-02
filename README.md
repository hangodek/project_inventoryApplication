# MUST READ!!

Follow these steps to set up the inventory application:

### 1. Clone the repository
```bash
git clone git@github.com:hangodek/project_inventoryApplication.git
```

### 2. Install dependencies
Navigate to both the `client` and `server` folders, and run the following command in each:
```bash
npm install
```

### 3. Install PostgreSQL (for WSL/Linux users)
```bash
sudo apt-get install postgresql postgresql-contrib
```

### 4. Create the database
Log in to PostgreSQL and create a new database:
```bash
psql
CREATE DATABASE mydb;
```

### 5. Create the required table
In your PostgreSQL session, create the table for storing anime information:
```sql
CREATE TABLE animelist (
  id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  studioname VARCHAR(255),
  imagepath VARCHAR(255)
);
```

### 6. Insert default anime data
Add some default anime images with the following SQL commands:
```sql
INSERT INTO animelist (name, studioname, imagepath) VALUES ('sad', 'dawew', 'files/images/anime1.jpg');
INSERT INTO animelist (name, studioname, imagepath) VALUES ('sad', 'dawew', 'files/images/anime2.jpg');
INSERT INTO animelist (name, studioname, imagepath) VALUES ('sad', 'dawew', 'files/images/anime3.jpg');
INSERT INTO animelist (name, studioname, imagepath) VALUES ('sad', 'dawew', 'files/images/anime4.jpg');
```

### 7. Start the application
Navigate to the `server` folder and start the backend:
```bash
npm run dev
```

Then, go to the `client` folder and start the frontend:
```bash
npm run dev
```

### 8. Access the application
Open your browser and go to `localhost` to view the web application.

---
