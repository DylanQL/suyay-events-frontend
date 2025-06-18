import * as express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env['PORT'] || 3000;

// Sirve los archivos estáticos desde el directorio dist
app.use(express.static(path.join(__dirname, '../../dist/suyay-login')));

// Maneja todas las rutas de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/suyay-login/index.html'));
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
