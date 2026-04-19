import pool from "../config/db.js";

export const createTemplate = async (content) => {
    const sql = `
    INSERT INTO templates (content)
    VALUES ($1)
    RETURNING *;
  `;

    const result = await pool.query(sql, [content]);
    return result.rows[0] ?? null;
};

export const getLatestTemplate = async () => {
    const sql = `
    SELECT *
    FROM templates
    ORDER BY created_at DESC
    LIMIT 1;
  `;

    const result = await pool.query(sql);
    return result.rows[0] ?? null;
};

export const updateTemplateById = async (id, content) => {
    const sql = `
    UPDATE templates
    SET content = $1
    WHERE id = $2
    RETURNING *;
  `;

    const result = await pool.query(sql, [content, id]);
    return result.rows[0] ?? null;
};