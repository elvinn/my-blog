import { Router } from 'express';
import Blog from '@controllers/blog';

const router = Router();

router.post('/create', Blog.createBlog);
router.post('/delete', Blog.deleteBlog);
router.post('/update', Blog.updateBlog);
router.post('/query', Blog.queryBlog);

export default router;
