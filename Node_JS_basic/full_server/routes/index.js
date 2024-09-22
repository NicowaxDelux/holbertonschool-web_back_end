import { Router } from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = Router();

// Route for the homepage
router.get('/', AppController.getHomepage);

// Route for fetching all students
router.get('/students', StudentsController.getAllStudents);

// Route for fetching students by major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
