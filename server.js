// server.js
const express = require("express");
const mongoose = require("mongoose");
const AttendanceRecord = require("./models/AttendanceRecord"); // Import the model
const Student = require("./models/Student");
const app = express();

const studentsData = [
  { sid: "56552", name: "Neha Bhatt" },
  { sid: "56000", name: "Mrigank Aditya" },
  { sid: "56188", name: "Rakshit Devra" },
  { sid: "57006", name: "Ayush Kapruwan" },
  { sid: "56106", name: "Nidhika Chauhan" },
  { sid: "57193", name: "Anshika Paliwal" },
  { sid: "56928", name: "Bhaskar Goswami" },
  { sid: "56078", name: "Bhavya Singh Rana" },
  { sid: "57211", name: "Prashant Lekhwar" },
  { sid: "56411", name: "Tarun Dutta" },
  { sid: "56190", name: "Piyush Kumar" },
  { sid: "56089", name: "Vipasshi Joshi" },
  { sid: "56108", name: "Rahul Kumar" },
  { sid: "56109", name: "Bineet Kathait" },
  { sid: "56111", name: "Rishabh Ramola" },
  { sid: "56088", name: "Prashant" },
  { sid: "56112", name: "Archana" },
  { sid: "56113", name: "Garima Papnai" },
  { sid: "56128", name: "Karishma Kuriya" },
  { sid: "55987", name: "Shubham Kumar" },
  { sid: "56217", name: "Anmol Ganu" },
  { sid: "56076", name: "Isha Jain" },
  { sid: "56103", name: "Aakanshi Sharma" },
  { sid: "56080", name: "Rishabh Srivastava" },
  { sid: "56102", name: "Ridhika Kohl" },
  { sid: "56080", name: "Ashima Mainali" },
  { sid: "56100", name: "Smriti Verma" },
  { sid: "56124", name: "Sandeep Rawat" },
  { sid: "56094", name: "Ansh Kumar" },
  { sid: "56930", name: "Shivanshu Rawat" },
  { sid: "56068", name: "Ayush Pratap Singh" },
  { sid: "57194", name: "Pawandeep Singh" },
  { sid: "56405", name: "Dojwir Singh" },
  { sid: "56938", name: "Brij Raj Chauhan" },
  { sid: "56113", name: "Ekansh Agarwal" },
  { sid: "56067", name: "Hritik Gupta" },
  { sid: "56406", name: "Atul Choudhary" },
  { sid: "57213", name: "Sushant Kohli" },
  { sid: "56283", name: "Anushri Rawat" },
  { sid: "56056", name: "Mohammed Rehan" },
  { sid: "56116", name: "Kartik Arya" },
  { sid: "56111", name: "Dheeraj Kumar" },
  { sid: "56117", name: "Sumit Sati" },
  { sid: "56128", name: "Vanshika Saini" },
  { sid: "57004", name: "Prashant Rana" },
  { sid: "56126", name: "Ugrash Kumar" },
  { sid: "56280", name: "Divyanshi Neolia" },
  { sid: "56320", name: "Pranshu Pande" },
  { sid: "56103", name: "Anay Papnoi" },
  { sid: "56029", name: "Shubham Chandra" },
  { sid: "56109", name: "Abhishek Aswal" },
  { sid: "56089", name: "Himani Joshi" },
  { sid: "56114", name: "Karan Thayat" },
  { sid: "56644", name: "Himanshu Sonkar" },
  { sid: "56221", name: "Vedant Joshi" },
  { sid: "56011", name: "Rahul Chabdal" },
  { sid: "57204", name: "Khushi Kashyap" },
  { sid: "56096", name: "Kartik Singh Kapkoti" },
  { sid: "56092", name: "Shivam Rana" },
  { sid: "56100", name: "Shubham Ghildiyal" },
  { sid: "56385", name: "Kunal Bisht" },
  { sid: "57422", name: "Gunjan Karki" },
  { sid: "56091", name: "Yash Rastogi" },
  { sid: "56072", name: "Arjun Prashar" },
  { sid: "56104", name: "Kumari Palak" },
  { sid: "56409", name: "Rohit Sharma" },
  { sid: "56072", name: "Naval Kishore Singh Bisht" },
  { sid: "56079", name: "Tushar Joshi" },
];

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Allowed headers
  next();
});

// POST /attendance endpoint
app.post("/attendance", async (req, res) => {
  const { subject, date } = req.body;
  // const sub = subject.toLowerCase();
  // const currentDate = new Date(date);
  // Extract the day, month, and year
  // const day = String(currentDate.getDate()).padStart(2, "0");
  // const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  // const year = currentDate.getFullYear();

  // // Format the date as dd-mm-yyyy
  // const formattedDate = `${day}-${month}-${year}`;

  // console.log(formattedDate); // Outputs: 23-05-2024
  // console.log(currentDate);
  try {
    let record;
    if (date) {
      record = await AttendanceRecord.find({ subject, date });
    } else {
      record = await AttendanceRecord.find({ subject });
    }
    console.log(record);
    const records = record ? record : [];
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/students", async (req, res) => {
  // const { subject, date } = req.body;
  try {
    const record = await Student.find();
    console.log(record);
    const records = record ? record : [];
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const uri =
  "mongodb+srv://hritikgupta:brApNtuVlM5df5Td@cluster0.jzgagdf.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

// Connect to the MongoDB database
async function connectDB() {
  await mongoose.connect(uri, clientOptions, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // await Student.insertMany(studentsData);
}

// Start the server and listen on port 3000
async function startServer() {
  await connectDB();
  console.log("connected");
  app.listen(5000, () => {
    console.log("Server is listening on port 5000");
  });
}

startServer();
