import app from './app'
import './databse'

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`escuchando en el puerto http://localhost:${PORT}`)
});