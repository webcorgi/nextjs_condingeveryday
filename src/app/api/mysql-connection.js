import connection from "@/lib/mysql";

export async function mysqlConnection(){
    const [rows, fields] = await connection.query(
        'SELECT * FROM topics'
    );
    console.log("🚀 ~ TopicsPage ~ rows:", rows)
    return rows
}