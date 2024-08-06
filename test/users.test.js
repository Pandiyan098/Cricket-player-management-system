const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Authentication API', () => {
    let token;
    it('should register a new user', (done) => {
        chai.request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message').eql('User registered successfully');
                done();
            });
    });

});