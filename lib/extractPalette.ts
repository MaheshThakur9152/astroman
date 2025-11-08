import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

interface ColorPalette {
  primary: string
  accent: string
  background: string
  text: string
}

async function extractPalette(): Promise<ColorPalette> {
  const framesDir = path.join(process.cwd(), 'public', 'frames')

  if (!fs.existsSync(framesDir)) {
    console.log('Frames directory not found. Using fallback colors.')
    return {
      primary: '#0b0f19',
      accent: '#7c3aed',
      background: '#0b0f19',
      text: '#e6eef8',
    }
  }

  const files = fs.readdirSync(framesDir).filter(file => file.endsWith('.png') || file.endsWith('.jpg'))

  if (files.length === 0) {
    throw new Error('No image files found in frames directory')
  }

  // Sample the first frame
  const imagePath = path.join(framesDir, files[0])
  const image = sharp(imagePath)
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })

  // Simple color sampling - take average of corners and center
  const colors: number[][] = []
  const width = info.width
  const height = info.height

  // Sample points
  const points = [
    [0, 0], // top-left
    [width - 1, 0], // top-right
    [0, height - 1], // bottom-left
    [width - 1, height - 1], // bottom-right
    [Math.floor(width / 2), Math.floor(height / 2)], // center
  ]

  for (const [x, y] of points) {
    const idx = (y * info.width + x) * 3
    colors.push([data[idx], data[idx + 1], data[idx + 2]])
  }

  // Calculate average color
  const avgColor = colors.reduce(
    (acc, color) => [acc[0] + color[0], acc[1] + color[1], acc[2] + color[2]],
    [0, 0, 0]
  ).map(c => Math.round(c / colors.length))

  const hexColor = `#${avgColor.map(c => c.toString(16).padStart(2, '0')).join('')}`

  // For now, use the sampled color as primary, and fallback for others
  return {
    primary: hexColor,
    accent: '#7c3aed',
    background: hexColor,
    text: '#e6eef8',
  }
}

async function main() {
  try {
    const palette = await extractPalette()
    const outputPath = path.join(process.cwd(), 'palette.json')
    fs.writeFileSync(outputPath, JSON.stringify(palette, null, 2))
    console.log('Palette extracted and saved to palette.json')
    console.log(palette)
  } catch (error) {
    console.error('Error extracting palette:', error)
  }
}

if (require.main === module) {
  main()
}

export { extractPalette }