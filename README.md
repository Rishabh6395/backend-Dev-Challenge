# Backend Development Challenge

## Challenge Overview
I am taking on the challenge to learn backend development entirely on my own, without watching any tutorials. The goal is to build a strong foundation by setting up everything from scratch, solving problems independently, and creating real-world projects.

## Learning Path

### Step 2: Build Your First API Without Any Tutorials
✅ **Task**:
- Create a basic REST API in Node.js & Express that serves a list of users.
- Implement CRUD operations (Create, Read, Update, Delete).

✅ **What to do**:
1. Initialize a Node.js project using `npm init -y`.
2. Install `express` and create a simple server.
3. Define routes:
   - `GET /users`
   - `POST /users`
   - `PUT /users/:id`
   - `DELETE /users/:id`
4. Use Postman or cURL to test the API.

✅ **Resources (Only when stuck)**:
- [Express.js Docs](https://expressjs.com/)

---

### Step 3: Add a Database (MongoDB)
✅ **Task**:
- Connect your Express app to MongoDB.
- Store user data in a MongoDB collection.
- Implement CRUD operations with a database.

✅ **What to do**:
1. Install `mongoose`.
2. Define a `User` Schema.
3. Modify your routes to interact with MongoDB.

✅ **Resources (Only when stuck)**:
- [Mongoose Docs](https://mongoosejs.com/)

---

### Step 4: Implement Authentication (JWT)
✅ **Task**:
- Add user authentication using JWT (JSON Web Token).
- Implement login and registration routes.
- Protect some API routes with authentication.

✅ **What to do**:
1. Install `jsonwebtoken` and `bcryptjs`.
2. Implement `POST /register` and `POST /login`.
3. Store hashed passwords in MongoDB.
4. Use JWT for protected routes.

✅ **Resources (Only when stuck)**:
- [JWT Docs](https://jwt.io/)
- [Bcrypt Docs](https://github.com/kelektiv/node.bcrypt.js)

---

### Step 5: Implement File Uploads
✅ **Task**:
- Allow users to upload images (e.g., profile pictures).
- Store files in a directory or use Cloudinary / AWS S3.

✅ **What to do**:
1. Use `multer` for handling file uploads.
2. Save file paths in the database.
3. Implement `POST /upload` route.

✅ **Resources (Only when stuck)**:
- [Multer Docs](https://github.com/expressjs/multer)
- [Cloudinary Docs](https://cloudinary.com/documentation)

---

### Step 6: Add Real-Time Features (WebSockets)
✅ **Task**:
- Implement real-time chat using Socket.io.

✅ **What to do**:
1. Install `socket.io`.
2. Create a WebSocket server.
3. Allow users to send and receive real-time messages.

✅ **Resources (Only when stuck)**:
- [Socket.io Docs](https://socket.io/)

---

### Step 7: Deploy Your API
✅ **Task**:
- Deploy the API on Render / Railway / Vercel.
- Set up MongoDB Atlas.
- Use PM2 to keep your backend running.

✅ **Resources (Only when stuck)**:
- [Render Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://www.mongodb.com/atlas)

---

### Final Step: Build a Full-Stack Project
Now, use everything you've learned to build a full project. Some ideas:
- ✅ **Job Portal**: Where recruiters post jobs & users apply.
- ✅ **E-commerce API**: With authentication, product listings, cart, and checkout.
- ✅ **Blog API**: Where users can write and comment on blogs.

---

## Rules to Follow
1. **DO NOT** watch full-length tutorials before coding.
2. Start coding **FIRST**. When stuck, search on Google or read documentation.
3. Only watch tutorials after attempting the feature yourself.
4. Learn by building, debugging, and experimenting.

---

## Progress Tracker
- [ ] Step 2: Build Your First API Without Any Tutorials
- [ ] Step 3: Add a Database (MongoDB)
- [ ] Step 4: Implement Authentication (JWT)
- [ ] Step 5: Implement File Uploads
- [ ] Step 6: Add Real-Time Features (WebSockets)
- [ ] Step 7: Deploy Your API
- [ ] Final Step: Build a Full-Stack Project

---

Let’s get started and make this challenge a success!