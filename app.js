import express from 'express'
import cors from 'cors'
import session from 'express-session'
import 'dotenv/config'
import Hello from './hello.js'
import Lab5 from './lab5.js'
import CourseRoutes from './Courses/routes.js'
import ModuleRoutes from './Modules/routes.js'
import AssignmentRoutes from './Assignments/routes.js'
import UserRoutes from './users/routes.js'

import mongoose from 'mongoose'

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING)

const app = express()
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
)

const sessionOptions = {
  secret: 'any string',
  resave: false,
  saveUninitialized: false,
}
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true,
  }
}
app.use(session(sessionOptions))

app.use(express.json())
AssignmentRoutes(app)
ModuleRoutes(app)
CourseRoutes(app)
UserRoutes(app)
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
