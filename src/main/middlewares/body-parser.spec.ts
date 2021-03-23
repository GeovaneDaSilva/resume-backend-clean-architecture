import request from 'supertest'
import app from '../config/app'

describe('Body Parser MDW', () => {
  test('Should Body Parser',async () => {
    app.post('/body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/body_parser')
      .send({ name: 'Geovane' })
      .expect({ name: 'Geovane' })
  })
})
