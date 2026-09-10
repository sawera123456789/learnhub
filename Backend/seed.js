require ("dotenv") .config();
const mongoose = require ("mongoose");
const Course = require ("./models/Course");

const sampleCourses = [
    {
        title: "Web Development",
        description: "Learn to build modern websites from scratch using HTML, CSS, and JavaScript.",
        instructor: "Sarah Ahmed",
        duration: "8 Weeks",
        level: "Beginner",
        price: 49,
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?W=600",
    },

    {
        title: "JavaScript Essentials",
        description: "Master JavaScript fundamentals: variables, functions, arrays, objects, and DOM.",
        instructor: "Bilal Khan",
        duration: "6 Weeks",
        level: "Beginner",
        price: 39,
        category: "Programming",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?W=600",
    },

    {
        title: "React.js for Beginners",
        description: "Build interactive user interfaces with components, props, state, and hooks.",
        instructor: "Ayesha Mailk",
        duration: "3 Weeks",
        level: "Beginner",
        price: 59,
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?W=600",
    },

    {
        title: "Node.js & Express",
        description: "Build powerful backend servers and REST APIs with Node.js and Express.",
        instructor: "Hamza Shaikh",
        duration: "5 Weeks",
        level: "Intermediate",
        price: 59,
        category: "Backend",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?W=600",
    },

    {
        title: "MongoDB Database",
        description: "Learn NoSQL databases, schemas, and Mongoose to store real application data.",
        instructor: "Fatima Noor",
        duration: "4 Weeks",
        level: "Intermediate",
        price: 49,
        category: "Database",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?W=600",
    },

    {
        title: "Full Stack Development",
        description: "Combine React, Node.js, Express, and MongoDB to build complete application.",
        instructor: "Usman Tariq",
        duration: "10 Weeks",
        level: "Advanced",
        price: 99,
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?W=600",
    },
];

mongoose
     .connect(process.env.MONGO_URI)
     .then(async () => {
        await Course.deleteMany();
        await Course.insertMany(sampleCourses);
        console.log("Sample courses added to MongoDB Atlas");
        mongoose.connection.close();
     })
      .catch((err) => console.error("seed error:", err.message));