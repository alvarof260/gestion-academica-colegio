import express from 'express'

export function initializeConfigApp (app) {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
}
