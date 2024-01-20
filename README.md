# Description: 

This project is a meeting display application designed to be shown on a tablet-type device through a window in a meeting room. The app connects to a MySQL database where an admin-user, set inside the database, can add available meeting occasions. Additionally, the display also shows the current weather with the help of a weather API.

# Why?

This project was assigned as a task by my teacher in NTI Gymnasiet 4th IT-year to evaluate my understanding of Prisma, React and Node/Express.

# How to use:

On the home page, you can see the current meetings. To view available meetings and reserve meetings, navigate to localhost:3000/meeting (qr-code). To access the login and admin pages, you will need to manually redirect to /admin and /login. From there, you can log in as an admin and add meetings to the database. Please note that admin users need to be added through the database directly, using PhPMyadmin, for security reasons. To create the database, please redirect to the root folder and run "prisma migrate dev --name init".

# How to run the project:

To run the project, open a terminal in the /client folder and enter "npm start". Then, open another terminal in the /server folder and run "node index.js".

# Home-page
<img width="1437" alt="MeetingHomePage" src="https://github.com/Alexander-PajukoskiSoto/MeetingDisplay/assets/145021057/5ca2da05-4391-4c3d-992f-cdd9619edf84">
