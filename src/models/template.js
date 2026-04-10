import pool from "../config/db.js";

export const createTemplate = async (content) => {
    const sql = 'INSERT INTO templates (content) VALUES ($1) RETURNING *';

    const result = await pool.query(sql, [content]);
    return result.rows[0];
};

export const getLatestTemplate = async () => {
    const sql = 'SELECT * FROM templates ORDER BY created_at DESC LIMIT 1';

    const result = await pool.query(sql);
    return result.rows[0];
};