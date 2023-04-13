import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

 import { authenticate,getAllPosts,home,getSinglePost ,createPost,addComment,getUser,deletePost,likePost,unlikePost,followUser,unfollowUser} from "../controllers/user.js";    
import { authMiddleware } from "../middleware/auth.js";  

app.get("/", home);
app.post("/api/authenticate",  authenticate);
app.get("/api/all_posts", authMiddleware, getAllPosts);
app.get("/api/posts/:id", authMiddleware, getSinglePost);
app.post("/api/posts", authMiddleware, createPost);
app.post("/api/comment/:id", authMiddleware, addComment);
app.get("/api/user", authMiddleware, getUser);
app.delete("/api/posts/:id", authMiddleware, deletePost);
app.post("/api/like/:id", authMiddleware,likePost);
app.post("/api/unlike/:id", authMiddleware, unlikePost);
app.post("/api/follow/:id", authMiddleware, followUser);
app.post("/api/unfollow/:id", authMiddleware,unfollowUser);

export default app;
