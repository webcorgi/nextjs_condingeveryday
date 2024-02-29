/* export default function handler(req, res) {
    // req.method를 통해 HTTP 요청 메소드를 확인할 수 있습니다.
    if (req.method === 'GET') {
        // GET 요청에 대한 응답
        res.status(200).json({ message: 'This is a GET request to /api/route.' });
    } else {
        // 그 외 HTTP 메소드에 대한 처리
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
} */