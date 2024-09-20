// inisialisasi modul http
const http = require('http');

// buat server
const server = http.createServer((req, res) =>
{
    // res.writeHead(200,{'Content-Type': 'text/html'});
    // res.write('Selamat Pagi');
    
    
    res.writeHead(200,{'Content-Type': 'application/json'});

    if(req.url === '/book'){
        message = 'List Buku';
        data = ['Harry Portter','Garvil'];
    }else if (req.url === '/movie'){
        message = 'List Movie';
        data = ['Cars','UP'];
    }else if (req.url === '/fakultas'){
        message = 'List Fakultas';
        data = ['Ekonomi dan bisnis','Ilmu Komputer Rekayasa'];
    }else if (req.url === '/prodi'){
        message = 'List Prodi';
        data = ['Sistem Informasi','Teknologi Informasi'];
    } else{
        message = 'Tidak Ditemukan';
        data = [];
    }

    res.write(JSON.stringify({
        'message': message,
        'data':data,
        'status': 'success'
    }));
    res.end();
});


const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
});