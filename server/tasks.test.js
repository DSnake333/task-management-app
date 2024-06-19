const request = require('supertest');
const app = require('./app'); // Adjust the path to your Express app

describe('Tasks API', () => {
    it('should fetch all tasks', async () => {
        const response = await request(app).get('/api/tasks');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    it('should add a new task', async () => {
        const newTask = {
            title: 'Test Task',
            description: 'Test Description',
            status: 'To Do',
            dueDate: '2024-12-31'
        };
        const response = await request(app)
            .post('/api/tasks')
            .send(newTask)
            .set('Accept', 'application/json');
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTask.title);
    });
});
