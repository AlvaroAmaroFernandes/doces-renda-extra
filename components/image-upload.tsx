"use client"

import { useState, useRef, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

interface ImageUploadProps {
  initialImage?: string
  onImageChange: (imageUrl: string) => void
  aspectRatio?: "square" | "video" | "portrait"
  className?: string
}

export default function ImageUpload({
  initialImage = "",
  onImageChange,
  aspectRatio = "square",
  className = "",
}: ImageUploadProps) {
  const [imageUrl, setImageUrl] = useState<string>(initialImage || "")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const newImageUrl = event.target?.result as string
      setImageUrl(newImageUrl)
      onImageChange(newImageUrl)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setImageUrl("")
    onImageChange("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={`relative border rounded-md overflow-hidden ${className}`}>
      {imageUrl ? (
        <>
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Uploaded image"
            className={`w-full h-full object-cover ${aspectRatioClasses[aspectRatio]}`}
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 rounded-full"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <div
          className={`flex flex-col items-center justify-center bg-gray-100 text-gray-500 w-full h-full ${aspectRatioClasses[aspectRatio]}`}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-8 w-8 mb-2" />
          <p className="text-sm">Clique para fazer upload</p>
        </div>
      )}
      <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
    </div>
  )
}
