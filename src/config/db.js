import dotenv from "dotenv";
import pg from 'pg'

dotenv.config()

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
    console.log('Connect')
})

export default pool

