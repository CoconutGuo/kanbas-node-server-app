import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import Hello from './hello.js'
import Lab5 from './lab5.js'
import CourseRoutes from './Courses/routes.js'
import ModuleRoutes from './Modules/routes.js'
import AssignmentRoutes from './Assignments/routes.js'

const app = express()
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
)
app.use(express.json())
AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)

// app.get('/hello', (req, res) => {
//   res.send('Life is good!')
// })
// app.get('/', (req, res) => {
//   res.send('Welcome to Full Stack Development!')
// })

// const express = require('express')
// const app = express()
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
// app.listen(4000)
