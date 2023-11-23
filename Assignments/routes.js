import db from '../Database/index.js'
function AssignmentRoutes(app) {
  app.put('/api/assignments/:aid', (req, res) => {
    const { aid } = req.params
    const assIndex = db.assignments.findIndex((m) => m._id === aid)
    db.assignments[assIndex] = {
      ...db.assignments[assIndex],
      ...req.body,
    }
    res.sendStatus(204)
  })

  app.delete('/api/assignments/:aid', (req, res) => {
    const { aid } = req.params
    db.assignments = db.assignments.filter((m) => m._id !== aid)
    res.sendStatus(200)
  })

  app.post('/api/courses/:cid/assignments', (req, res) => {
    const { cid } = req.params
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    }
    db.assignments.push(newModule)
    res.send(newModule)
  })

  app.get('/api/courses/:cid/assignments', (req, res) => {
    const { cid } = req.params
    const assignments = db.assignments.filter((m) => m.course === cid)
    res.send(assignments)
  })
}
export default AssignmentRoutes
