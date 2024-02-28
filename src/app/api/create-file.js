
import fs from 'fs';
import path from 'path';

export function createFile(){
    /* 파일생성 */
    const filePath = path.join(process.cwd(), 'data', 'example.txt');
    fs.writeFile(filePath, 'Hello, this is a test file!', 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
    });
}