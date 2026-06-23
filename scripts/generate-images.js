import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsPath = path.join(__dirname, '../src/data/projects.ts');
const imagesDir = path.join(__dirname, '../public/images/projects');

// Read the projects file
let projectsContent = fs.readFileSync(projectsPath, 'utf-8');

// Parse project IDs from the file
const projectIdMatches = projectsContent.match(/id:\s*'([^']+)'/g);
const projectIds = projectIdMatches.map(match => match.replace(/id:\s*'|'/g, ''));

console.log('🔍 Scanning image directories...\n');

// For each project, scan its images folder
projectIds.forEach(projectId => {
  const projectImagesDir = path.join(imagesDir, projectId);

  if (!fs.existsSync(projectImagesDir)) {
    console.log(`⚠️  No images folder found for: ${projectId}`);
    return;
  }

  // Read all image files
  const files = fs.readdirSync(projectImagesDir);
  const imageFiles = files
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .filter(file => file.startsWith('img-'))
    .sort((a, b) => {
      // Extract numbers and sort numerically
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  if (imageFiles.length === 0) {
    console.log(`⚠️  No images found for: ${projectId}`);
    return;
  }

  // Generate the images array
  const imagesPaths = imageFiles.map(file => `      '/images/projects/${projectId}/${file}',`).join('\n');
  const imagesArray = `[\n${imagesPaths}\n    ]`;

  // Find and replace the images array for this project
  // Match pattern: id: 'project-id'...images: [...]
  const regex = new RegExp(
    `(id:\\s*'${projectId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[^]*?)images:\\s*\\[[^\\]]*\\]`,
    's'
  );

  if (regex.test(projectsContent)) {
    projectsContent = projectsContent.replace(regex, `$1images: ${imagesArray}`);
    console.log(`✅ Updated: ${projectId} (${imageFiles.length} images)`);
  } else {
    console.log(`⚠️  Could not find images array for: ${projectId}`);
  }
});

// Write the updated content back
fs.writeFileSync(projectsPath, projectsContent, 'utf-8');
console.log('\n✨ Image arrays updated successfully!\n');
