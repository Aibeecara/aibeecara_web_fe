import React, { useState, useRef } from 'react'
import QRCode from 'qrcode.react'
import html2canvas from 'html2canvas'

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('')
  const [size, setSize] = useState(128)
  const [bgColor, setBgColor] = useState('#ffffff')
  const [fgColor, setFgColor] = useState('#000000')
  const [image, setImage] = useState(null)
  const [canvasSize, setCanvasSize] = useState(256) // New state for canvas size
  const [level, setLevel] = useState('L') // New state for error correction level
  const qrRef = useRef()

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSizeChange = (e) => {
    setSize(e.target.value)
  }

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value)
  }

  const handleFgColorChange = (e) => {
    setFgColor(e.target.value)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCanvasSizeChange = (e) => {
    setCanvasSize(e.target.value)
  }

  const handleLevelChange = (e) => {
    setLevel(e.target.value)
  }

  const downloadQRCode = () => {
    if (qrRef.current) {
      html2canvas(qrRef.current, { scale: 1 }).then((canvas) => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = 'qrcode.png'
        link.click()
      })
    }
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
      <div className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={handleUrlChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <label className="mb-2">
          QR Code Size:
          <input
            type="number"
            value={size}
            onChange={handleSizeChange}
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="mb-2">
          Canvas Size:
          <input
            type="number"
            value={canvasSize}
            onChange={handleCanvasSizeChange}
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="mb-2">
          Background Color:
          <input
            type="color"
            value={bgColor}
            onChange={handleBgColorChange}
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="mb-2">
          Foreground Color:
          <input
            type="color"
            value={fgColor}
            onChange={handleFgColorChange}
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="mb-2">
          Error Correction Level:
          <select
            value={level}
            onChange={handleLevelChange}
            className="ml-2 p-2 border border-gray-300 rounded"
          >
            <option value="L">L (Low) - 7%</option>
            <option value="M">M (Medium) - 15%</option>
            <option value="Q">Q (Quartile) - 25%</option>
            <option value="H">H (High) - 30%</option>
          </select>
        </label>
        <label className="mb-4">
          Upload Center Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          onClick={downloadQRCode}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Download QR Code
        </button>
      </div>
      <div
        className="relative"
        ref={qrRef}
        style={{ width: canvasSize, height: canvasSize }}
      >
        <QRCode
          value={url}
          size={size}
          bgColor={bgColor}
          fgColor={fgColor}
          level={level} // Set the error correction level
          style={{ width: '100%', height: '100%' }}
        />
        {image && (
          <img
            src={image}
            alt="Center Image"
            className="absolute inset-0 m-auto"
            style={{ width: size / 4, height: size / 4, objectFit: 'cover' }}
          />
        )}
      </div>
    </div>
  )
}

export default QRCodeGenerator
