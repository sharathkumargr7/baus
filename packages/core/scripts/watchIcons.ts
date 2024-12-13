import chokidar from 'chokidar';
import { generateIconsIndex } from './generateIcons';
import path from 'path';

const ICONS_DIR = path.join(__dirname, '../src/assets/icons');

console.log('Watching for icon changes...');

chokidar.watch(`${ICONS_DIR}/*.svg`, {
  ignoreInitial: false
}).on('all', (event, path) => {
  console.log(`Icon ${event}: ${path}`);
  generateIconsIndex().catch(console.error);
}); 