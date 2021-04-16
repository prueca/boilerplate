import express from 'express'
import path from 'path'

export default app => {
  const fontawesome = path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')
  const jquery = path.join(__dirname, '../node_modules/jquery/dist')
  const ioClient = path.join(__dirname, '../node_modules/socket.io/client-dist')

  app.use('/webfonts', express.static(path.join(fontawesome, 'webfonts')))
  app.use('/fontawesome', express.static(path.join(fontawesome, 'css')))
  app.use('/jquery', express.static(jquery))
  app.use('/socket.io', express.static(ioClient))
}