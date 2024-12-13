const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../src/assets/icons');
const INDEX_FILE = path.join(__dirname, '../src/assets/icons/index.ts');
const DOCS_FILE = path.join(__dirname, '../src/assets/icons/README.md');

interface IconMetadata {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  category?: string;
}

function parseIconName(fileName: string): IconMetadata {
  const name = fileName.replace('.svg', '');
  
  // Handle both formats: menu.svg and arrow-down--xs.svg
  if (name.includes('--')) {
    const [baseName, size] = name.split('--');
    return {
      name: baseName,
      size: size as IconMetadata['size'],
      category: baseName.split('-')[0],
    };
  }

  // For simple files like menu.svg, close.svg
  return {
    name,
    category: name,
    size: 'md' // default size
  };
}

function generateIconsIndex(): void {
  const svgFiles: string[] = fs.readdirSync(ICONS_DIR).filter((file: string) => file.endsWith('.svg'));
  console.log('Found SVG files:', svgFiles);
  const icons: IconMetadata[] = svgFiles.map((file: string) => parseIconName(file));
  
  let indexContent = `// This file is auto-generated. Do not edit manually\n\n`;
  indexContent += `import { FunctionComponent, SVGProps } from 'react';\n\n`;
  let exportsContent = `export const Icons = {\n`;
  
  let mainExports = `export {\n`;
  
  svgFiles.forEach((file: string) => {
    const iconName = file.replace('.svg', '');
    const importName = iconName
      .split(/--|-/)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    indexContent += `import ${importName} from './${file}';\n`;
    indexContent += `export { ${importName} };\n`;
    exportsContent += `  '${iconName}': ${importName},\n`;
    mainExports += `  ${importName},\n`;
  });
  
  indexContent += `\n${exportsContent}} as const;\n`;
  indexContent += `\nexport type IconComponent = FunctionComponent<SVGProps<SVGSVGElement>>;\n`;
  indexContent += `export type IconName = keyof typeof Icons;\n`;
  mainExports += `  Icons,\n  type IconComponent,\n  type IconName\n} from './assets/icons';\n`;

  fs.writeFileSync(INDEX_FILE, indexContent);
  
  // Update main index.ts
  const mainIndexPath = path.join(__dirname, '../src/index.ts');
  const mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8');
  const updatedContent = mainIndexContent.replace(
    /export \{[\s\S]*?\} from '\.\/assets\/icons';/,
    mainExports
  );
  fs.writeFileSync(mainIndexPath, updatedContent);
  
  console.log(`Generated icons index with ${svgFiles.length} icons`);
  console.log('Generated icons documentation');
}

generateIconsIndex(); 